import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { Todo } from "./models/list.model.js";

dotenv.config();

console.log(process.env.MONGO_URI); //calling .env file

const app = express();
app.use(express.json());

//route to create a new todo(task)
app.post("/create", async (req, res) => {
  //create task
  try {
    const todo = req.body; //user data
    //simulating missing task error
    if (!todo) {
      return res
        .status(400)
        .json({ success: false, message: "task is required" });
    }
    //Todo is mongoose model imported from list.models.js representing collections in the database
    const newTodo = new Todo(todo);

    await newTodo.save();
    res
      .status(201)
      .json({ success: true, data: newTodo, message: "Task created" });
  } catch (error) {
    console.log("Error in creating product", error.message);
    res.status(500).json({ message: "Server Error", success: false });
  }
});

app.get("/tasks", async (req, res) => {
  try {
    //task is a variable that stores the result of Todo.find().
    const tasks = await Todo.find(); //uses Mongoose's find() method to retrieve all from Todo collection
    res.status(200).json({
      success: true,
      message: "Task retrieved successfully",
      data: tasks,
    });
  } catch (error) {
    console.log("error in fetching tasks", error.message);
    res.status(500).json({ success: false, message: "server error" });
  }
});

app.delete("/", async (req, res) => {});

app.listen(5000, () => {
  connectDB();
  console.log("Server is running on port 5000");
});
