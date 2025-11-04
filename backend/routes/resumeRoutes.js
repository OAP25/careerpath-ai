import express from "express";
import multer from "multer";
import axios from "axios";
import fs from "fs";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// =========== RESUME ROUTE ===========
router.post("/", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const filePath = req.file.path;
    const resumeText = fs.readFileSync(filePath, "utf8"); // read file raw as text
    fs.unlinkSync(filePath); // delete after use

    // Send to ai-engine
    const response = await axios.post("http://127.0.0.1:5001/analyze-resume", {
      resumeText,
    });

    return res.json(response.data);

  } catch (err) {
    console.error("Error uploading resume:", err.message);
    return res.status(500).json({ error: "Resume processing failed" });
  }
});

export default router;
