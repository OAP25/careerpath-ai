export default function CloudDevOpsRoadmap() {
  return (
    <div className="p-10 text-gray-200 bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Cloud / DevOps Engineer Roadmap</h1>

      <div className="space-y-6 text-gray-300">

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">1) Prerequisites</h2>
          <ul className="list-disc ml-6">
            <li>Linux Fundamentals (Ubuntu recommended)</li>
            <li>Networking Basics (DNS, NAT, Subnetting, VPN)</li>
            <li>Git & GitHub</li>
            <li>Basic Scripting — Python or Bash</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">2) Core Cloud Platform Skills</h2>
          <ul className="list-disc ml-6">
            <li>AWS — EC2, S3, IAM, VPC</li>
            <li>Azure — VM, Blob Storage, VNets</li>
            <li>GCP — Compute Engine, Cloud Storage</li>
            <li>Load Balancers, Auto Scaling, Security Groups</li>
            <li>Monitoring + Cost Optimization</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">3) DevOps Core Skills</h2>
          <ul className="list-disc ml-6">
            <li>CI/CD Pipelines</li>
            <li>Docker — Build, Tag, Push Images</li>
            <li>Kubernetes — Deployments, Services, Ingress</li>
            <li>Terraform — IaC (Infrastructure as Code)</li>
            <li>Ansible — Configuration Management</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">4) Monitoring / Observability</h2>
          <ul className="list-disc ml-6">
            <li>Prometheus + Grafana</li>
            <li>OpenTelemetry</li>
            <li>CloudWatch (AWS) / Azure Monitor / GCP Monitoring</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">5) Certifications to Aim For</h2>
          <ul className="list-disc ml-6">
            <li>AWS Cloud Practitioner → AWS Solutions Architect Associate</li>
            <li>Azure AZ-900 → AZ-104</li>
            <li>CKA — Certified Kubernetes Administrator</li>
            <li>AWS DevOps Engineer Professional</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
