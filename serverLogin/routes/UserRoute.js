const express = require("express");
const {
  getUserst,
  getUsertById,
  saveUsert,
  updateUsert,
  deleteUsert,
} = require("../controllers/UserController.js");

const router = express.Router();

router.get("/users", getUserst);
router.get("/users/:id", getUsertById);
router.post("/users", saveUsert);
router.patch("/users/:id", updateUsert);
router.delete("/users/:id", deleteUsert);

module.exports = router;
