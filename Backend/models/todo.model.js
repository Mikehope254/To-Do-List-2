import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true, //Task name is mandatory
      trim: true, //removes extra space
    },
    completed: {
      type: Boolean,
      default: false, // Task is incomplete by default
    },
  },
  {
    timestamps: true, //createdAt, updatedAt fields added automatically
  }
);

export const Todo = mongoose.model("todo", todoSchema);
