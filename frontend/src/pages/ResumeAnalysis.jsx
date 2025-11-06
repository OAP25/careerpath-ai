import { useState } from "react";
import axios from "axios";
import ResultCard from "../components/ResultCard";

export default function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const BASE = import.meta.env.VITE_BACKEND_URL;

  const parseResultJSON = (raw) => {
    if (!raw || typeof raw !== "string") return null;
    const cleaned = raw.replace(/```json|```/g, "").trim();
    try { return JSON.parse(cleaned); } catch { return null; }
  };

  const analyzeFile = async () => {
    if (!file) return alert("Upload a file first!");
    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("resume", file);

      const res = await axios.post(`${BASE}/api/upload-resume`, fd);
      const obj = parseResultJSON(res.data.result);
      if (!obj) return alert("Invalid JSON");
      setResult(obj);
    } catch {
      alert("Upload failed.");
    } finally {
      setLoading(false);
    }
  };

  const analyzeText = async () => {
    if (!text.trim()) return alert("Enter resume text first!");
    setLoading(true);
    try {
      const res = await axios.post(`${BASE}/api/suggest-career/resume`, { resumeText:text });
      const obj = parseResultJSON(res.data.result);
      if (!obj) return alert("Invalid JSON");
      setResult(obj);
    } catch {
      alert("Analysis failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#343A45] text-gray-200">
      <div className="p-10 flex flex-col justify-center max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Resume Analysis</h2>

        <div className="border border-gray-600 p-4 rounded mb-6 flex flex-col gap-3">
          <label className="text-sm text-gray-400">Upload Resume File:</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="border border-gray-500 bg-transparent p-2 rounded cursor-pointer"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button
            onClick={analyzeFile}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded disabled:opacity-50"
          >
            {loading ? "Analyzing..." : "Analyze File"}
          </button>
        </div>

        <div className="border border-gray-600 p-4 rounded">
          <textarea
            rows="6"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full bg-transparent border border-gray-600 p-2 rounded"
            placeholder="Paste your resume text here…"
          />
          <button
            onClick={analyzeText}
            disabled={loading}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 mt-3 rounded disabled:opacity-50"
          >
            {loading ? "Analyzing..." : "Analyze Text"}
          </button>
        </div>

        {result && (
          <div className="mt-8"><ResultCard data={result} /></div>
        )}
      </div>

      <div className="relative hidden md:block">
        <img src="/resume.jpg" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-l from-[#343A45] to-transparent"></div>
      </div>
    </div>
  );
}
