const express = require("express");
const router = express.Router();
const multer = require("multer");
const Book = require("../models/Books");

// Membuat storage untuk multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Get All Books
router.get("/", async (req, res) => {
  try {
    const category = req.query.category;
    const filter = {};
    if (category) {
      filter.category = category;
    }
    const data = await Book.find(filter);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching books." });
  }
});

// Get A Single Book
router.get("/:slug", async (req, res) => {
  try {
    const slugParam = req.params.slug;
    const data = await Book.findOne({ slug: slugParam });
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching a book." });
  }
});

// Create A Book
router.post("/", upload.single("thumbnail"), async (req, res) => {
  try {
    const newBook = new Book({
      title: req.body.title,
      slug: req.body.slug,
      stars: req.body.stars,
      description: req.body.description,
      category: req.body.category,
      thumbnail: req.file.filename,
    });
    await Book.create(newBook);
    res.json("Data Submitted");
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching books." });
  }
});

// Update A Book
router.put("/", upload.single("thumbnail"), async (req, res) => {
  try {
    const bookId = req.body.bookId;
    const updateBook = {
      title: req.body.title,
      slug: req.body.slug,
      stars: req.body.stars,
      description: req.body.description,
      category: req.body.category,
    };
    if (req.file) {
      updateBook.thumbnail = req.file.filename;
    }
    await Book.findByIdAndUpdate(bookId, updateBook);
    res.json("Data Submitted");
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching books." });
  }
});

// Delete A Book
router.delete("/:id", async (req, res) => {
  const bookId = req.params.id;
  try {
    await Book.deleteOne({ _id: bookId });
    res.json("Book deleted");
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
