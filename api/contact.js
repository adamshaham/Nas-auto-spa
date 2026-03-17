const https = require("https");

function sendTextbelt(phone, message, key) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({ phone, message, key });

    const options = {
      hostname: "textbelt.com",
      path: "/text",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(payload),
      },
    };

    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          resolve(JSON.parse(data));
        } catch {
          reject(new Error("Invalid response from Textbelt"));
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
    selectedServices,
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

  const apiKey = process.env.TEXTBELT_API_KEY;
  const ownerPhone = process.env.OWNER_PHONE_NUMBER || "2033628259";

  if (!apiKey) {
    console.error("Missing TEXTBELT_API_KEY environment variable");
    return res.status(500).json({ error: "Server configuration error: missing API key" });
  }

  try {
    const result = await sendTextbelt(ownerPhone, smsBody, apiKey);

    if (!result.success) {
      console.error("Textbelt error:", JSON.stringify(result));
      return res.status(500).json({
        error: "Failed to send notification",
        detail: result.error || "Unknown Textbelt error",
      });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("SMS send error:", err.message);
    return res.status(500).json({ error: "Failed to send notification", detail: err.message });
  }
};
