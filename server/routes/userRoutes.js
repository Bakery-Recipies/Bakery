// const express = require("express");
// const router = express.Router();
// const userController = require("../Controller/userController"); // Adjust path if needed
// const { registerUser } = require("../Controller/userController");

// // Define routes
// router.get("/users/:id", userController.getUserById);
// router.put("/users/:id", userController.updateUserById);
// router.post("/login", userController.loginUser); // مسار تسجيل الدخول
// // Registration route
// router.post("/register", registerUser);


// module.exports = router;


const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');

router.get('/google', userController.googleAuth);
router.get('/google/callback', userController.googleAuthCallback);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUserById);
router.post('/login', userController.loginUser);
router.post('/register', userController.registerUser);

module.exports = router;
