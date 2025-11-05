import { useState } from "react";
import axios from "axios";
import ResultCard from "../components/ResultCard";

export default function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const safeParse = (data) => {
    if (!data) return null;
    let clean = data.replace(/```json|```/g, "").trim(); // remove markdown fences
    try { return JSON.parse(clean); }
    catch { return { recommendation: clean }; }
  };

  const analyzeFile = async () => {
    if (!file) return alert("Upload a file first!");

    const fd = new FormData();
    fd.append("resume", file);

    const res = await axios.post("http://localhost:5000/api/upload-resume", fd, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    setResult(safeParse(res.data.result));
  };

  const analyzeText = async () => {
    if (!text.trim()) return alert("Enter resume text first!");

    const res = await axios.post("http://localhost:5000/api/suggest-career/resume", {
      resumeText: text,
    });

    setResult(safeParse(res.data.result));
  };

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-5">AI Resume Analysis</h1>

      {/* File Upload */}
      <div className="border p-4 rounded mb-6">
        <h2 className="text-xl font-semibold mb-2">Upload Resume File</h2>
        <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setFile(e.target.files[0])} />
        <button onClick={analyzeFile} className="mt-3 bg-blue-600 text-white px-5 py-2 rounded">
          Analyze File
        </button>
      </div>

      {/* Text Area */}
      <div className="border p-4 rounded mb-6">
        <h2 className="text-xl font-semibold mb-2">Or Paste Resume Text</h2>
        <textarea
          className="w-full border p-2 rounded"
          rows="7"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={analyzeText} className="mt-3 bg-green-600 text-white px-5 py-2 rounded">
          Analyze Text
        </button>
      </div>

      {/* RESULT */}
      {result && (
        typeof result === "object"
          ? <ResultCard data={result} />
          : <pre className="mt-6 p-4 border rounded bg-gray-50 whitespace-pre-line">{result}</pre>
      )}
    </div>
  );
}
