
export default async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Use POST"
    });
  }

  const { command } = req.body || {};

  if (!command || typeof command !== "string") {
    return res.status(400).json({
      success: false,
      message: "Missing command"
    });
  }

  return res.status(200).json({
    success: true,
    message: "Mentos Remote received your command",
    command: command
  });
}
