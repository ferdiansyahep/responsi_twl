require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

const booksRoutes = require("./routes/books");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use("/api/books", booksRoutes);

app.get("/", (req, res) => {
  res.json("Hello mate!");
});

app.get("*", (req, res) => {
  res.sendStatus("404");
});

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
const port = process.env.PORT || 3001;
app.listen(port, console.log(`Listening on port ${port}...`));
