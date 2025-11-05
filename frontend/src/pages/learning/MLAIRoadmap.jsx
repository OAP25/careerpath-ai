import { Link } from "react-router-dom";

export default function MLAIRoadmap() {
  return (
    <div
      className="min-h-screen bg-black text-gray-200 px-10 py-14 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative z-10 max-w-4xl mx-auto">

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">ML / AI Engineer Roadmap</h1>
          <Link to="/" className="text-gray-300 hover:text-white text-sm underline">
            Back to Home
          </Link>
        </div>

        <div className="space-y-6 text-gray-300">

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">1) Prerequisites</h2>
            <ul className="list-disc ml-6">
              <li>Math basics: Linear Algebra + Probability + Calculus</li>
              <li>Python fundamentals</li>
              <li>Numpy + Pandas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">2) Feature Engineering</h2>
            <ul className="list-disc ml-6">
              <li>Handle missing values + outliers</li>
              <li>Scaling + Encoding</li>
              <li>EDA deep practice</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">3) Machine Learning</h2>
            <ul className="list-disc ml-6">
              <li>Regression, Classification, Clustering</li>
              <li>Trees, Random Forest, XGBoost</li>
              <li>Model tuning + metrics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">4) Deep Learning</h2>
            <ul className="list-disc ml-6">
              <li>Neural Networks basics</li>
              <li>CNN (Vision)</li>
              <li>Transformer architectures (NLP)</li>
              <li>PyTorch or TensorFlow</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">5) Model Deployment</h2>
            <ul className="list-disc ml-6">
              <li>FastAPI / Flask</li>
              <li>Monitoring + pipelines (MLOps)</li>
              <li>Cloud ML (GCP / AWS / Azure)</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
