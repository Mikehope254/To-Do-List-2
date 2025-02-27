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
  //GET request to /api/todo
  fetchTasks: async () => {
    const res = await fetch("http://localhost:5000/api/todo", {
      method: "GET",
    });
    const data = await res.json();
    set({ tasks: data.data });
  },
  //DELETE request to /api/todo
  deleteTask: async (tid) => {
    const res = await fetch(`http://localhost:5000/api/todo/${tid}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    //updates the ui immediately after deletion, without needing a refresh
    set((state) => ({
      tasks: state.tasks.filter((tasks) => tasks._id !== tid), //filter method used to specify product to be deleted
    }));
    return { success: true, message: data.message };
  },

  updateTask: async (tid, completed) => {
    const res = await fetch(`http://localhost:5000/api/todo/${tid}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ completed }),
    });

    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    set((state) => ({
      tasks: state.tasks.map((task) =>
        task._id === tid ? { ...task, completed } : task
      ),
    }));
    return { succes: true, message: "Task updated successfully" };
  },
}));
