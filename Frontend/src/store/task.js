import { create } from "zustand";

export const useTaskStore = create((set) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
  createTask: async (newTodo) => {
    if (!newTodo.task) {
      return { success: false, message: "Please Enter Task" };
    }
    const res = await fetch("http://localhost:5000/api/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });

    if (!res.ok) {
      return { success: false, message: "Error Handling Task" };
    }

    const data = await res.json(); //response from backend used to update the Zustand Store with the new product
    console.log("Raw Response:", data);

    set((state) => ({ tasks: [...state.tasks, data.data] })); //update Zustand Store
    return { success: true, message: "Task Entered Successfully" };
  },
}));
