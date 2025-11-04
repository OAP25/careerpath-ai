import { useState } from "react";
import axios from "axios";

export default function SuggestCareer() {
  const [skills, setSkills] = useState("");
  const [interests, setInterests] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResult("");

    // ✅ Input validation
    if (!skills.trim() || !interests.trim()) {
      setError("Please enter both skills and interests before submitting.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/suggest-career", {
        skills,
        interests,
      });
      setResult(response.data.career);
    } catch (err) {
      setError("Failed to get a suggestion. Try again later.");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl mb-4 font-semibold">Career Suggestion</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Enter your skills"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Enter your interests"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded">
          Suggest Career
        </button>
      </form>

      {error && <p className="text-red-600 mt-4">{error}</p>}
      {result && <p className="text-green-600 mt-4">Suggested Career: {result}</p>}
    </div>
  );
}
