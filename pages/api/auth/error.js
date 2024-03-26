export default function handler(req, res) {
  res.status(401).json({
    statusCode: 401,
    status: "failed",
    message: req.query.error ?? "You're not authorized",
    data: null,
  });
}
