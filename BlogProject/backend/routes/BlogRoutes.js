const router = require("express").Router();
const {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogsController");

router.route("/create/blog").post(createBlog);

router.route("/getAll/blogs").get(getAllBlogs);

router.route("/get/blog/:id").get(getBlogById);

router.route("/update/blog/:id").put(updateBlog);

router.route("/delete/blog/:id").delete(deleteBlog);

module.exports = router;
