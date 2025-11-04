import { Routes, Route, Link } from "react-router-dom";
import SuggestCareer from "./pages/SuggestCareer";
import ResumeUpload from "./pages/ResumeAnalysis"; // Import the new component

export default function App() {
  return (
    <div>
      <nav className="p-4 bg-gray-800 text-white flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/suggest">Suggest Career</Link>
        <Link to="/upload-resume">Analyze Resume</Link> {/* Add link for resume */}
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <h2 className="text-center mt-8 text-2xl">
              Welcome to CareerPath AI
            </h2>
          }
        />
        <Route path="/suggest" element={<SuggestCareer />} />
        <Route path="/upload-resume" element={<ResumeUpload />} /> {/* New route */}
      </Routes>
    </div>
  );
}
