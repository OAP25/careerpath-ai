import { useState } from "react";
import axios from "axios";

export default function SuggestCareer() {
  const [skills, setSkills] = useState("");
  const [interests, setInterests] = useState("");
  const [goals, setGoals] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const BASE = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${BASE}/api/suggest-career`, { skills, interests, goals });
      setResult(res.data.result);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#2E3440] text-gray-200">
      <div className="p-10 flex flex-col justify-center max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Career Suggestion</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input type="text" placeholder="Your Skills" value={skills} onChange={(e)=>setSkills(e.target.value)} className="border border-gray-600 bg-transparent p-3 rounded"/>
          <input type="text" placeholder="Your Interests" value={interests} onChange={(e)=>setInterests(e.target.value)} className="border border-gray-600 bg-transparent p-3 rounded"/>
          <input type="text" placeholder="Your Goals (optional)" value={goals} onChange={(e)=>setGoals(e.target.value)} className="border border-gray-600 bg-transparent p-3 rounded"/>

          <button type="submit" disabled={loading} className="bg-blue-600 hover:bg-blue-700 p-3 mt-3 rounded font-semibold disabled:opacity-50">
            {loading ? "Analyzing..." : "Analyze"}
          </button>
        </form>

        {result && (
          <div className="mt-10 p-6 bg-gray-900 text-gray-200 rounded-xl border border-gray-700 whitespace-pre-wrap leading-7 shadow-xl">
            {result}
          </div>
        )}
      </div>

      <div className="relative hidden md:block">
        <img src="/suggest.jpg" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-l from-[#2E3440]/90 to-transparent"></div>
      </div>
    </div>
  );
}
