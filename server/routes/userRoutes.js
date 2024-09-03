const express = require("express");
const router = express.Router();
const userController = require("../Controller/userController"); // Adjust path if needed

// Define routes
router.get("/users/:id", userController.getUserById);
router.put("/users/:id", userController.updateUserById);

module.exports = router;
