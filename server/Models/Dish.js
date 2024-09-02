const { Schema, model, default: mongoose } = require("mongoose");

const dishSchema = new Schema({
  recipie:{type:mongoose.Types.ObjectId,ref:"Recipie"},
  
  dishDescription: String,
  dishPictures: [{ URL: String }],
  price: Number,
  dishRating: [{ ratingNumber: Number }],
  dishRatingAvg: Number,
  category: String,
});

const Dish = model("Dish", dishSchema);

module.exports = Dish;
