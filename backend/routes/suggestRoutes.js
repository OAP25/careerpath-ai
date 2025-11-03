import express from "express";
import { PythonShell } from "python-shell";
const router = express.Router();

router.post("/suggest", async (req, res) => {
  const { skills, interests } = req.body;

  const options = {
    mode: "text",
    pythonOptions: ["-u"],
    scriptPath: "./", // current backend folder
    args: [],
  };

  // send data to Python via stdin
  const pyshell = new PythonShell("ai_engine.py", options);

  let output = "";

  pyshell.on("message", (message) => {
    output += message;
  });

  pyshell.send(JSON.stringify({ skills, interests }));
  pyshell.end((err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "AI processing failed" });
    }

    try {
      const result = JSON.parse(output);
      res.json(result);
    } catch (parseErr) {
      console.error(parseErr);
      res.status(500).json({ error: "Invalid AI output" });
    }
  });
});

export default router;
