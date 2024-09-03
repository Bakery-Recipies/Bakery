const Recipie = require("../models/Recipies");

// Create a new recipe
exports.createRecipe = async (req, res) => {
  try {
    const newRecipe = new Recipie(req.body);
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all recipes
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipie.find({ isdeleted: false });
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a recipe by ID
exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipie.findById(req.params.id);
    if (!recipe || recipe.isdeleted) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
