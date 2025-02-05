import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";

dotenv.config(); //Loads environment variables from .env

const MONGO_URI = process.env.MONGO_URI;
console.log("MONGO URI:", process.env.TEST_VAR);
connectDB();
const app = express();

app.use(cors());
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
