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

app.listen(5000, () => {
  connectDB();
  console.log("Server is running on port 5000");
});
