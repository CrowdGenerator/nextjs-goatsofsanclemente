import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body as {
      name?: string;
      email?: string;
      subject?: string;
      message?: string;
    };

    /* ---- Validate required fields ---- */
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 },
      );
    }

    /* ---- Resend email (or dev fallback) ---- */
    const apiKey = process.env.RESEND_API_KEY;

    if (apiKey) {
      const resend = new Resend(apiKey);

      const { error } = await resend.emails.send({
        from: "SCWRF Website <onboarding@resend.dev>",
        to: ["hello@goatsofsanclemente.com"],
        subject: `Contact Form: ${subject}`,
        html: `
          <div style="font-family: Inter, Arial, sans-serif; color: #2D302E; max-width: 600px;">
            <h2 style="color: #28583F; margin-bottom: 16px;">New Contact Form Submission</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 12px; font-weight: 600; border-bottom: 1px solid #E6EEE8; width: 100px;">Name</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #E6EEE8;">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; font-weight: 600; border-bottom: 1px solid #E6EEE8;">Email</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #E6EEE8;">
                  <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; font-weight: 600; border-bottom: 1px solid #E6EEE8;">Subject</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #E6EEE8;">${escapeHtml(subject)}</td>
              </tr>
            </table>
            <h3 style="color: #517A51; margin-top: 24px; margin-bottom: 8px;">Message</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
        `,
      });

      if (error) {
        console.error("Resend API error:", error);
        return NextResponse.json(
          { success: false, error: "Failed to send email. Please try again later." },
          { status: 500 },
        );
      }
    } else {
      /* Dev fallback — no API key configured */
      console.log("---- Contact Form Submission (dev mode, no RESEND_API_KEY) ----");
      console.log(`From: ${name} <${email}>`);
      console.log(`Subject: ${subject}`);
      console.log(`Message: ${message}`);
      console.log("----------------------------------------------------------------");
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong. Please try again or email us directly at hello@goatsofsanclemente.com",
      },
      { status: 500 },
    );
  }
}

/** Basic HTML entity escaping to prevent XSS in email body. */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
