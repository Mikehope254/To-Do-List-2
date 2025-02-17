import React from "react";
import "../style/ViewTasks.css";
import "../App.css";
import { Box, SimpleGrid } from "@chakra-ui/react";

export default function ViewTasks() {
  return (
    <div className="Viewmain">
      <div className="taskBox">
        <div className="Viewtitle">
          <h1>Incompleted tasks</h1>
        </div>
        <div className="tasks">
          Tasks
          <SimpleGrid
            rows={{ base: 1, md: 2, lg: 3 }}
            spacing={5}
            w={"full"}
          ></SimpleGrid>
        </div>
      </div>
      <div className="taskBox">
        <div className="Viewtitle">
          <h1>Completed tasks</h1>
        </div>
        <div className="tasks">Tasks</div>
      </div>
    </div>
  );
}
