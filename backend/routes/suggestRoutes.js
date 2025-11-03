import express from "express";
const router = express.Router();

router.post("/suggest", async (req, res) => {
  const { skills, interests } = req.body;

  // simple mock AI logic (we’ll connect to Python later)
  let suggestion = "";

  if (skills.includes("code") || interests.includes("software")) {
    suggestion = "Software Engineer";
  } else if (skills.includes("data") || interests.includes("analysis")) {
    suggestion = "Data Analyst";
  } else if (skills.includes("design") || interests.includes("creative")) {
    suggestion = "UI/UX Designer";
  } else {
    suggestion = "Project Manager";
  }

  res.json({ suggestion });
});

export default router;
