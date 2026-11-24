// Import the CommonJS module's module.exports value.
import accounts from "./accounts.cjs";
import { getAllTransactions, getTrasactions } from "./transactions.js";
import express from "express";

const app = express();

app.use(express.json());

app.use((req, resp, next) => {
  console.log("Middleware 1");
  next(); // passes control to next middleware function
});

app.use((req, resp, next) => {
  console.log("Middleware 2");
  next(); // without this, req will be pending and eventually timeout as no response was sent
});

// other than next(), we have res.send/res.json, next(err)

app.get("/health", (req, resp) => {
  resp.status(200).json({
    status: "up",
    service: "internal-banking-api",
  });
});

app.get("/api/accounts/:id", (req, resp) => {
  const id = req.params.id;
  const acc = accounts.getAccount(id);
  if (acc != null) {
    resp.status(200).json(acc);
  } else {
    resp.status(404).json({ error: "Account ID not found" });
  }
});

app.get("/api/accounts", (req, resp) => {
  const allAccounts = accounts.getAllAccount();
  resp.status(200).json(allAccounts);
});

app.get("/api/transactions/:accId", (req, resp) => {
  const accId = req.params.accId;
  const txn = getTrasactions(accId);
  if (txn != null) {
    resp.status(200).json(txn);
  } else {
    resp.status(404).json({
      error: "Transaction not found.",
    });
  }
});

app.get("/api/transactions", (req, resp) => {
  const allTransactions = getAllTransactions();
  resp.status(200).json(allTransactions);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Banking API running on PORT ${PORT}`);
});
