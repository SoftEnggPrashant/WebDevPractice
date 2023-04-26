const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "please provide the title"],
    maxLength: 80,
  },
  description: {
    type: String,
    required: [true, "please provied the description"],
    maxLength: 200,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "please provide the user Id"],
  },
  likes: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true,
      },
    },
  ],
  dislikes: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true,
      },
    },
  ],
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

module.exports = mongoose.model("Blogs", BlogSchema);
