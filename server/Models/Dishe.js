const { Schema, model, default: mongoose } = require("mongoose");

const dishSchema = new Schema({
  dishName: String,
  dishDescription: String,
  dishRatings: [{ type: mongoose.Types.ObjectId, ref: "Rating" }],
  dishPictures: [{ URL: String }],
  price: Number,
  category: String,
});

const Dish = model("Dish", dishSchema);

module.exports = Dish;
