import { useState } from "react";
import axios from "axios";

export default function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const analyzeFile = async () => {
    if (!file) return alert("Upload a file first!");

    const fd = new FormData();
    fd.append("resume", file);

    const res = await axios.post("http://localhost:5000/api/upload-resume", fd, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    setResult(res.data.result || JSON.stringify(res.data));
  };

  const analyzeText = async () => {
    if (!text.trim()) return alert("Enter resume text first!");

    const res = await axios.post("http://localhost:5000/api/suggest-career/resume", {
      resumeText: text,
    });

    setResult(res.data.result || JSON.stringify(res.data));
  };

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-5">AI Resume Analysis</h1>

      {/* File Upload */}
      <div className="border p-4 rounded mb-6">
        <h2 className="text-xl font-semibold mb-2">Upload Resume File</h2>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button
          onClick={analyzeFile}
          className="mt-3 bg-blue-600 text-white px-5 py-2 rounded"
        >
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
        <button
          onClick={analyzeText}
          className="mt-3 bg-green-600 text-white px-5 py-2 rounded"
        >
          Analyze Text
        </button>
      </div>

      {/* RESULT */}
      {result && (
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="font-semibold mb-2 text-xl">Analysis Result:</h2>
          <p className="whitespace-pre-line">{result}</p>
        </div>
      )}
    </div>
  );
}
