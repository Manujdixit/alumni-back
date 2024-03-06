const Alumni = require("../models/alumni.model");

const createAlumni = async (req, res) => {
  const { name, email, phone, batch, company, role } = req.body;
  try {
    const newAlumni = new Alumni({
      name,
      email,
      phone,
      batch,
      company,
      role,
    });
    await newAlumni.save();
    res.status(201).json({
      message: "Alumni created successfully",
      data: newAlumni,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating alumni",
      error: error.message,
    });
  }
};

const updateAlumni = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, batch, company, role } = req.body;
  try {
    const updatedAlumni = await Alumni.findByIdAndUpdate(
      id,
      {
        name: req?.body?.name,
        email: req?.body?.email,
        phone: req?.body?.phone,
        batch: req?.body?.batch,
        company: req?.body?.company,
        role: req?.body?.role,
      },
      { new: true }
    );
    res.status(200).json({
      message: "Alumni updated successfully",
      data: updatedAlumni,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating alumni",
      error: error.message,
    });
  }
};

const getAlumni = async (req, res) => {
  try {
    const alumni = await Alumni.find();
    res.status(200).json({
      message: "Alumni fetched successfully",
      data: alumni,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching alumni",
      error: error.message,
    });
  }
};

const getAlumniById = async (req, res) => {
  const { id } = req.params;
  try {
    const alumni = await Alumni.findById(id);
    res.status(200).json({
      message: "Alumni fetched successfully",
      data: alumni,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching alumni",
      error: error.message,
    });
  }
};

const deleteAlumni = async (req, res) => {
  const { id } = req.params;
  try {
    const alumni = await Alumni.findByIdAndDelete(id);
    res.status(200).json({
      message: "Alumni deleted successfully",
      data: alumni,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting alumni",
      error: error.message,
    });
  }
};

module.exports = {
  createAlumni,
  updateAlumni,
  getAlumni,
  getAlumniById,
  deleteAlumni,
};
