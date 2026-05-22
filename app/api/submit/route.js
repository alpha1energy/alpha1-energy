import { createClient } from '@supabase/supabase-js';
import { Client } from '@notionhq/client';

const DATA_SOURCE_ID = 'bd101f9e-4d03-83b5-bb8b-07ad2d3e4b33';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name');
    const businessName = formData.get('businessName');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const utilityCompany = formData.get('utilityCompany');
    const serviceType = formData.get('serviceType');
    const notes = formData.get('notes');
    const files = formData.getAll('file').filter((f) => f && f.size > 0);
    const pageId = formData.get('pageId'); // set if step-1 partial save succeeded

    // Upload every file to Supabase and collect signed URLs
    const billUrls = [];
    if (files.length > 0) {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.SUPABASE_SERVICE_ROLE_KEY
      );

      for (const file of files) {
        const safeName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, '_');
        const fileName = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}-${safeName}`;
        const fileBuffer = await file.arrayBuffer();

        const { error } = await supabase.storage
          .from('utility-bills')
          .upload(fileName, fileBuffer, { contentType: file.type });
        if (error) {
          console.error('Supabase upload error:', fileName, error);
          continue;
        }

        const { data: urlData, error: signError } = await supabase.storage
          .from('utility-bills')
          .createSignedUrl(fileName, 60 * 60 * 24 * 7);
        if (signError) {
          console.error('Supabase signed URL error:', fileName, signError);
          continue;
        }

        billUrls.push({ name: file.name, url: urlData.signedUrl });
      }
    }

    const primaryUrl = billUrls[0]?.url || null;

    // Combine the user-supplied note with a file index when there are
    // multiple uploads (the Notion URL property only holds one value).
    const notesParts = [];
    if (notes) notesParts.push(notes);
    if (billUrls.length > 1) {
      notesParts.push(
        `Files (${billUrls.length}):\n` +
          billUrls.map((b, i) => `${i + 1}. ${b.name} — ${b.url}`).join('\n')
      );
    }
    const notesText = notesParts.join('\n\n');

    // Common properties applied whether we're creating or updating
    const properties = {
      'Business name': { title: [{ text: { content: businessName || '' } }] },
      'contact name': { rich_text: [{ text: { content: name || '' } }] },
      'Phone': { phone_number: phone || '' },
      'Email': { email: email || '' },
      'Notes': { rich_text: [{ text: { content: notesText } }] },
      'Bill link': { url: primaryUrl },
    };

    const children = billUrls.map((b) => ({
      object: 'block',
      type: 'bookmark',
      bookmark: { url: b.url, caption: [{ type: 'text', text: { content: b.name } }] },
    }));

    const notion = new Client({ auth: process.env.NOTION_API_KEY });

    if (pageId) {
      // Update the row created during step 1 with the rest of the lead data
      await notion.pages.update({ page_id: pageId, properties });
      if (children.length > 0) {
        await notion.blocks.children.append({ block_id: pageId, children });
      }
    } else {
      // No pageId — create a fresh record (step 1 was skipped or failed)
      await notion.pages.create({
        parent: { type: 'data_source_id', data_source_id: DATA_SOURCE_ID },
        properties,
        children: children.length > 0 ? children : undefined,
      });
    }

    return new Response(
      JSON.stringify({ success: true, filesUploaded: billUrls.length, updated: !!pageId }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Submission error:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
