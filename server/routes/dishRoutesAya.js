const express = require("express");
const router = express.Router();
const dishController = require("../Controller/dishControllerAya");


// Route to create a new dish
router.post('/dishes', dishController.createDish);

// Route to get all dishes
router.get('/dishes', dishController.getAllDishes);

// Route to get a dish by ID
router.get('/dishes/:id', dishController.getDishById);

// Route to delete a dish (soft delete)
router.delete('/dishes/:id', dishController.deleteDish);


module.exports = router;
