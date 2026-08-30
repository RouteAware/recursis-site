// Recursis idea-pitch endpoint — forwards submissions to Alexander via Resend.

const TO = 'info@recursisdigital.com';
const FROM = 'Recursis pitches <pitches@recursisdigital.com>';

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  try {
    const { name, email, title, pitch, links, website } = req.body || {};
    if (website) { res.status(200).json({ ok: true }); return; } // honeypot

    const clean = (s, max) => String(s || '').trim().slice(0, max);
    const cName = clean(name, 120);
    const cEmail = clean(email, 200);
    const cTitle = clean(title, 160);
    const cPitch = clean(pitch, 6000);
    const cLinks = clean(links, 1000);
    if (!cName || !cTitle || !cPitch || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cEmail)) {
      res.status(400).json({ error: 'Name, a valid email, an idea name, and the pitch are all needed.' });
      return;
    }

    const text = [
      'New idea pitched to Recursis',
      '-----------------------------',
      `From:  ${cName}`,
      `Email: ${cEmail}`,
      `Idea:  ${cTitle}`,
      cLinks ? `Links: ${cLinks}` : null,
      '',
      'The pitch:',
      cPitch,
    ].filter(Boolean).join('\n');

    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: cEmail,
        subject: `Recursis pitch — ${cTitle}`,
        text,
      }),
    });

    if (!r.ok) {
      const detail = await r.text().catch(() => '');
      console.error('Resend error', r.status, detail.slice(0, 300));
      res.status(502).json({ error: "Couldn't send just now — email us at info@recursisdigital.com instead." });
      return;
    }
    res.status(200).json({ ok: true });
  } catch (e) {
    console.error('idea error', e);
    res.status(500).json({ error: "Something went wrong — email us at info@recursisdigital.com instead." });
  }
};
