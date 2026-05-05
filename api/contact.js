const nodemailer = require("nodemailer");

/** Verizon Wireless SMS gateway (203-362-8259). */
const DEFAULT_SMS_GATEWAY = "2033628259@vtext.com";
const DEFAULT_NOTIFY_EMAIL = "contactnasworks@gmail.com";

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    firstName,
    lastName,
    email,
    phone,
    address,
    vehicleType,
    vehicleCondition,
    desiredService,
    timing,
    preferredDate,
    message,
    selectedServices,
  } = req.body || {};

  if (!firstName || !lastName || !phone) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  const smtpHost = process.env.SMTP_HOST || (gmailUser ? "smtp.gmail.com" : "");
  const smtpUser = process.env.SMTP_USER || gmailUser;
  const smtpPass = process.env.SMTP_PASS || gmailPass;
  const smtpFrom = process.env.SMTP_FROM || (gmailUser ? `"NAS Auto Spa Leads" <${gmailUser}>` : "");
  const notifyEmail = process.env.NOTIFY_EMAIL || DEFAULT_NOTIFY_EMAIL;
  const smsGateway = process.env.SMS_GATEWAY_EMAIL || DEFAULT_SMS_GATEWAY;

  if (!smtpHost || !smtpUser || !smtpPass || !smtpFrom) {
    console.error(
      "Missing email env: set SMTP_* or the legacy GMAIL_USER and GMAIL_APP_PASSWORD variables"
    );
    return res.status(500).json({
      error: "Server configuration error",
      detail: "Lead notifications are not configured. Set SMTP_* or GMAIL_* variables on your host.",
    });
  }

  const port = Number(process.env.SMTP_PORT || (gmailUser && !process.env.SMTP_HOST ? 465 : 587));
  const secure = String(process.env.SMTP_SECURE || "").toLowerCase() === "true" || port === 465;

  const leadText =
    `NAS Auto Spa NEW LEAD\n` +
    `${firstName} ${lastName}\n` +
    `Ph: ${phone}\n` +
    `Em: ${email || "N/A"}\n` +
    `Addr: ${address || "N/A"}\n` +
    `Vehicle: ${vehicleType || "N/A"} (${vehicleCondition || "N/A"})\n` +
    `Service: ${desiredService || "N/A"}\n` +
    `Selected: ${Array.isArray(selectedServices) && selectedServices.length ? selectedServices.join(", ") : "N/A"}\n` +
    `When: ${timing || "N/A"}${preferredDate && preferredDate !== "Not specified" ? ` - ${preferredDate}` : ""}\n` +
    (message ? `Note: ${message}` : "");

  const subject = `Lead: ${firstName} ${lastName}`;
  const emailHtml =
    `<h2 style="color:#facc16;margin:0 0 16px">New Lead from NAS Auto Spa</h2>` +
    `<table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">` +
    `<tr><td style="padding:6px 12px;font-weight:bold">Name</td><td style="padding:6px 12px">${firstName} ${lastName}</td></tr>` +
    `<tr style="background:#f9f9f9"><td style="padding:6px 12px;font-weight:bold">Phone</td><td style="padding:6px 12px"><a href="tel:${phone}">${phone}</a></td></tr>` +
    `<tr><td style="padding:6px 12px;font-weight:bold">Email</td><td style="padding:6px 12px"><a href="mailto:${email || ""}">${email || "N/A"}</a></td></tr>` +
    `<tr style="background:#f9f9f9"><td style="padding:6px 12px;font-weight:bold">Address</td><td style="padding:6px 12px">${address || "N/A"}</td></tr>` +
    `<tr><td style="padding:6px 12px;font-weight:bold">Vehicle</td><td style="padding:6px 12px">${vehicleType || "N/A"} (${vehicleCondition || "N/A"})</td></tr>` +
    `<tr style="background:#f9f9f9"><td style="padding:6px 12px;font-weight:bold">Service</td><td style="padding:6px 12px">${desiredService || "N/A"}</td></tr>` +
    `<tr><td style="padding:6px 12px;font-weight:bold">Selected</td><td style="padding:6px 12px">${Array.isArray(selectedServices) && selectedServices.length ? selectedServices.join(", ") : "N/A"}</td></tr>` +
    `<tr style="background:#f9f9f9"><td style="padding:6px 12px;font-weight:bold">Timing</td><td style="padding:6px 12px">${timing || "N/A"}${preferredDate && preferredDate !== "Not specified" ? ` - ${preferredDate}` : ""}</td></tr>` +
    (message ? `<tr><td style="padding:6px 12px;font-weight:bold">Note</td><td style="padding:6px 12px">${message}</td></tr>` : "") +
    `</table>`;

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port,
    secure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    await Promise.all([
      transporter.sendMail({
        from: smtpFrom,
        to: notifyEmail,
        subject,
        text: leadText,
        html: emailHtml,
      }),
      transporter.sendMail({
        from: smtpFrom,
        to: smsGateway,
        subject,
        text: leadText,
      }),
    ]);

    return res.status(200).json({ success: true });
  } catch (err) {
    const msg = err && err.message ? String(err.message) : String(err);
    console.error("Notification error:", msg);

    const authRejected =
      /Invalid login|535-5\.7\.8|BadCredentials|Username and Password not accepted|authentication failed/i.test(
        msg
      );

    if (authRejected) {
      console.error(
        "SMTP login failed: check SMTP_USER and SMTP_PASS on the server (use your provider's SMTP key, not your normal web password unless they match)."
      );
      return res.status(500).json({
        error: "Failed to send notification",
        detail:
          "Our message system could not send your request. Please call or text (929) 307-6986 so we can help you directly.",
      });
    }

    return res.status(500).json({ error: "Failed to send notification", detail: msg });
  }
};
