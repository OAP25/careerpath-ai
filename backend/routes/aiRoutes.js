import express from "express";

const router = express.Router();

// Simple health check route for AI service
router.get("/health", (req, res) => {
  res.json({ status: "AI route working fine" });
});

export default router;
