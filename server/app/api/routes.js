const express = require("express");
const router = express.Router();

router.get("/ping", (req, res) =>
  res.send({ ping: "ok", route: "/api" + req.url })
);

router.use("/uploads", require("./uploads/routes"));

module.exports = router;
