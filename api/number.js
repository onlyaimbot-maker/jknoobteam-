export default async function handler(req, res) {
  const { num } = req.query;

  if (!num) {
    return res.status(400).json({
      success: false,
      message: "num parameter missing"
    });
  }

  try {
    const response = await fetch(
      `https://free-api-anuragsingh.vercel.app/api/number?num=${encodeURIComponent(num)}`
    );

    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        message: "Upstream API error"
      });
    }

    const data = await response.json();

    // Response Edit
    data.by = "@JKNOOBTEAM1";
    data.channel = "https://t.me/JK_NOOB_HACKING";

    return res.status(200).json(data);

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message
    });
  }
}
