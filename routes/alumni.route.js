const express = require("express");
const router = express.Router();
const {
  createAlumni,
  updateAlumni,
  getAlumni,
  getAlumniById,
  deleteAlumni,
} = require("../controller/alumni.ctrl");
const { jwtMiddleware } = require("../middlewares/jwt.middleware");
const { isAdmin } = require("../middlewares/isadmin.middleware");

router.get("/", (req, res) => {
  res.send("Hello World");
});
router.post("/register", jwtMiddleware, createAlumni);
router.put("/update/:id", jwtMiddleware, updateAlumni);
router.get("/get", jwtMiddleware, getAlumni);
router.get("/get/:id", jwtMiddleware, getAlumniById);
router.delete("/delete/:id", jwtMiddleware, isAdmin, deleteAlumni);

module.exports = router;
