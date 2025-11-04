import express from "express";
import axios from "axios";

const router = express.Router();

// route → http://localhost:5000/api/suggest
router.post("/", async (req, res) => {
  try {
    const { skills, interests, goals } = req.body;

    // call the Flask AI engine
    const response = await axios.post("http://127.0.0.1:5001/suggest-career", {
      skills,
      interests,
      goals,
    });

    res.json(response.data);
  } catch (error) {
    console.error("❌ Error connecting to AI service:", error.message);
    res.status(500).json({ error: "AI service unavailable" });
  }
});

export default router;
