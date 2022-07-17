const express = require('express')
const router = express.Router()
const {
  getAllUser,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  
} = require("../controllers/userController");

router.get("/", getAllUser);

router.post("/", createUser);

router.get("/:id", getUserById);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router