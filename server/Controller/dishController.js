// C:\Users\Orange\Desktop\Bakery\server\Controller\dishController.js

const Dish = require('../models/Dish');

exports.getAllDishes = async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createDish = async (req, res) => {
  const dish = new Dish(req.body);
  try {
    const newDish = await dish.save();
    res.status(201).json(newDish);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getDish = async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id);
    if (!dish) return res.status(404).json({ message: 'Dish not found' });
    res.status(200).json(dish);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateDish = async (req, res) => {
  try {
    const updatedDish = await Dish.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDish) return res.status(404).json({ message: 'Dish not found' });
    res.status(200).json(updatedDish);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};