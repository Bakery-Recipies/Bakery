const express = require("express");
const router = express.Router();
const recipieController = require("../Controller/recipieControllerAya");

router.post("/recipes", recipieController.createRecipe);
router.get("/recipes", recipieController.getAllRecipes);
router.get("/recipes/:id", recipieController.getRecipeById);

module.exports = router;
