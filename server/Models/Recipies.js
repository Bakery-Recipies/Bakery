

const { Schema, model, default: mongoose } = require("mongoose");


const stepsSchema = new Schema({
  stepDiscription: String,
  stepMedia: String,
  note: String,
});


const recipeSchema = new Schema({
  dishName: String,
  recipieRatings: [{ type: mongoose.Types.ObjectId, ref: "Rating" }],
  ingrediants: [{ name: String }], // إزالة _id من المكونات
  recipieOverview: String,
  steps: [stepsSchema], // خطوات الوصفة بدون _id
  difficultyRating: [{ ratingNumber: Number }], // إزالة _id من التقييمات
  difficultyAvg: Number,
  duration: String,
  overviewPicture: String,

  recipieAuthor: { type: mongoose.Types.ObjectId, ref: "Chef" },
  isDeleted: { type: Boolean, default: false },

});

const Recipie = model("Recipie", recipeSchema);

module.exports = Recipie;

