const nodemailer = require("nodemailer");

/** Verizon Wireless SMS gateway (203-362-8259). */
const DEFAULT_SMS_GATEWAY = "2033628259@vtext.com";

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
  } = req.body || {};

  if (!firstName || !lastName || !phone) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpFrom = process.env.SMTP_FROM;
  const smsGateway = process.env.SMS_GATEWAY_EMAIL || DEFAULT_SMS_GATEWAY;

  if (!smtpHost || !smtpUser || !smtpPass || !smtpFrom) {
    console.error(
      "Missing SMTP env: SMTP_HOST, SMTP_USER, SMTP_PASS, SMTP_FROM (optional: SMS_GATEWAY_EMAIL)"
    );
    return res.status(500).json({
      error: "Server configuration error",
      detail: "Email-to-text is not configured. Set SMTP_* variables on your host (see .env.example).",
    });
  }

  const port = Number(process.env.SMTP_PORT || 587);
  const secure = String(process.env.SMTP_SECURE || "").toLowerCase() === "true" || port === 465;

  const leadText =
    `NAS Auto Spa NEW LEAD\n` +
    `${firstName} ${lastName}\n` +
    `Ph: ${phone}\n` +
    `Em: ${email || "N/A"}\n` +
    `Addr: ${address || "N/A"}\n` +
    `Vehicle: ${vehicleType || "N/A"} (${vehicleCondition || "N/A"})\n` +
    `Service: ${desiredService || "N/A"}\n` +
    `When: ${timing || "N/A"}${preferredDate && preferredDate !== "Not specified" ? ` - ${preferredDate}` : ""}\n` +
    (message ? `Note: ${message}` : "");

  const subject = `Lead: ${firstName} ${lastName}`;

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
    await transporter.sendMail({
      from: smtpFrom,
      to: smsGateway,
      subject,
      text: leadText,
    });

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
