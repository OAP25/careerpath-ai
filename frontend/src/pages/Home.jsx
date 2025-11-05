import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-200 flex flex-col items-center justify-center px-6">

      {/* HERO SECTION */}
      <h1 className="text-5xl font-bold text-white text-center leading-tight">
        Discover Your Best Career Path.
      </h1>
      <p className="mt-4 text-lg text-gray-400 max-w-2xl text-center">
        AI that understands your skills, interests and resume — and guides you towards the highest potential career path with personalized recommendations.
      </p>

      <div className="mt-8 flex gap-4">
        <Link
          to="/suggest"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold"
        >
          Suggest Career
        </Link>
        <Link
          to="/upload-resume"
          className="px-6 py-3 bg-gray-700 hover:bg-gray-800 rounded-lg text-white font-semibold"
        >
          Analyze Resume
        </Link>
      </div>

      {/* FEATURES */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full px-6">
        {[
          "Software Developer (SDE)",
          "Data Analyst",
          "Machine Learning / AI Engineer",
          "Cloud / DevOps Engineer",
        ].map((title) => (
          <div
            key={title}
            className="border border-gray-700 p-6 rounded-xl bg-gray-900 hover:bg-gray-800 transition"
          >
            <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
            <p className="text-gray-400 text-sm">
              Roadmaps, skills, tools and resources curated for this exact track.
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}
