import express from "express";
import {
  createTask,
  deleteTask,
  getTask,
  updateTaskCompletion,
} from "../controllers/todo.controller.js";

const router = express.Router();

router.get("/", getTask);
router.post("/", createTask);
router.delete("/:id", deleteTask);
router.patch("/:id", updateTaskCompletion);

export default router;
