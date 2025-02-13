import { Route, Routes } from "react-router-dom";
import "./App.css";
import TaskInput from "./pages/TaskInput";
import ViewTasks from "./pages/ViewTasks";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TaskInput />} />
        <Route path="/tasks" element={<ViewTasks />} />
      </Routes>
    </div>
  );
}

export default App;
