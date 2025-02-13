import React, { useState } from "react";
import "../App.css";

export default function TaskInput() {
  const [newTodo, setNewTodo] = useState({
    task: "",
  });
  return (
    <div className="main">
      <div className="title">
        <h1>TO-DO BOARD</h1>
      </div>
      <div className="input">
        <input placeholder="   Enter Task Here" />
      </div>
    </div>
  );
}
