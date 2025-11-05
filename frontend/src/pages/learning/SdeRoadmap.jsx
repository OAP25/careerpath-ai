export default function SdeRoadmap() {
  return (
    <div className="p-10 text-gray-200 bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-6">SDE Roadmap</h1>

      <div className="space-y-6 text-gray-300">

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">1) Master One Language</h2>
          <ul className="list-disc ml-6">
            <li>C++ or Java or JavaScript – one must be primary</li>
            <li>DSA implementation must be in the same language</li>
            <li>Standard Template Library / Java Collections / JS arrays mastery</li>
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
            <li>REST APIs, auth, caching</li>
            <li>Databases: SQL + NoSQL</li>
            <li>How real apps scale – read case studies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">4) Build 2–3 Solid Projects</h2>
          <ul className="list-disc ml-6">
            <li>Social Media clone / Cab Booking / Chat App</li>
            <li>JWT auth, file upload, deployment</li>
            <li>Good READMEs + documentation</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">5) Interview Prep</h2>
          <ul className="list-disc ml-6">
            <li>Mock interviews</li>
            <li>Resume targeted for SDE roles only</li>
            <li>Learn how to speak your logic clearly</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
