import { Routes, Route, Link } from "react-router-dom";
import SuggestCareer from "./pages/SuggestCareer";
import ResumeUpload from "./pages/ResumeAnalysis"; // Import the new component
import LearningCenter from "./pages/learning/LearningCenter";
import SdeRoadmap from "./pages/learning/SdeRoadmap";
import DataAnalystRoadmap from "./pages/learning/DataAnalystRoadmap";
import MLAIRoadmap from "./pages/learning/MLAIRoadmap";




export default function App() {
  return (
    <div>
      <nav className="p-4 bg-gray-800 text-white flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/suggest">Suggest Career</Link>
        <Link to="/upload-resume">Analyze Resume</Link>
        <Link to="/learn">Learning Center</Link> {/* <- FIXED */}
      </nav>

      <Routes>
        <Route path="/" element={<h2 className="text-center mt-8 text-2xl">Welcome to CareerPath AI</h2>} />
        <Route path="/suggest" element={<SuggestCareer />} />
        <Route path="/upload-resume" element={<ResumeUpload />} />
        <Route path="/learn" element={<LearningCenter />} />
        <Route path="/learn/sde" element={<SdeRoadmap />} />
        <Route path="/learn/data-analyst" element={<DataAnalystRoadmap />} />
        <Route path="/learn/ml-ai" element={<MLAIRoadmap />} />
      </Routes>
    </div>
  );
}
