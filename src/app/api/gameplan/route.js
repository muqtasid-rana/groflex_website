// Server-side OpenAI call for the Gameplan page.
// Keeps OPENAI_API_KEY off the client bundle.

export const runtime = 'nodejs';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export async function POST(req) {
  if (!OPENAI_API_KEY) {
    return Response.json(
      { error: 'OPENAI_API_KEY is not configured on the server.' },
      { status: 500 }
    );
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { systemPrompt, userPrompt } = body || {};
  if (typeof systemPrompt !== 'string' || typeof userPrompt !== 'string') {
    return Response.json(
      { error: 'systemPrompt and userPrompt are required' },
      { status: 400 }
    );
  }

  try {
    const upstream = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        temperature: 0.75,
        response_format: { type: 'json_object' },
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt },
        ],
      }),
    });

    if (!upstream.ok) {
      const text = await upstream.text();
      return Response.json(
        { error: `OpenAI ${upstream.status}: ${text.slice(0, 500)}` },
        { status: 502 }
      );
    }

    const data = await upstream.json();
    const content = data?.choices?.[0]?.message?.content || '{}';
    let parsed;
    try {
      parsed = JSON.parse(content);
    } catch {
      return Response.json(
        { error: 'OpenAI did not return valid JSON.' },
        { status: 502 }
      );
    }
    return Response.json({ payload: parsed });
  } catch (err) {
    return Response.json(
      { error: err?.message || 'Unknown server error' },
      { status: 500 }
    );
  }
}
