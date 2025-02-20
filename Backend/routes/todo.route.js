import express from "express";
import {
  createTask,
  deleteTask,
  getTask,
} from "../controllers/todo.controller.js";

const router = express.Router();

router.get("/", getTask);
router.post("/", createTask);
router.delete("/:id", deleteTask);
router.patch("/:id", updateTask);

export default router;
