const express = require('express')
const router = express.Router()
const {
  getAllUser,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  
} = require("../controllers/userController");

router.route("/").get(getAllUser).post(createUser);

router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router