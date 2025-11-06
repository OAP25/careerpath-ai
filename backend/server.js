import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import suggestRoutes from "./routes/suggestRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";

dotenv.config();
const app = express();

app.use(cors({
  origin: [
    "https://careerpath-ai-kappa.vercel.app",  // frontend hosted
    "http://localhost:5173"                    // local dev
  ],
  methods: ["GET","POST","PUT","DELETE"],
  credentials: true
}));

app.use(express.json());

app.use("/api/suggest-career", suggestRoutes);
app.use("/api/upload-resume", resumeRoutes);

app.get("/", (req, res) => {
  res.send("CareerPath AI Backend Running ✅");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
