const express = require("express");
const router = express.Router();
const {
  createAlumni,
  updateAlumni,
  getAlumni,
  getAlumniById,
  deleteAlumni,
} = require("../controller/alumni.ctrl");

router.get("/", (req, res) => {
  res.send("Hello World");
});
router.post("/register", createAlumni);
router.put("/update/:id", updateAlumni);
router.get("/get", getAlumni);
router.get("/get/:id", getAlumniById);
router.delete("/delete/:id", deleteAlumni);

module.exports = router;
