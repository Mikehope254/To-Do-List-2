import React, { useState } from "react";
import "../App.css";
import { useTaskStore } from "../store/task";
import { useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const TaskInput = () => {
  const [newTodo, setNewTodo] = useState({ task: "" });
  const toast = useToast();

  const { createTask } = useTaskStore();

  const handleAddTask = async () => {
    const { success, message } = await createTask(newTodo);

    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
    }
    setNewTodo({ task: "" }); //clears input after adding task
  };

  return (
    <div className="main">
      <div className="title">
        <h1>TO-DO BOARD</h1>
      </div>
      <div className="input">
        <input
          placeholder="  Enter Task Here"
          name="task"
          value={newTodo.task}
          onChange={(e) => setNewTodo({ task: e.target.value })}
        />
      </div>
      <div className="buttons">
        <button className="viewbutton">
          <Link to="/tasks">View Tasks</Link>
        </button>
        <button className="enterbutton" onClick={handleAddTask}>
          Enter Task
        </button>
      </div>
    </div>
  );
};

export default TaskInput;
