import express from "express";
import axios from "axios";

const router = express.Router();

// ---- Suggest Career ----
router.post("/", async (req, res) => {
  try {
    const { skills, interests, goals } = req.body;
    const response = await axios.post("http://127.0.0.1:5001/suggest-career", {
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

// ---- Analyze Resume ----
router.post("/resume", async (req, res) => {
  try {
    const formData = req.body;
    const response = await axios.post("http://127.0.0.1:5001/analyze-resume", formData);
    res.json(response.data);
  } catch (error) {
    console.error("Error analyzing resume:", error.message);
    res.status(500).json({ error: "AI service unavailable" });
  }
});

export default router;
