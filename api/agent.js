export default function handler(req, res) {
  res.status(200).json({
    name: "My AI Agent",
    description: "ERC-8004 AI Agent",
    version: "1.0.0",
    status: "online"
  });
}
