import React from "react";
import "../style/ViewTasks.css";

export default function ViewTasks() {
  return (
    <div className="Viewmain">
      <div className="task">
        <div className="Viewtitle">
          <h1>Completed tasks</h1>
        </div>
      </div>
      <div className="task">
        <div className="Viewtitle">
          <h1>Incompleted tasks</h1>
        </div>
      </div>
    </div>
  );
}
