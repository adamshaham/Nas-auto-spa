const nodemailer = require("nodemailer");

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

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  const notifyEmail = process.env.NOTIFY_EMAIL || gmailUser;

  if (!gmailUser || !gmailPass) {
    console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD environment variables");
    return res.status(500).json({ error: "Server configuration error: missing email credentials" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPass,
    },
  });

  const leadText =
    `NEW LEAD\n` +
    `${firstName} ${lastName}\n` +
    `Ph: ${phone}\n` +
    `Em: ${email || "N/A"}\n` +
    `Addr: ${address || "N/A"}\n` +
    `Vehicle: ${vehicleType || "N/A"} (${vehicleCondition || "N/A"})\n` +
    `Service: ${desiredService || "N/A"}\n` +
    `When: ${timing || "N/A"}${preferredDate && preferredDate !== "Not specified" ? ` - ${preferredDate}` : ""}\n` +
    (message ? `Note: ${message}` : "");

  const emailSubject = `New Lead: ${firstName} ${lastName} - ${desiredService || "General Inquiry"}`;

  const emailHtml =
    `<h2 style="color:#facc16;margin:0 0 16px">New Lead from NAS Auto Spa</h2>` +
    `<table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">` +
    `<tr><td style="padding:6px 12px;font-weight:bold">Name</td><td style="padding:6px 12px">${firstName} ${lastName}</td></tr>` +
    `<tr style="background:#f9f9f9"><td style="padding:6px 12px;font-weight:bold">Phone</td><td style="padding:6px 12px"><a href="tel:${phone}">${phone}</a></td></tr>` +
    `<tr><td style="padding:6px 12px;font-weight:bold">Email</td><td style="padding:6px 12px"><a href="mailto:${email || ""}">${email || "N/A"}</a></td></tr>` +
    `<tr style="background:#f9f9f9"><td style="padding:6px 12px;font-weight:bold">Address</td><td style="padding:6px 12px">${address || "N/A"}</td></tr>` +
    `<tr><td style="padding:6px 12px;font-weight:bold">Vehicle</td><td style="padding:6px 12px">${vehicleType || "N/A"} (${vehicleCondition || "N/A"})</td></tr>` +
    `<tr style="background:#f9f9f9"><td style="padding:6px 12px;font-weight:bold">Service</td><td style="padding:6px 12px">${desiredService || "N/A"}</td></tr>` +
    `<tr><td style="padding:6px 12px;font-weight:bold">Timing</td><td style="padding:6px 12px">${timing || "N/A"}${preferredDate && preferredDate !== "Not specified" ? ` - ${preferredDate}` : ""}</td></tr>` +
    (message ? `<tr style="background:#f9f9f9"><td style="padding:6px 12px;font-weight:bold">Note</td><td style="padding:6px 12px">${message}</td></tr>` : "") +
    `</table>`;

  const smsGateway = "2033628259@vtext.com";

  try {
    await Promise.all([
      transporter.sendMail({
        from: `"NAS Auto Spa Leads" <${gmailUser}>`,
        to: notifyEmail,
        subject: emailSubject,
        text: leadText,
        html: emailHtml,
      }),
      transporter.sendMail({
        from: gmailUser,
        to: smsGateway,
        subject: "",
        text: leadText,
      }),
    ]);

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Notification error:", err.message);
    return res.status(500).json({ error: "Failed to send notification", detail: err.message });
  }
};
