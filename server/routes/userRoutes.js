const express = require("express");
const router = express.Router();
const userController = require("../Controller/userController"); // Adjust path if needed

// Define routes
// router.get("/users/:id", userController.getUserById);
// router.put("/users/:id", userController.updateUserById);
router.get("/users", userController.getUserById);
router.put("/users/:id/toggle-active",userController.userToggleActive);
module.exports = router;
