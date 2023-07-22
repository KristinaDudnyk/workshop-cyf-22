const express = require("express");

const app = express();

let count = 0;

app.get("/", (req, res) => {
  res.status(200).send("its running");
});

app.get("/count", (req, res) => {
  count += 1;
  res.status(200).send(count);
});
app.listen(3002);
