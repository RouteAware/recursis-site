// Recursis consulting/build inquiry — forwards to Alexander via Resend.

const { rateLimited, tooLarge, oneLine } = require('./_guard.js');

const TO = 'info@recursisdigital.com';
const FROM = 'Recursis builds <pitches@recursisdigital.com>';

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') { res.status(405).json({ error: 'Method not allowed' }); return; }
  try {
    if (tooLarge(req, 64 * 1024)) { res.status(413).json({ error: 'That submission is too large.' }); return; }
    if (rateLimited(req)) { res.status(429).json({ error: 'Too many submissions from this connection — give it a few minutes and try again.' }); return; }
    const { name, email, project, budget, links, website } = req.body || {};
    if (website) { res.status(200).json({ ok: true }); return; } // honeypot

    const clean = (s, max) => String(s || '').trim().slice(0, max);
    const cName = oneLine(clean(name, 120));
    const cEmail = oneLine(clean(email, 200));
    const cProject = clean(project, 6000);
    const cBudget = oneLine(clean(budget, 200));
    const cLinks = clean(links, 1000);
    if (!cName || !cProject || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cEmail)) {
      res.status(400).json({ error: 'Name, a valid email, and the project description are all needed.' });
      return;
    }

    const text = [
      'New BUILD INQUIRY (consulting) via recursisdigital.com/hire',
      '------------------------------------------------------------',
      `From:   ${cName}`,
      `Email:  ${cEmail}`,
      cBudget ? `Budget: ${cBudget}` : null,
      cLinks ? `Links:  ${cLinks}` : null,
      '',
      'The project:',
      cProject,
    ].filter(Boolean).join('\n');

    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: FROM, to: [TO], reply_to: cEmail,
        subject: `Build inquiry — ${cName}`, text,
      }),
    });
    if (!r.ok) {
      console.error('Resend error', r.status, (await r.text().catch(() => '')).slice(0, 300));
      res.status(502).json({ error: "Couldn't send just now — email us at info@recursisdigital.com instead." });
      return;
    }
    res.status(200).json({ ok: true });
  } catch (e) {
    console.error('hire error', e);
    res.status(500).json({ error: "Something went wrong — email us at info@recursisdigital.com instead." });
  }
};
