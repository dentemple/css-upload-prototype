const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "api/uploads/public")));

app.use("/api", require("./api/routes"));

app.get("/", (req, res) => {
  res.send({ ping: "ok", route: req.url });
});

module.exports = app;
