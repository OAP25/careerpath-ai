import { useState } from "react";
import API from "../api";

export default function SuggestCareer() {
  const [formData, setFormData] = useState({ skills: "", interests: "" });
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await API.post("/suggest", formData);
      setResult(res.data.suggestion);
    } catch (error) {
      console.error(error);
      setResult("Error fetching suggestion.");
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>AI Career Suggestion</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="skills"
          placeholder="Enter your skills"
          value={formData.skills}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="interests"
          placeholder="Enter your interests"
          value={formData.interests}
          onChange={handleChange}
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? "Getting Suggestion..." : "Suggest Career"}
        </button>
      </form>
      {result && (
        <div style={{ marginTop: "1rem" }}>
          <h3>Suggested Career:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}
