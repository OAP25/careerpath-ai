export default function DataAnalystRoadmap() {
  return (
    <div className="p-10 text-gray-200 bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Data Analyst Roadmap</h1>

      <div className="space-y-6 text-gray-300">

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">1) Core Foundations</h2>
          <ul className="list-disc ml-6">
            <li>Strong understanding of Excel / Google Sheets — formulas, pivot tables, charts</li>
            <li>Learn SQL thoroughly — SELECT, JOIN, GROUP BY, subqueries</li>
            <li>Understand relational database concepts (Primary Key, Normalization)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">2) Data Visualization</h2>
          <ul className="list-disc ml-6">
            <li>Master one BI tool: Power BI or Tableau</li>
            <li>Design dashboards that tell clear stories — KPIs, trends, comparisons</li>
            <li>Work with real datasets from Kaggle to practice</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">3) Programming & Data Cleaning</h2>
          <ul className="list-disc ml-6">
            <li>Learn Python (pandas, numpy, matplotlib, seaborn)</li>
            <li>Perform data wrangling, handling nulls, duplicates, and outliers</li>
            <li>Use Jupyter Notebooks for exploratory data analysis (EDA)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">4) Statistics & Analysis</h2>
          <ul className="list-disc ml-6">
            <li>Descriptive statistics: mean, median, mode, variance</li>
            <li>Hypothesis testing, correlation, regression basics</li>
            <li>Interpret real-world business problems using data-backed insights</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">5) Projects & Portfolio</h2>
          <ul className="list-disc ml-6">
            <li>Build 2–3 data dashboards with case studies</li>
            <li>Example: Sales Dashboard, HR Analytics, Customer Retention Analysis</li>
            <li>Host your portfolio on GitHub or a personal website</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">6) Advanced Concepts (Optional)</h2>
          <ul className="list-disc ml-6">
            <li>Learn basic machine learning for predictive analysis (scikit-learn)</li>
            <li>Understand data pipelines (ETL concepts)</li>
            <li>Cloud-based data tools: BigQuery, Snowflake, AWS Athena</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
