const { Schema, model, default: mongoose } = require("mongoose");

const stepsSchema = new Schema({
  stepDiscription: String,
  stepMedia: String,
  note: String,
});

const recipeSchema = new Schema({
  dishName: String,
  recipieRatings: [{ type: mongoose.Types.ObjectId, ref: "Rating" }],
  ingrediants: [{ name: String }],
  recipieOverview: String,
  steps: [stepsSchema],
  difficultyRating: [{ ratingNumber: Number }],
  difficultyAvg: Number,
  duration: String,
  overviewPicture: String,
  recipieAuthor: { type: mongoose.Types.ObjectId, ref: "Chef" },
  isDeleted: { type: Boolean, default: false },
});

const Recipie = model("Recipie", recipeSchema);

module.exports = Recipie;
