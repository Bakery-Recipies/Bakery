const { Schema, model, default: mongoose } = require("mongoose");

//defining subSchema
const messageSchema = new Schema({
  message: String,
  sentBy: { type: mongoose.Types.ObjectId, ref: "User" },
  messageDate: Date,
});

//defining parent Schema
const chatSchema = new Schema({
  chatWith: { type: mongoose.Types.ObjectId, ref: "User" },
  isRead: Boolean,
  messages: [messageSchema],
});

//defining chat model

const Chat = model("Chat", chatSchema);

module.exports = Chat;
