import { Client } from '@notionhq/client';

// Step-1 lead capture: writes business name + phone to Notion immediately
// so we keep the lead even if the user abandons step 2. Returns the
// Notion page id so step 2 can update the same record instead of creating
// a duplicate.
export async function POST(request) {
  try {
    const formData = await request.formData();
    const businessName = formData.get('businessName');
    const phone = formData.get('phone');

    if (!businessName || !phone) {
      return new Response(
        JSON.stringify({ error: 'Business name and phone are required' }),
        { status: 400 }
      );
    }

    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const page = await notion.pages.create({
      parent: {
        type: 'data_source_id',
        data_source_id: 'bd101f9e-4d03-83b5-bb8b-07ad2d3e4b33',
      },
      properties: {
        'Business name': { title: [{ text: { content: businessName } }] },
        'Phone': { phone_number: phone },
        'Notes': { rich_text: [{ text: { content: '⏳ Step 1 completed — awaiting full submission.' } }] },
      },
    });

    return new Response(JSON.stringify({ pageId: page.id }), { status: 200 });
  } catch (error) {
    console.error('Partial save error:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
