import { Link } from "react-router-dom";

export default function Home() {
  const cards = [
    { title: "Software Developer (SDE)", link: "/learn/sde", desc: "Master code + system design to build scalable products people use." },
    { title: "Data Analyst", link: "/learn/data-analyst", desc: "Turn raw data into dashboards, insights and business decisions." },
    { title: "Machine Learning / AI Engineer", link: "/learn/ml-ai", desc: "Build intelligent models & deploy real AI into real-world systems." },
    { title: "Cloud / DevOps Engineer", link: "/learn/cloud-devops", desc: "Automate infra, deploy at scale, & reduce downtime with cloud." },
  ];

  return (
    <div
      className="min-h-screen bg-black text-gray-200 flex flex-col items-center justify-center px-6 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/bg.jpg')" }}   // <- changed to local file
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-5xl font-bold text-white text-center leading-tight">
          Discover Your Best Career Path.
        </h1>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl text-center">
          AI that understands your skills, interests and resume — and guides you with personalised recommendations.
        </p>

        <div className="mt-8 flex gap-4">
          <Link to="/suggest" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold">
            Suggest Career
          </Link>
          <Link to="/upload-resume" className="px-6 py-3 bg-gray-700 hover:bg-gray-800 rounded-lg text-white font-semibold">
            Analyze Resume
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full px-6">
          {cards.map((c) => (
            <Link key={c.title} to={c.link}>
              <div className="border border-gray-700 p-6 rounded-xl bg-gray-900 hover:bg-gray-800 transition cursor-pointer min-h-[180px] flex flex-col justify-between">
                <h3 className="text-xl font-semibold mb-3 text-white">{c.title}</h3>
                <p className="text-gray-400 text-sm">{c.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
