import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import suggestRoutes from "./routes/suggestRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";

dotenv.config();
const app = express();

app.use(cors({
  origin: [
    "https://careerpath-ai-kappa.vercel.app",   // your frontend
    "http://localhost:5173"                     // local dev
  ],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  credentials: true
}));

// allow OPTIONS
app.options("*", cors());

app.use(express.json());

// API routes
app.use("/api/suggest-career", suggestRoutes);
app.use("/api/upload-resume", resumeRoutes);

// health check
app.get("/", (req, res) => {
  res.send("CareerPath AI Backend Running ✅");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
