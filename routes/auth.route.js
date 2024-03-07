const express = require("express");
const router = express.Router();
const { register, login, logout } = require("../controller/auth.ctrl");

router.get("/", (req, res) => {
  res.send("Hello World");
});
router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);

module.exports = router;
