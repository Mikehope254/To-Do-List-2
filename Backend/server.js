import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import todoRoutes from "./routes/todo.route.js";

// Load environment variables
dotenv.config();

const __dirname = path.resolve();
const app = express();

//Middleware
app.use(express.json());
app.use(
  cors({
    origin: true, // process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  }),
);

// Database connection (don't exit on failure in serverless)
let dbConnected = false;
const initDB = async () => {
  if (!process.env.MONGO_URI) {
    console.error("MONGO_URI is not defined in environment variables");
    return;
  }
  try {
    await connectDB(process.env.MONGO_URI);
    dbConnected = true;
  } catch (err) {
    console.error("DB connection failed:", err.message);
  }
};

initDB();

// // Verify environment variables
// if (!process.env.MONGO_URI) {
//   console.error("MONGO_URI is not defined in environment variables");
//   process.exit(1);
// }

// // Database connection
// connectDB(process.env.MONGO_URI);

//Routes
app.use("/api/todo", todoRoutes);

// Production configuration
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../Frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"));
  });
}

// Health check
app.get("/", (req, res) => {
  res.json({
    status: "API is running",
    database: dbConnected ? "Connected" : "Not connected",
  });
});

// Only listen in development (not on Vercel)
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
//   console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
// });

export default app;
