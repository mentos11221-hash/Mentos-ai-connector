
module.exports = (req, res) => {
  res.status(200).json({
    status: "online",
    name: "Mentos AI Connector",
    message: "API is working!"
  });
};
