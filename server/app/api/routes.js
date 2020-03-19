const express = require("express");
const router = express.Router();

router.get("/ping", (req, res) =>
  res.send({ ping: "ok", route: "/api" + req.url })
);

router.use("/customization", require("./customization/routes"));

module.exports = router;
