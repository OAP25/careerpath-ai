import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-gray-200 flex items-center justify-center px-6 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-white mb-6">About CareerPath AI</h1>

        <p className="text-gray-300 text-lg leading-7">
          CareerPath AI is built to help students and early-career engineers figure out the right direction
          in tech. Instead of random guesswork or following trends blindly, this platform uses AI to analyze 
          your skills, interests, and even your resume — to provide logical, personalized career guidance.
          Whether you aim for SDE, Data Analyst, AI/ML, or Cloud/DevOps, this tool points you toward what 
          actually matches your strengths.
        </p>

        <p className="text-gray-300 text-lg mt-6 leading-7">
          This project showcases deep backend, frontend, AI integration, and system design thinking — built
          entirely in MERN + Gemini AI. No login barriers. No paywall. Just real career direction.
        </p>

        <div className="mt-10">
          <Link
            to="/"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
