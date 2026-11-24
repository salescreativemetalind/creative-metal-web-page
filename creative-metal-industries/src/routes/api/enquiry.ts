import type { APIEvent } from "@solidjs/start/server";
import nodemailer from "nodemailer";

const MAX_BODY_BYTES = 16 * 1024;
const RESPONSE_HEADERS = {
  "Content-Type": "application/json",
  "Cache-Control": "no-store, private",
};

const FIELD_LIMITS = {
  name: 100,
  company: 150,
  phone: 32,
  email: 254,
  metal: 64,
  product: 64,
  message: 4000,
} as const;

const HEADER_CONTROL_RE = /[\r\n\u0000-\u001f\u007f]/;
const BODY_CONTROL_RE = /[\u0000\u000b\u000c\u007f]/;
const SINGLE_EMAIL_RE = /[A-Za-z0-9.!#%&*+\/=?^_{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+/;

type Enquiry = {
  name: string;
  company: string;
  phone: string;
  email: string;
  metal: string;
  product: string;
  message: string;
};

type MailTransport = {
  sendMail(options: Record<string, unknown>): Promise<unknown>;
};

type EnquiryDependencies = {
  createTransport: (options: Record<string, unknown>) => MailTransport;
  smtpUser: () => string | undefined;
  smtpPass: () => string | undefined;
  logError: (event: string) => void;
};

const defaultDependencies: EnquiryDependencies = {
  createTransport: (options) => nodemailer.createTransport(options) as MailTransport,
  smtpUser: () => process.env.SMTP_USER,
  smtpPass: () => process.env.SMTP_PASS,
  logError: (event) => console.error("Enquiry email error:", event),
};

function jsonResponse(status: number, payload: Record<string, unknown>): Response {
  return new Response(JSON.stringify(payload), { status, headers: RESPONSE_HEADERS });
}

function invalid(error = "Invalid enquiry details."): Response {
  return jsonResponse(400, { ok: false, error });
}

function isJsonContentType(request: Request): boolean {
  const contentType = request.headers.get("content-type");
  return contentType?.split(";", 1)[0].trim().toLowerCase() === "application/json";
}

async function readLimitedBody(request: Request): Promise<{ text?: string; tooLarge: boolean }> {
  const declaredLength = request.headers.get("content-length");
  if (declaredLength !== null) {
    const parsedLength = Number(declaredLength);
    if (Number.isFinite(parsedLength) && parsedLength > MAX_BODY_BYTES) return { tooLarge: true };
  }

  if (!request.body) return { text: "", tooLarge: false };

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (!value) continue;
      total += value.byteLength;
      if (total > MAX_BODY_BYTES) {
        await reader.cancel();
        return { tooLarge: true };
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }

  const bytes = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }

  try {
    return { text: new TextDecoder("utf-8", { fatal: true }).decode(bytes), tooLarge: false };
  } catch {
    return { tooLarge: false };
  }
}

function stringField(
  body: Record<string, unknown>,
  key: keyof typeof FIELD_LIMITS,
  required: boolean,
  headerSafe = false,
): string | null {
  const value = body[key];
  if (value === undefined && !required) return "";
  if (typeof value !== "string") return null;

  const trimmed = value.trim();
  if (required && !trimmed) return null;
  if (trimmed.length > FIELD_LIMITS[key]) return null;
  if (BODY_CONTROL_RE.test(trimmed)) return null;
  if (headerSafe && HEADER_CONTROL_RE.test(trimmed)) return null;
  return trimmed;
}

function validSingleEmail(email: string): boolean {
  if (!email) return true;
  if (/[\s,;()<>\[\]\\:\r\n]/.test(email)) return false;
  const match = email.match(SINGLE_EMAIL_RE);
  return match !== null && match[0] === email;
}

function validateBody(value: unknown): Enquiry | null {
  if (value === null || typeof value !== "object" || Array.isArray(value)) return null;
  const body = value as Record<string, unknown>;

  const name = stringField(body, "name", true, true);
  const company = stringField(body, "company", false, true);
  const phone = stringField(body, "phone", true);
  const email = stringField(body, "email", false, true);
  const metal = stringField(body, "metal", true, true);
  const product = stringField(body, "product", true);
  const message = stringField(body, "message", false);

  if ([name, company, phone, email, metal, product, message].some((field) => field === null)) return null;
  if (!validSingleEmail(email as string)) return null;

  return { name, company, phone, email, metal, product, message } as Enquiry;
}

export function createEnquiryHandlers(dependencies: Partial<EnquiryDependencies> = {}) {
  const deps = { ...defaultDependencies, ...dependencies };

  return {
    async POST(event: APIEvent): Promise<Response> {
      const { request } = event;
      if (!isJsonContentType(request)) {
        return jsonResponse(415, { ok: false, error: "Content-Type must be application/json." });
      }

      const bodyResult = await readLimitedBody(request);
      if (bodyResult.tooLarge) {
        return jsonResponse(413, { ok: false, error: "Request body is too large." });
      }
      if (bodyResult.text === undefined) return invalid("Malformed JSON request.");

      let parsed: unknown;
      try {
        parsed = JSON.parse(bodyResult.text);
      } catch {
        return invalid("Malformed JSON request.");
      }

      const enquiry = validateBody(parsed);
      if (!enquiry) return invalid();

      const { name, company, phone, email, metal, product, message } = enquiry;
      const smtpUser = deps.smtpUser() || "creativemetalind@gmail.com";

      try {
        const transporter = deps.createTransport({
          service: "gmail",
          auth: { user: smtpUser, pass: deps.smtpPass() || "" },
          disableFileAccess: true,
          disableUrlAccess: true,
        });

        const subject = "New Enquiry from " + name + (company ? " — " + company : "") + " | " + metal;
        await transporter.sendMail({
          from: "\"CMI Website\" <" + smtpUser + ">",
          to: "creativemetalind@gmail.com",
          replyTo: email || undefined,
          subject,
          html: buildHtml(enquiry),
          text: [
            "New Enquiry — " + name + (company ? " (" + company + ")" : ""),
            "Phone: " + phone,
            email ? "Email: " + email : "",
            "Material: " + metal,
            "Product: " + product,
            message ? "\nRequirements:\n" + message : "",
          ].filter(Boolean).join("\n"),
          disableFileAccess: true,
          disableUrlAccess: true,
        });

        return jsonResponse(200, { ok: true });
      } catch {
        deps.logError("transport_failure");
        return jsonResponse(502, { ok: false, error: "Failed to send. Please call us directly." });
      }
    },
  };
}

function buildHtml({ name, company, phone, email, metal, product, message }: Enquiry): string {
  return `
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
}

export const { POST } = createEnquiryHandlers();

function escHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/\u0027/g, "&#39;");
}
