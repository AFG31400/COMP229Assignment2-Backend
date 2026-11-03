import Education from "../models/education.model.js";

const create = async (req, res) => {
  try {
    const education = new Education(req.body);
    await education.save();
    res.status(201).json(education);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const list = async (req, res) => {
  try {
    const educations = await Education.find();
    res.json(educations);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const read = async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);
    if (!education) return res.status(404).json({ error: "Education not found" });
    res.json(education);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const update = async (req, res) => {
  try {
    const education = await Education.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!education) return res.status(404).json({ error: "Education not found" });
    res.json(education);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const remove = async (req, res) => {
  try {
    const education = await Education.findByIdAndDelete(req.params.id);
    if (!education) return res.status(404).json({ error: "Education not found" });
    res.json({ message: "Education deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const removeAll = async (req, res) => {
  try {
    await Education.deleteMany();
    res.json({ message: "All education records deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default { create, list, read, update, remove, removeAll };