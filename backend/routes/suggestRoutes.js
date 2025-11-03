import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { skills, interests } = req.body;
    console.log("📩 Incoming data from frontend:", req.body);

    // Send data to Flask AI service
    const response = await axios.post("http://127.0.0.1:5001/suggest-career", {
      skills,
      interests,
    });

    console.log("🤖 Response from AI:", response.data);

    // Send Flask AI result back to frontend
    res.json(response.data);
  } catch (error) {
    console.error("❌ Error connecting to AI service:", error.message);
    res.status(500).json({ error: "AI service unavailable" });
  }
});

export default router;
