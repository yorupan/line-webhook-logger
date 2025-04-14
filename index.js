const express = require("express");
const app = express();

app.use(express.json());

app.post("/", (req, res) => {
  console.log("✅ POST / 受信！（LINE Webhook？）");
  console.log(JSON.stringify(req.body, null, 2));
  res.status(200).send("OK");
});

app.get("/", (req, res) => {
  res.send("Webhook server is running.");
});

module.exports = app;

