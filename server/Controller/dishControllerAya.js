const Dish = require("../models/Dish");
// Create a new dish
exports.createDish = async (req, res) => {
  try {
    const newDish = new Dish(req.body);
    await newDish.save();
    res.status(201).json(newDish);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all dishes
exports.getAllDishes = async (req, res) => {
  try {
    const dishes = await Dish.find({ isdeleted: false }).populate('recipie', 'dishName');
    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a dish by ID
exports.getDishById = async (req, res) => {
  try {
    const dish = await Dish.findOne({ _id: req.params.id, isdeleted: false }).populate('recipie', 'dishName');
    if (!dish) {
      return res.status(404).json({ message: 'Dish not found' });
    }
    res.status(200).json(dish);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Soft delete a dish
exports.deleteDish = async (req, res) => {
  try {
    const dish = await Dish.findByIdAndUpdate(req.params.id, { isdeleted: true }, { new: true });
    if (!dish) {
      return res.status(404).json({ message: 'Dish not found' });
    }
    res.status(200).json({ message: 'Dish deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
