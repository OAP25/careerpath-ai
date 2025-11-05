import { Link } from "react-router-dom";

export default function SdeRoadmap() {
  return (
    <div
      className="min-h-screen bg-black text-gray-200 px-10 py-14 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative z-10 max-w-4xl mx-auto">

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">SDE Roadmap</h1>
          <Link to="/" className="text-gray-300 hover:text-white text-sm underline">
            Back to Home
          </Link>
        </div>

        <div className="space-y-6 text-gray-300">

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">1) Master One Language</h2>
            <ul className="list-disc ml-6">
              <li>Pick one: C++ / Java / JavaScript</li>
              <li>Do DSA in that one language only</li>
              <li>Library mastery is crucial (STL / Collections)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">2) DSA Practice</h2>
            <ul className="list-disc ml-6">
              <li>Arrays, Strings, Hashing</li>
              <li>Stacks, Queues, Linked Lists</li>
              <li>Trees, Graphs, DP</li>
              <li>Minimum 300 structured questions before placement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">3) System Design Basics</h2>
            <ul className="list-disc ml-6">
              <li>REST APIs, authentication, caching</li>
              <li>Learn SQL + NoSQL</li>
              <li>Understand how real apps scale</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">4) Build 2–3 Good Projects</h2>
            <ul className="list-disc ml-6">
              <li>Examples: Social Media, Cab Booking, Chat App</li>
              <li>JWT auth, file upload, deployment</li>
              <li>Must have clean README + documentation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">5) Interview Prep</h2>
            <ul className="list-disc ml-6">
              <li>Mock interviews</li>
              <li>Resume aligned with SDE roles</li>
              <li>Practice explaining logic verbally</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
