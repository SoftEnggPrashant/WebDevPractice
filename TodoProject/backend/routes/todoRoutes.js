const router = require("express").Router();
const {
  createTodo,
  getAlltodoList,
  getSingleTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

router.route("/crete/todo").post(createTodo);

router.route("/getAll/todos").get(getAlltodoList);

router.route("/getSingle/todo/:id").get(getSingleTodo);

router.route("/update/todo/:id").post(updateTodo);

router.route("/delete/todo/:id").delete(deleteTodo);

module.exports = router;
