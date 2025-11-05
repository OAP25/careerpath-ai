export default function MLAIRoadmap() {
  return (
    <div className="p-10 text-gray-200 bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Machine Learning / AI Roadmap</h1>

      <div className="space-y-6 text-gray-300">

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">1) Prerequisites</h2>
          <ul className="list-disc ml-6">
            <li>Mathematics: Linear Algebra, Probability, Calculus (Basics enough)</li>
            <li>Python fundamentals — loops, functions, OOP</li>
            <li>Numpy, Pandas for data manipulation</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">2) Data Preprocessing</h2>
          <ul className="list-disc ml-6">
            <li>Handling missing values, outliers, feature scaling</li>
            <li>Encoding categorical features</li>
            <li>Feature engineering</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">3) Machine Learning Algorithms</h2>
          <ul className="list-disc ml-6">
            <li>Regression, Classification, Clustering</li>
            <li>Decision Trees, Random Forest, XGBoost</li>
            <li>Model evaluation metrics (accuracy, F1, ROC-AUC)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">4) Deep Learning</h2>
          <ul className="list-disc ml-6">
            <li>Neural Networks basics (Ann)</li>
            <li>Computer Vision (CNN)</li>
            <li>NLP (RNN, Transformers)</li>
            <li>Frameworks: PyTorch / TensorFlow</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">5) AI Engineering</h2>
          <ul className="list-disc ml-6">
            <li>Deploying models (FastAPI, Flask)</li>
            <li>Pipelines, model monitoring, MLOps</li>
            <li>Cloud ML: GCP VertexAI, AWS Sagemaker, Azure ML</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">6) Portfolio & Real Projects</h2>
          <ul className="list-disc ml-6">
            <li>Build at least 3 end-to-end projects</li>
            <li>Example: Sentiment classifier, price prediction, object detection</li>
            <li>Host on GitHub with README + demo</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
