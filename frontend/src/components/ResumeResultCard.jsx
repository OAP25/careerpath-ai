export default function ResumeResultCard({ data }) {
  return (
    <div className="p-6 bg-gray-900 text-gray-200 rounded-xl border border-gray-700 leading-7 space-y-6">

      <div>
        <h3 className="text-xl font-bold mb-2 text-white">Career Fit Score</h3>
        <div className="w-full bg-gray-700 rounded-full h-4">
          <div
            className="bg-green-500 h-4 rounded-full"
            style={{ width: `${data.fit_score}%` }}
          ></div>
        </div>
        <p className="mt-1 text-sm text-gray-400">{data.fit_score}/100</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-1">Key Skills</h3>
        <ul className="text-gray-300 list-disc ml-5">
          {data.skills?.map((s) => <li key={s}>{s}</li>)}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-1">Strengths</h3>
        <ul className="text-gray-300 list-disc ml-5">
          {data.strengths?.map((s) => <li key={s}>{s}</li>)}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-1">Best Roles</h3>
        <ul className="text-gray-300 list-disc ml-5">
          {data.roles?.map((r) => <li key={r}>{r}</li>)}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-1">Skill Gaps</h3>
        <ul className="text-gray-300 list-disc ml-5">
          {data.gaps?.map((g) => <li key={g}>{g}</li>)}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-2">Recommendation</h3>
        <p className="text-gray-300 whitespace-pre-wrap">
          {data.recommendation}
        </p>
      </div>

    </div>
  );
}
