const Dish = require("../Models/Dish");

exports.deleteDish = async (req, res) => {
  const chefID = req.user;
  const dishID = req.body;
  try {
    await Dish.findByIdAndUpdate(dishID, { isDeleted: true });
  } catch (e) {
    console.log(e);
    res.status(501).json({ message: "Internal server error", error: e });
  }
};
