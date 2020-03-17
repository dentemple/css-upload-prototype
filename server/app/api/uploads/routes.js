// const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/ping", (req, res) =>
  res.send({ ping: "ok", route: "/api/uploads" + req.url })
);

module.exports = router;
