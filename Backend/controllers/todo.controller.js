import { Todo } from "../models/todo.model.js";
import mongoose from "mongoose";

//route to create a new todo(task)
export const createTask = async (req, res) => {
  //create task
  try {
    const { task } = req.body; //user data
    //simulating missing task error
    if (!task) {
      return res
        .status(400)
        .json({ success: false, message: "task is required" });
    }
    //Todo is mongoose model imported from list.models.js representing collections in the database
    const newTodo = new Todo({ task });

    await newTodo.save();
    res
      .status(201)
      .json({ success: true, data: newTodo, message: "Task created" });
  } catch (error) {
    console.log("Error in creating product", error.message);
    res.status(500).json({ message: "Server Error", success: false });
  }
};

export const getTask = async (req, res) => {
  try {
    //task is a variable that stores the result of Todo.find().
    const tasks = await Todo.find(); //uses Mongoose's find() method to retrieve all from Todo collection
    res.status(200).json({
      success: true,
      data: tasks,
      message: "Task retrieved successfully",
    });
  } catch (error) {
    console.log("error in fetching tasks", error.message);
    res.status(500).json({ success: false, message: "server error" });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid task ID" });
  }

  try {
    await Todo.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Task Deleted" });
  } catch (error) {
    console.log("Error in deleting task", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updateTaskCompletion = async (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;

    const updateTask = await Todo.findByIdAndUpdate(
      id,
      { completed },
      { new: true }
    );
    if (!updateTask) {
      return res
        .status(404)
        .json({ success: false, message: "Task not found" });
    }

    res.json({ success: true, data: updateTask });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
