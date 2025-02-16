import React from "react";
import "../style/ViewTasks.css";
import "../App.css";

export default function ViewTasks() {
  return (
    <div className="Viewmain">
      <div className="taskBox">
        <div className="Viewtitle">
          <h1>Completed tasks</h1>
        </div>
        <div className="tasks">Tasks</div>
      </div>
      <div className="taskBox">
        <div className="Viewtitle">
          <h1>Incompleted tasks</h1>
        </div>
        <div className="tasks">Tasks</div>
      </div>
    </div>
  );
}
