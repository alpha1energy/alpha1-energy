import { createClient } from '@supabase/supabase-js';
import { Client } from '@notionhq/client';

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
    const file = formData.get('file');

    let billUrl = null;

    if (file && file.size > 0) {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.SUPABASE_SERVICE_ROLE_KEY
      );
      const safeName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, '_');
      const fileName = `${Date.now()}-${safeName}`;
      const fileBuffer = await file.arrayBuffer();
      const { error } = await supabase.storage
        .from('utility-bills')
        .upload(fileName, fileBuffer, { contentType: file.type });
      if (!error) {
        const { data: urlData, error: signError } = await supabase.storage
          .from('utility-bills')
          .createSignedUrl(fileName, 60 * 60 * 24 * 7);
        if (!signError) {
          billUrl = urlData.signedUrl;
        } else {
          console.error('Supabase signed URL error:', signError);
        }
      } else {
        console.error('Supabase upload error:', error);
      }
    }

    const notion = new Client({ auth: process.env.NOTION_API_KEY });

    await notion.pages.create({
      parent: {
        type: 'data_source_id',
        data_source_id: 'bd101f9e-4d03-83b5-bb8b-07ad2d3e4b33',
      },
      properties: {
        'Business name': { title: [{ text: { content: businessName || '' } }] },
        'contact name': { rich_text: [{ text: { content: name || '' } }] },
        'Phone': { phone_number: phone || '' },
        'Email': { email: email || '' },
        'Notes': { rich_text: [{ text: { content: notes || '' } }] },
        'Bill link': { url: billUrl },
      },
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Submission error:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
