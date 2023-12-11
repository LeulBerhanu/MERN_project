require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT;

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "welcome to the app" });
});

app.listen(port, () => {
  console.log(`listening on port ${port} ...`);
});
