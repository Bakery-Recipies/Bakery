const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const recipieController = require("../Controller/recipieController");

router.post("/makeRecipie", auth, recipieController);
