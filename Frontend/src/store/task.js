import { create } from "zustand";

export const useTaskStore = create((set) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
  createTask: async (newTodo) => {
    if (!newTodo.task) {
      return { success: false, message: "Please Enter Task" };
    }
    const res = await fetch("/api/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });
    const data = await res.json(); //response from backend used to update the Zustand Store with the new product
    set((state) => ({ tasks: [...state.tasks, data.data] }));
    return { success: true, message: "Task Entered Successfully" };
  },
}));
