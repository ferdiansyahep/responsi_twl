const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  stars: {
    type: String,
    default: 0,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: [String],
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
