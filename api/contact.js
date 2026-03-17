const https = require("https");

function sendTwilioSMS(accountSid, authToken, from, to, body) {
  return new Promise((resolve, reject) => {
    const payload = new URLSearchParams({ To: to, From: from, Body: body }).toString();
    const auth = Buffer.from(`${accountSid}:${authToken}`).toString("base64");

    const options = {
      hostname: "api.twilio.com",
      path: `/2010-04-01/Accounts/${accountSid}/Messages.json`,
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": Buffer.byteLength(payload),
        Authorization: `Basic ${auth}`,
      },
    };

    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          const parsed = JSON.parse(data);
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(parsed);
          } else {
            reject(new Error(parsed.message || `Twilio error ${res.statusCode}`));
          }
        } catch {
          reject(new Error("Invalid response from Twilio"));
        }
      });
    });

    req.on("error", reject);
    req.write(payload);
    req.end();
  });
}

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

  const smsBody =
    `NEW LEAD\n` +
    `${firstName} ${lastName}\n` +
    `Ph: ${phone}\n` +
    `Em: ${email || "N/A"}\n` +
    `Addr: ${address || "N/A"}\n` +
    `Vehicle: ${vehicleType || "N/A"} (${vehicleCondition || "N/A"})\n` +
    `Service: ${desiredService || "N/A"}\n` +
    `When: ${timing || "N/A"}${preferredDate && preferredDate !== "Not specified" ? ` - ${preferredDate}` : ""}\n` +
    (message ? `Note: ${message}` : "");

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const twilioPhone = process.env.TWILIO_PHONE_NUMBER;
  const ownerPhone = process.env.OWNER_PHONE_NUMBER || "9293076986";

  if (!accountSid || !authToken || !twilioPhone) {
    console.error("Missing Twilio environment variables");
    return res.status(500).json({ error: "Server configuration error: missing Twilio credentials" });
  }

  try {
    await sendTwilioSMS(accountSid, authToken, twilioPhone, `+1${ownerPhone}`, smsBody);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("SMS send error:", err.message);
    return res.status(500).json({ error: "Failed to send notification", detail: err.message });
  }
};
