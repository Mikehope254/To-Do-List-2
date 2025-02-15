import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import todoRoutes from "./routes/todo.route.js";

dotenv.config();

console.log(process.env.MONGO_URI); //calling .env file

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", todoRoutes);

app.listen(5000, () => {
  connectDB();
  console.log("Server is running on port 5000");
});
