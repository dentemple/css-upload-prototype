const path = require("path");
const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/ping", (req, res) =>
  res.send({ ping: "ok", route: "/api/customization" + req.url })
);

router.post("/", (req, res) => {
  console.log(req.files);
  if (!req.files || !req.files.file) {
    res.status(400).send({ message: "No file has been received!" });
  }

  try {
    const buffer = req.files.file.data;

    fs.writeFileSync(path.join(__dirname, "/public/common.css"), buffer);

    res
      .status(200)
      .send({ message: "The file has been successfully uploaded!" });
  } catch (e) {
    res.status(500).send({ message: "An unexpected error has occurred!" });
  }
});

module.exports = router;
