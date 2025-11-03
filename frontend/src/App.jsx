import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SuggestCareer from "./pages/SuggestCareer";
import Learn from "./pages/Learn";
import About from "./pages/About";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/suggest" element={<SuggestCareer />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
