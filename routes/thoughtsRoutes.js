const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Get Thoughts" });
});

router.post("/", (req, res) => {
  res.status(200).json({ message: "Get Thoughts" });
});

router.put("/", (req, res) => {
  res.status(200).json({ message: "Get Thoughts" });
});

router.delete("/", (req, res) => {
  res.status(200).json({ message: "Get Thoughts" });
});

module.exports = router;
