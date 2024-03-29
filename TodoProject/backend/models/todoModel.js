const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter a title"],
    maxLength: 50,
  },
  description: {
    type: String,
    required: [true, "Please enter a description"],
    maxLength: 50,
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

module.exports = mongoose.model('Todos',todoSchema);
