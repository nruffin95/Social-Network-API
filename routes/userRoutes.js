const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
  res.status(200).json({ message: "Get Users" });
});

router.post("/", (req, res) => {
  res.status(200).json({ message: "Get Users" });
});

router.put("/", (req, res) => {
  res.status(200).json({ message: "Get Users" });
});

router.delete("/", (req, res) => {
  res.status(200).json({ message: "Get Users" });
});

module.exports = router