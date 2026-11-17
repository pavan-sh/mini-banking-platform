const express = require("express");

const app = express();

app.use(express.json());

app.get("/health", (req, resp) => {
  resp.status(200).json({
    status: "up",
    service: "internal-banking-api",
  });
});

app.get("/api/accounts", (req, resp) => {
  resp.status(200).json([
    {
      accountId: "ACC01",
      accountHolder: "Demo User",
      balance: 25000,
      currency: "INR",
    },
  ]);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Banking API running on PORT ${PORT}`);
});
