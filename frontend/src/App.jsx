import { Routes, Route, Link } from "react-router-dom";
import SuggestCareer from "./pages/SuggestCareer";

export default function App() {
  return (
    
    <div><h1 className="text-4xl font-bold text-blue-600">Tailwind is working!</h1>

      <nav style={{ marginBottom: "1rem" }}>
        <Link to="/">Home</Link> | <Link to="/suggest">Suggest Career</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h2>Welcome to CareerPath AI</h2>} />
        <Route path="/suggest" element={<SuggestCareer />} />
      </Routes>
    </div>
  );
}
