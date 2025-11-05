import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import SuggestCareer from "./pages/SuggestCareer";
import ResumeUpload from "./pages/ResumeAnalysis"; // Import the new component
import SdeRoadmap from "./pages/learning/SdeRoadmap";
import DataAnalystRoadmap from "./pages/learning/DataAnalystRoadmap";
import MLAIRoadmap from "./pages/learning/MLAIRoadmap";
import CloudDevOpsRoadmap from "./pages/learning/CloudDevOpsRoadmap";
import About from "./pages/About";






export default function App() {
  return (
    <div className="min-h-screen bg-black text-gray-200 flex flex-col">

      <nav className="p-4 bg-gray-800 text-white flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/suggest" element={<SuggestCareer />} />
        <Route path="/upload-resume" element={<ResumeUpload />} />
        <Route path="/learn/sde" element={<SdeRoadmap />} />
        <Route path="/learn/data-analyst" element={<DataAnalystRoadmap />} />
        <Route path="/learn/ml-ai" element={<MLAIRoadmap />} />
        <Route path="/learn/cloud-devops" element={<CloudDevOpsRoadmap />} />
        <Route path="/about" element={<About />} />


      </Routes>
      <footer className="bg-black text-gray-500 py-6 text-center text-sm border-t border-gray-800">

  <p>© {new Date().getFullYear()} CareerPath AI. All Rights Reserved.</p>
  <p className="mt-1 text-gray-600">
    Built with ambition. Designed for students who aim high.
  </p>
</footer>

    </div>
  );
}
