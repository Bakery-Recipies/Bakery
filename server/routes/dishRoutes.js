// C:\Users\Orange\Desktop\Bakery\server\routes\dishRoutes.js

const express = require('express');
const router = express.Router();
const dishController = require('../Controller/dishController');

router.get('/', dishController.getAllDishes);
router.post('/', dishController.createDish);
router.get('/:id', dishController.getDish);
router.put('/:id', dishController.updateDish);

module.exports = router;