const Usert = require("../models/UserModel.js");

exports.getUserst = async (req, res) => {
  try {
    const userst = await Usert.find();
    res.json(userst);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUsertById = async (req, res) => {
  try {
    const usert = await Usert.findById(req.params.id);
    res.json(usert);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.saveUsert = async (req, res) => {
  const usert = new Usert(req.body);
  try {
    const insertedusert = await usert.save();
    res.status(201).json(insertedusert);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateUsert = async (req, res) => {
  try {
    const updatedusert = await Usert.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedusert);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteUsert = async (req, res) => {
  try {
    const deletedusert = await Usert.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedusert);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
