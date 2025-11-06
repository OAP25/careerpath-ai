import express from "express";
import multer from "multer";
import axios from "axios";
import fs from "fs";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

const AI_URL = "https://careerpath-ai-xqw4.onrender.com";

router.post("/", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const filePath = req.file.path;
    const file_data = fs.readFileSync(filePath, { encoding: "base64" });

    // send file to AI service
    const response = await axios.post(`${AI_URL}/analyze-resume-file`, {
      name: req.file.originalname,
      content: file_data
    });

    fs.unlinkSync(filePath);
    res.json(response.data);

  } catch (error) {
    console.error("Resume upload error:", error.message);
    res.status(500).json({ error: "Resume file processing failed" });
  }
});

export default router;
