require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const UsertRoute = require("./routes/UserRoute");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());
app.use(UsertRoute);
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://ferdiansyahep-uas.vercel.app/"
  );
  next();
});
// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 3001;
app.listen(port, console.log(`Listening on port ${port}...`));
