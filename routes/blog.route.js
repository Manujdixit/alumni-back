const express = require("express");
const router = express.Router();
const {
  createBlog,
  getAllBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
} = require("../controller/blog.ctrl");
const { jwtMiddleware } = require("../middlewares/jwt.middleware");
const { isAdmin } = require("../middlewares/isadmin.middleware");

router.get("/", (req, res) => {
  res.send("Hello Blogs");
});
router.post("/create", isAdmin, createBlog);
router.put("/update/:id", isAdmin, updateBlog);
router.get("/get", getAllBlogs);
router.get("/get/:id", getBlog);
router.delete("/delete/:id", isAdmin, deleteBlog);

module.exports = router;
