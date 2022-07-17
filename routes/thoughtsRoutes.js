const express = require("express");
const router = express.Router();
const {
  getAllThought,
  createThought,
  getThoughtById,
  updateThought,
  deleteThought,
} = require("../controllers/ThoughtController");

router.route("/").get(getAllThought).post(createThought);

router.route("/:id").get(getThoughtById).put(updateThought).delete(deleteThought);

module.exports = router;
