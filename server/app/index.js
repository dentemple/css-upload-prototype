const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const fileUpload = require("express-fileupload");

const app = express();

app.use(cors());
app.use(fileUpload({ debug: true }));
app.use(express.static(path.join(__dirname, "api/customization/public")));

app.use("/api", require("./api/routes"));

app.get("/", (req, res) => {
  res.send({ ping: "ok", route: req.url });
});

module.exports = app;
