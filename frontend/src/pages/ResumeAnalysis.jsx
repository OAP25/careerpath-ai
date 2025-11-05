import { useState } from "react";
import axios from "axios";
import ResultCard from "../components/ResultCard";

export default function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const analyzeFile = async () => {
    if (!file) return alert("Upload a file first!");
    const fd = new FormData();
    fd.append("resume", file);
    const res = await axios.post("http://localhost:5000/api/upload-resume", fd);
    let json;
    try { json = JSON.parse(res.data.result.replace(/```json|```/g, "").trim()); }
    catch { json = { recommendation: res.data.result }; }
    setResult(json);
  };

  const analyzeText = async () => {
    if (!text.trim()) return alert("Enter resume text first!");
    const res = await axios.post("http://localhost:5000/api/suggest-career/resume", { resumeText:text });
    let json;
    try { json = JSON.parse(res.data.result.replace(/```json|```/g, "").trim()); }
    catch { json = { recommendation: res.data.result }; }
    setResult(json);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#232933] text-gray-200">
      
      {/* LEFT FORM */}
      <div className="p-10 flex flex-col justify-center max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Resume Analysis</h2>

        <div className="border border-gray-600 p-4 rounded mb-6">
          <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setFile(e.target.files[0])}/>
          <button onClick={analyzeFile} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 mt-3 rounded">Analyze File</button>
        </div>

        <div className="border border-gray-600 p-4 rounded">
          <textarea rows="6" value={text} onChange={(e) => setText(e.target.value)} className="w-full bg-transparent border border-gray-600 p-2 rounded"/>
          <button onClick={analyzeText} className="bg-green-600 hover:bg-green-700 px-4 py-2 mt-3 rounded">Analyze Text</button>
        </div>

        {result && <div className="mt-8"><ResultCard data={result}/></div>}
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative hidden md:block">
        <img src="/resume.jpg" className="h-full w-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-l from-[#232933] to-transparent"></div>
      </div>
    </div>
  );
}
