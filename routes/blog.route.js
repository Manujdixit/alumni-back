const express = require("express");
const router = express.Router();
const {
  createBlog,
  getAllBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
} = require("../controller/blog.ctrl");

router.get("/", (req, res) => {
  res.send("Hello Blogs");
});
router.post("/create", createBlog);
router.put("/update/:id", updateBlog);
router.get("/get", getAllBlogs);
router.get("/get/:id", getBlog);
router.delete("/delete/:id", deleteBlog);

module.exports = router;
