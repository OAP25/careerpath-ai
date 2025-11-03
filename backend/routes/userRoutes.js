import express from "express";
import User from "../models/User.js";

const router = express.Router();

// POST /api/users
router.post("/", async (req, res) => {
  try {
    const { name, email, careerGoal } = req.body;
    const user = new User({ name, email, careerGoal });
    await user.save();
    res.status(201).json({ message: "User saved", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
