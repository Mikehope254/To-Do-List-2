import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import path from "path";

import { connectDB } from "./config/db.js";
import todoRoutes from "./routes/todo.route.js";

console.log(process.env.MONGO_URI); //calling .env file

const __dirname = path.resolve();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/todo", todoRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/Frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"));
  });
}
app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(5000, () => {
  connectDB();
  console.log("Server is running on port 5000");
});
