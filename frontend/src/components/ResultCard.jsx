export default function ResultCard({ data }) {
  if (!data) return null;

  // normalize keys to lowercase to avoid random casing issues
  const normalized = {};
  Object.keys(data).forEach(k => { normalized[k.toLowerCase()] = data[k]; });

  const {
    skills = [],
    strengths = [],
    roles = [],
    gaps = [],
    recommendation = "",
    fit_score = null
  } = normalized;

  return (
    <div className="bg-gray-900 border border-gray-700 p-6 rounded-xl text-gray-200 shadow-xl">

      {typeof fit_score === "number" && (
        <div className="mb-6">
          <p className="text-gray-300 mb-2 font-semibold">Career Fit Score</p>
          <div className="w-full bg-gray-800 rounded-full h-4">
            <div
              className="bg-green-500 h-4 rounded-full"
              style={{ width: `${Math.max(0, Math.min(100, fit_score))}%` }}
            />
          </div>
          <p className="mt-1 text-sm text-gray-400">{fit_score}/100</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills?.length > 0 && (
          <div>
            <h3 className="font-semibold text-white mb-2">Key Skills</h3>
            <ul className="list-disc ml-5 text-gray-300 space-y-1">
              {skills.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
        )}

        {strengths?.length > 0 && (
          <div>
            <h3 className="font-semibold text-white mb-2">Strengths</h3>
            <ul className="list-disc ml-5 text-gray-300 space-y-1">
              {strengths.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
        )}

        {roles?.length > 0 && (
          <div>
            <h3 className="font-semibold text-white mb-2">Best Roles</h3>
            <ul className="list-disc ml-5 text-gray-300 space-y-1">
              {roles.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </div>
        )}

        {gaps?.length > 0 && (
          <div>
            <h3 className="font-semibold text-white mb-2">Skill Gaps</h3>
            <ul className="list-disc ml-5 text-gray-300 space-y-1">
              {gaps.map((g, i) => <li key={i}>{g}</li>)}
            </ul>
          </div>
        )}
      </div>

      {recommendation && (
        <div className="mt-6">
          <h3 className="font-semibold text-white mb-2">Recommendation</h3>
          <p className="text-gray-300 leading-6 whitespace-pre-wrap">{recommendation}</p>
        </div>
      )}
    </div>
  );
}
