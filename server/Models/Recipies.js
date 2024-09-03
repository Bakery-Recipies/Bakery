// const { Schema, model, default: mongoose } = require("mongoose");

// const stepsSchema = new Schema({
//   stepDiscription: String,
//   stepPicture: String,
// });

// const recipeSchema = new Schema({
//   dishName: String,
//   recipieRatings: [{ type: mongoose.Types.ObjectId, ref: "Rating" }],
//   ingrediants: [{ name: String }],
//   recipieOverview: String,
//   steps: [stepsSchema],
//   difficultyRating: [{ ratingNumber: Number }],
//   difficultyAvg: Number,
//   duration: String,
//   overviewPicture: String,
// });

// const Recipie = model("Recipie", recipeSchema);

// module.exports = Recipie;

const { Schema, model, default: mongoose } = require("mongoose");

const stepsSchema = new Schema(
  {
    stepDiscription: String,
    stepPicture: String,
  },
  { _id: false }
); // استبعاد حقل _id من هذا المخطط

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
  isdeleted: { type: Boolean, default: false },
});

const Recipie = model("Recipie", recipeSchema);

module.exports = Recipie;

