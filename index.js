import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// ルート（Renderが確認する場所）
app.get("/", (req, res) => {
  res.send(`
    <h1>🚀 Render + GitHub Connection Test</h1>
    <p>If you see this page, your deployment works correctly!</p>
    <p>Deployed at: ${new Date().toLocaleString()}</p>
  `);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
