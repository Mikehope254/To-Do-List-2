import React from "react";
// import "../style/ViewTasks.css";
import "../App.css";
import { Box, SimpleGrid } from "@chakra-ui/react";
import TaskCard from "../components/TaskCard.jsx";
import { useTaskStore } from "../store/task.js";
import { useEffect } from "react";

export default function ViewTasks() {
  const { tasks, fetchTasks } = useTaskStore();

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);
  console.log("tasks", tasks);

  return (
    <div className="Viewmain">
      <div className="taskBox">
        <div className="Viewtitle">
          <h1>Incompleted tasks</h1>
        </div>
        <div className="tasks">
          <div className="taskRows">
            {tasks
              .filter((task) => !task.completed)
              .map((tasks) => (
                <TaskCard key={tasks._id} task={tasks} />
              ))}
          </div>
        </div>
      </div>
      <div className="taskBox">
        <div className="Viewtitle">
          <h1>Completed tasks</h1>
        </div>
        <div className="tasks">
          <SimpleGrid rows={{ base: 1, md: 2, lg: 3 }} spacing={5} w={"full"}>
            {tasks
              .filter((task) => task.completed)
              .map((tasks) => (
                <TaskCard key={tasks._id} task={tasks} />
              ))}
          </SimpleGrid>
        </div>
      </div>
    </div>
  );
}
