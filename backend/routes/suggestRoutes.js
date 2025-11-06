import express from "express";
import axios from "axios";

const router = express.Router();
const AI_URL = "https://careerpath-ai-xqw4.onrender.com";

// ---- Suggest Career ----
router.post("/", async (req, res) => {
  try {
    const { skills, interests, goals } = req.body;
    const response = await axios.post(`${AI_URL}/suggest-career`, {
      skills,
      interests,
      goals,
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error connecting to AI service:", error.message);
    res.status(500).json({ error: "AI service unavailable" });
  }
});

// ---- Analyze Resume TEXT ----
router.post("/resume", async (req, res) => {
  try {
    const { resumeText } = req.body;

    const response = await axios.post(`${AI_URL}/analyze-resume`, {
      resumeText,
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error analyzing resume:", error.message);
    res.status(500).json({ error: "AI service unavailable" });
  }
});

export default router;
