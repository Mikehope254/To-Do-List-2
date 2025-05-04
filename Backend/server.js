import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import todoRoutes from "./routes/todo.route.js";

//Verify Installations
import cookie from "cookie";
console.log("Cookie module version:", cookie.version);

// Load environment variables
dotenv.config();

const __dirname = path.resolve();
const app = express();

//Middleware
app.use(express.json());
app.use(cors());

// Verify environment variables
if (!process.env.MONGO_URI) {
  console.error("MONGO_URI is not defined in environment variables");
  process.exit(1);
}

// Database connection
connectDB(process.env.MONGO_URI);

//Routes
app.use("/api/todo", todoRoutes);

// // Production configuration
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../Frontend/dist")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"));
//   });
// }

// Health check
app.get("/", (req, res) => {
  res.json({
    status: "API is running",
    database: process.env.MONGO_URI ? "Configured" : "Not configured",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
});
