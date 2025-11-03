export default function Home() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-5xl font-bold text-blue-700">Find Your Ideal Career Path</h1>
      <p className="mt-4 text-lg text-gray-600">
        AI-powered insights to help you choose the right direction for your future.
      </p>
      <a
        href="/suggest"
        className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Get Started
      </a>
    </div>
  );
}
