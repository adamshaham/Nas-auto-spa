module.exports = async function handler(req, res) {
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
  } = req.body;

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
    return res.status(500).json({ error: "Server configuration error" });
  }

  try {
    const response = await fetch("https://textbelt.com/text", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phone: ownerPhone,
        message: smsBody,
        key: apiKey,
      }),
    });

    const result = await response.json();

    if (!result.success) {
      console.error("Textbelt error:", result);
      return res.status(500).json({ error: "Failed to send notification" });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("SMS send error:", err.message);
    return res.status(500).json({ error: "Failed to send notification" });
  }
};
