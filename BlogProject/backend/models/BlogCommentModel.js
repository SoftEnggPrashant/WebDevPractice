const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref:'User',
    required: true,
  },
  blog:{
    type: mongoose.Schema.ObjectId,
    ref:'Blogs',
    required: true,
  },
  comment: {
    type: String,
    required: true,
    maxLength: 120,
  },
  rating: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Comments", commentSchema);
