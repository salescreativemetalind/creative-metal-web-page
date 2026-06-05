import type { APIEvent } from "@solidjs/start/server";
import nodemailer from "nodemailer";

export async function POST(event: APIEvent) {
  try {
    const body = await event.request.json();
    const { name, company, phone, email, metal, product, message } = body;

    // ── Validation ────────────────────────────────────────────────────────────
    if (!name?.trim() || !phone?.trim() || !metal || !product) {
      return new Response(
        JSON.stringify({ ok: false, error: "Required fields missing." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // ── Email transport ───────────────────────────────────────────────────────
    // Uses Gmail SMTP with an App Password.
    // Set SMTP_USER and SMTP_PASS as environment variables on your server.
    // To create a Gmail App Password:
    //   1. Go to https://myaccount.google.com/security
    //   2. Enable 2-Step Verification
    //   3. Search "App passwords" → create one for "Mail"
    //   4. Use that 16-char password as SMTP_PASS
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER || "creativemetalind@gmail.com",
        pass: process.env.SMTP_PASS || "",   // ← set via env variable
      },
    });

    const subject = `New Enquiry from ${name}${company ? ` — ${company}` : ""} | ${metal}`;

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1E1208;">
  <div style="background:linear-gradient(135deg,#E07B00,#C0392B);padding:24px 32px;border-radius:8px 8px 0 0;">
    <h1 style="color:#fff;margin:0;font-size:22px;">New Product Enquiry</h1>
    <p style="color:rgba(255,255,255,0.85);margin:6px 0 0;font-size:14px;">Creative Metal Industries — Website Contact Form</p>
  </div>

  <div style="background:#FFF8F2;padding:28px 32px;border:1px solid #E8D5BC;border-top:none;border-radius:0 0 8px 8px;">

    <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #E8D5BC;width:180px;">
          <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#E07B00;">Full Name</span>
        </td>
        <td style="padding:10px 0 10px 16px;border-bottom:1px solid #E8D5BC;">
          <strong>${escHtml(name)}</strong>
        </td>
      </tr>
      ${company ? `
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #E8D5BC;">
          <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#E07B00;">Company</span>
        </td>
        <td style="padding:10px 0 10px 16px;border-bottom:1px solid #E8D5BC;">${escHtml(company)}</td>
      </tr>` : ""}
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #E8D5BC;">
          <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#E07B00;">Phone / WhatsApp</span>
        </td>
        <td style="padding:10px 0 10px 16px;border-bottom:1px solid #E8D5BC;">
          <a href="tel:${escHtml(phone)}" style="color:#E07B00;">${escHtml(phone)}</a>
        </td>
      </tr>
      ${email ? `
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #E8D5BC;">
          <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#E07B00;">Email</span>
        </td>
        <td style="padding:10px 0 10px 16px;border-bottom:1px solid #E8D5BC;">
          <a href="mailto:${escHtml(email)}" style="color:#E07B00;">${escHtml(email)}</a>
        </td>
      </tr>` : ""}
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #E8D5BC;">
          <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#E07B00;">Material Type</span>
        </td>
        <td style="padding:10px 0 10px 16px;border-bottom:1px solid #E8D5BC;">${escHtml(metal)}</td>
      </tr>
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #E8D5BC;">
          <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#E07B00;">Product Form</span>
        </td>
        <td style="padding:10px 0 10px 16px;border-bottom:1px solid #E8D5BC;">${escHtml(product)}</td>
      </tr>
      ${message ? `
      <tr>
        <td style="padding:10px 0;" valign="top">
          <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#E07B00;">Requirements</span>
        </td>
        <td style="padding:10px 0 10px 16px;">
          <p style="margin:0;line-height:1.7;white-space:pre-wrap;">${escHtml(message)}</p>
        </td>
      </tr>` : ""}
    </table>

    <div style="margin-top:24px;padding:16px;background:#FFF3E0;border-radius:6px;border-left:4px solid #E07B00;">
      <p style="margin:0;font-size:13px;color:#5C4033;">
        <strong>Quick Actions:</strong><br/>
        ${phone ? `📞 <a href="tel:${escHtml(phone)}" style="color:#E07B00;">${escHtml(phone)}</a>` : ""}
        ${email ? ` &nbsp;|&nbsp; ✉ <a href="mailto:${escHtml(email)}" style="color:#E07B00;">${escHtml(email)}</a>` : ""}
        ${phone ? ` &nbsp;|&nbsp; 💬 <a href="https://wa.me/${phone.replace(/\D/g, "")}" style="color:#E07B00;">WhatsApp</a>` : ""}
      </p>
    </div>

    <p style="margin-top:20px;font-size:11px;color:#8A6648;text-align:center;">
      This enquiry was submitted via creativemetalind.com contact form.
    </p>
  </div>
</body>
</html>`;

    await transporter.sendMail({
      from: `"CMI Website" <${process.env.SMTP_USER || "creativemetalind@gmail.com"}>`,
      to: "creativemetalind@gmail.com",
      replyTo: email || undefined,
      subject,
      html,
      text: [
        `New Enquiry — ${name}${company ? ` (${company})` : ""}`,
        `Phone: ${phone}`,
        email ? `Email: ${email}` : "",
        `Material: ${metal}`,
        `Product: ${product}`,
        message ? `\nRequirements:\n${message}` : "",
      ].filter(Boolean).join("\n"),
    });

    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (err: any) {
    console.error("Enquiry email error:", err);
    return new Response(
      JSON.stringify({ ok: false, error: "Failed to send. Please call us directly." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

function escHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
