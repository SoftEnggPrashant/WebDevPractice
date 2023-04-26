const { errorHandler } = require("../middlewares/errorHandler");
const Todos = require("../models/todoModel");

// create todo
exports.createTodo = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      errorHandler(res, "title and description are required", 500);
    }

    const todo = await Todos.create({ title, description });

    res.status(200).json({
      success: true,
      data: todo,
      message: "todo create successfully",
    });
  } catch (error) {
    errorHandler(res, error.message, 500);
  }
};

// get All Todos
exports.getAlltodoList = async (req, res, next) => {
  try {
    const todos = await Todos.find();

    if (!todos) {
      errorHandler(res, "Not Found", 404);
    }

    res.status(200).json({
      success: true,
      data: todos,
    });
  } catch (error) {
    errorHandler(res, error.message, 500);
  }
};

// get single todo detail by id
exports.getSingleTodo = async (req, res, next) => {
  try {
    const id = req.params.id;

    if (!id) {
      errorHandler(res, "Not Found todo id is Not present ", 404);
    }

    const todo = await Todos.find({ _id: id });

    if (!todo) {
      errorHandler(res, "Not Found todo", 404);
    }

    res.status(200).json({
      success: true,
      data: todo,
    });
  } catch (error) {
    errorHandler(res, error.message, 500);
  }
};

// update todo
exports.updateTodo = async (req, res, next) => {
  try {
    const id = req.params.id;

    if (!id) {
      errorHandler(res, "todo id not present ", 500);
    }
    if (!req.body) {
      errorHandler(res, "todo data not present ", 500);
    }

    const updatedTodo = await Todos.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).json({
      success: true,
      data: updatedTodo,
      message: "todo Update Successfully",
    });
  } catch (error) {
    errorHandler(res, error.message, 500);
  }
};

//delete todo
exports.deleteTodo = async (req, res, next) => {
  try {
    const id = req.params.id;

    if (!id) {
      errorHandler(res, "todo id not present ", 500);
    }

    await Todos.deleteOne({_id:id});

    res.status(200).json({
      success: true,
      message: "todo delete successfully",
    });
  } catch (error) {
    errorHandler(res, error.message, 500);
  }
};
