const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/messages", (req, res) => {
  const data = JSON.parse(fs.readFileSync("messages.json"));
  data.push({
    name: req.body.name,
    subject: req.body.subject,
    message: req.body.message
  });
  fs.writeFileSync("messages.json", JSON.stringify(data));
  res.sendStatus(201);
});

app.get("/api/messages", (req, res) => {
  const data = JSON.parse(fs.readFileSync("messages.json"));
  res.json(data);
});

app.listen(5000);
