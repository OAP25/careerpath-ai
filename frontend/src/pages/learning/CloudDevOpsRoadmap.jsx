import { Link } from "react-router-dom";

export default function CloudDevOpsRoadmap() {
  return (
    <div
      className="min-h-screen bg-black text-gray-200 px-10 py-14 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative z-10 max-w-4xl mx-auto">

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">Cloud / DevOps Roadmap</h1>
          <Link to="/" className="text-gray-300 hover:text-white text-sm underline">
            Back to Home
          </Link>
        </div>

        <div className="space-y-6 text-gray-300">

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">1) Core Skills</h2>
            <ul className="list-disc ml-6">
              <li>Linux + Networking Basics</li>
              <li>Git + GitHub</li>
              <li>Bash or Python scripting</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">2) Cloud Platforms</h2>
            <ul className="list-disc ml-6">
              <li>AWS (EC2, S3, IAM, VPC)</li>
              <li>Azure (VM, VNets, Blob Storage)</li>
              <li>GCP (Compute + Cloud Storage)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">3) DevOps Essentials</h2>
            <ul className="list-disc ml-6">
              <li>Docker + Kubernetes</li>
              <li>Terraform</li>
              <li>CI/CD Pipelines</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">4) Monitoring</h2>
            <ul className="list-disc ml-6">
              <li>Prometheus + Grafana</li>
              <li>OpenTelemetry</li>
              <li>CloudWatch / Azure Monitor / GCP Metrics</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
