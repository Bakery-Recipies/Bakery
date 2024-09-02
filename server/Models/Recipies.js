const { Schema, model, default: mongoose } = require("mongoose");

const stepsSchema = new Schema({
  stepDiscription: String,
  stepPicture: String,
});

const recipeSchema = new Schema({
  recipieDish: { type: mongoose.Types.ObjectId, ref: "Dish" },
  ingrediants: [{ name: String }],
  recipieOverview: String,
  steps: [stepsSchema],
  difficultyRating: [{ ratingNumber: Number }],
  difficultyAvg: Number,
  duration: String,
  overviewPicture: String,
});

const Recipie = model("Recipie", recipeSchema);

module.exports = Recipie;
