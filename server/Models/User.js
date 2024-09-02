const { Schema, model, default: mongoose } = require("mongoose");

//defining user schema
const userSchema = new Schema({
  name: String,
  gender: String,
  userType:String,
  isActive: { type: Boolean, default: false },
  email: String,
  password: String,
  favoraiteRecipie:[{type:mongoose.Types.ObjectId,ref:"Recipie"}],
  notifications:[{type:mongoose.Types.ObjectId,ref:"Notification"}],
  undreadNotification:{type:Boolean,default:false},
  chats:[{type:mongoose.Types.ObjectId,ref:"Chat"}]
});

//defining user model

const User = model("User", userSchema);

module.exports = User;
