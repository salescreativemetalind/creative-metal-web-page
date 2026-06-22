import x from 'nodemailer';

async function y(n) {
  try {
    const i = await n.request.json(), { name: s, company: o, phone: e, email: r, metal: p, product: l, message: a } = i;
    if (!(s == null ? void 0 : s.trim()) || !(e == null ? void 0 : e.trim()) || !p || !l) return new Response(JSON.stringify({ ok: false, error: "Required fields missing." }), { status: 400, headers: { "Content-Type": "application/json" } });
    const d = x.createTransport({ service: "gmail", auth: { user: process.env.SMTP_USER || "creativemetalind@gmail.com", pass: process.env.SMTP_PASS || "" } }), c = `New Enquiry from ${s}${o ? ` \u2014 ${o}` : ""} | ${p}`, m = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1E1208;">
  <div style="background:linear-gradient(135deg,#E07B00,#C0392B);padding:24px 32px;border-radius:8px 8px 0 0;">
    <h1 style="color:#fff;margin:0;font-size:22px;">New Product Enquiry</h1>
    <p style="color:rgba(255,255,255,0.85);margin:6px 0 0;font-size:14px;">Creative Metal Industries \u2014 Website Contact Form</p>
  </div>

  <div style="background:#FFF8F2;padding:28px 32px;border:1px solid #E8D5BC;border-top:none;border-radius:0 0 8px 8px;">

    <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #E8D5BC;width:180px;">
          <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#E07B00;">Full Name</span>
        </td>
        <td style="padding:10px 0 10px 16px;border-bottom:1px solid #E8D5BC;">
          <strong>${t(s)}</strong>
        </td>
      </tr>
      ${o ? `
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #E8D5BC;">
          <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#E07B00;">Company</span>
        </td>
        <td style="padding:10px 0 10px 16px;border-bottom:1px solid #E8D5BC;">${t(o)}</td>
      </tr>` : ""}
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #E8D5BC;">
          <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#E07B00;">Phone / WhatsApp</span>
        </td>
        <td style="padding:10px 0 10px 16px;border-bottom:1px solid #E8D5BC;">
          <a href="tel:${t(e)}" style="color:#E07B00;">${t(e)}</a>
        </td>
      </tr>
      ${r ? `
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #E8D5BC;">
          <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#E07B00;">Email</span>
        </td>
        <td style="padding:10px 0 10px 16px;border-bottom:1px solid #E8D5BC;">
          <a href="mailto:${t(r)}" style="color:#E07B00;">${t(r)}</a>
        </td>
      </tr>` : ""}
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #E8D5BC;">
          <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#E07B00;">Material Type</span>
        </td>
        <td style="padding:10px 0 10px 16px;border-bottom:1px solid #E8D5BC;">${t(p)}</td>
      </tr>
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #E8D5BC;">
          <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#E07B00;">Product Form</span>
        </td>
        <td style="padding:10px 0 10px 16px;border-bottom:1px solid #E8D5BC;">${t(l)}</td>
      </tr>
      ${a ? `
      <tr>
        <td style="padding:10px 0;" valign="top">
          <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#E07B00;">Requirements</span>
        </td>
        <td style="padding:10px 0 10px 16px;">
          <p style="margin:0;line-height:1.7;white-space:pre-wrap;">${t(a)}</p>
        </td>
      </tr>` : ""}
    </table>

    <div style="margin-top:24px;padding:16px;background:#FFF3E0;border-radius:6px;border-left:4px solid #E07B00;">
      <p style="margin:0;font-size:13px;color:#5C4033;">
        <strong>Quick Actions:</strong><br/>
        ${e ? `\u{1F4DE} <a href="tel:${t(e)}" style="color:#E07B00;">${t(e)}</a>` : ""}
        ${r ? ` &nbsp;|&nbsp; \u2709 <a href="mailto:${t(r)}" style="color:#E07B00;">${t(r)}</a>` : ""}
        ${e ? ` &nbsp;|&nbsp; \u{1F4AC} <a href="https://wa.me/${e.replace(/\D/g, "")}" style="color:#E07B00;">WhatsApp</a>` : ""}
      </p>
    </div>

    <p style="margin-top:20px;font-size:11px;color:#8A6648;text-align:center;">
      This enquiry was submitted via creativemetalind.com contact form.
    </p>
  </div>
</body>
</html>`;
    return await d.sendMail({ from: `"CMI Website" <${process.env.SMTP_USER || "creativemetalind@gmail.com"}>`, to: "creativemetalind@gmail.com", replyTo: r || void 0, subject: c, html: m, text: [`New Enquiry \u2014 ${s}${o ? ` (${o})` : ""}`, `Phone: ${e}`, r ? `Email: ${r}` : "", `Material: ${p}`, `Product: ${l}`, a ? `
Requirements:
${a}` : ""].filter(Boolean).join(`
`) }), new Response(JSON.stringify({ ok: true }), { status: 200, headers: { "Content-Type": "application/json" } });
  } catch (i) {
    return console.error("Enquiry email error:", i), new Response(JSON.stringify({ ok: false, error: "Failed to send. Please call us directly." }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}
function t(n) {
  return n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export { y as POST };
//# sourceMappingURL=enquiry2.mjs.map
