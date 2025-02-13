import express from "express";
import { createTask, deleteTask, getTask } from "../server";

export const router = express.Router();

router.get("/tasks", getTask);
router.post("/create", createTask);
router.delete("/:id", deleteTask);
