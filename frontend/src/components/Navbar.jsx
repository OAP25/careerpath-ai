import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">CareerPath AI</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-gray-200">Home</Link>
        <Link to="/suggest" className="hover:text-gray-200">Suggest</Link>
        <Link to="/learn" className="hover:text-gray-200">Learn</Link>
        <Link to="/about" className="hover:text-gray-200">About</Link>
      </div>
    </nav>
  );
}
