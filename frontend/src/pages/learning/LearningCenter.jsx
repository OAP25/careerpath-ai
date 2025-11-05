import { Link } from "react-router-dom";

export default function LearningCenter() {
  return (
    <div className="p-10 max-w-5xl mx-auto text-white">

      <h1 className="text-4xl font-bold mb-8 text-center">
        Learning Paths
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Card 1 */}
        <Link
          to="/learn/sde"
          className="p-6 rounded-xl bg-gradient-to-br from-black to-gray-800 border border-gray-700 hover:scale-[1.02] transition"
        >
          <h2 className="text-2xl font-semibold mb-2">Software Development Engineer</h2>
          <p className="text-gray-300">
            Learn how to become a high performance SDE. Covers DSA, System Design,
            Backend, Projects, Interview Mindset and Company Targeting Strategy.
          </p>
        </Link>

        {/* Card 2 */}
        <Link
          to="/learn/data-analyst"
          className="p-6 rounded-xl bg-gradient-to-br from-black to-gray-800 border border-gray-700 hover:scale-[1.02] transition"
        >
          <h2 className="text-2xl font-semibold mb-2">Data Analyst</h2>
          <p className="text-gray-300">
            Excel at SQL, Excel/Sheets, PowerBI/Tableau, Statistics, Data Cleaning
            and Practical Reporting Skills that unlock top tier analyst roles.
          </p>
        </Link>

        {/* Card 3 */}
        <Link
          to="/learn/ml-ai"
          className="p-6 rounded-xl bg-gradient-to-br from-black to-gray-800 border border-gray-700 hover:scale-[1.02] transition"
        >
          <h2 className="text-2xl font-semibold mb-2">Machine Learning / AI</h2>
          <p className="text-gray-300">
            Build strong ML fundamentals. From Linear Algebra to DL, TensorFlow/PyTorch,
            real AI projects and high-level reasoning for AI interviews.
          </p>
        </Link>

        {/* Card 4 */}
        <Link
          to="/learn/cloud-devops"
          className="p-6 rounded-xl bg-gradient-to-br from-black to-gray-800 border border-gray-700 hover:scale-[1.02] transition"
        >
          <h2 className="text-2xl font-semibold mb-2">Cloud / DevOps</h2>
          <p className="text-gray-300">
            AWS, Docker, CI/CD, Monitoring, Infra as Code and Deployments.
            Real DevOps skillset that moves beyond basic coding.
          </p>
        </Link>

      </div>
    </div>
  );
}
