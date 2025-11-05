export default function ResultCard({ data }) {
  if (!data) return null;

  return (
    <div className="p-6 mt-6 bg-white border rounded shadow space-y-4">
      <h2 className="text-2xl font-bold text-blue-700">{data.career}</h2>

      <p className="font-semibold">Career Fit Score: {data.fit_score}/100</p>

      <div>
        <h3 className="font-semibold">Skills:</h3>
        <ul className="list-disc ml-6">
          {data.skills.map((s,i)=> <li key={i}>{s}</li>)}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold">Strengths:</h3>
        <ul className="list-disc ml-6">
          {data.strengths.map((s,i)=> <li key={i}>{s}</li>)}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold">Roles:</h3>
        <ul className="list-disc ml-6">
          {data.roles.map((s,i)=> <li key={i}>{s}</li>)}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold">Gaps:</h3>
        <ul className="list-disc ml-6">
          {data.gaps.map((s,i)=> <li key={i}>{s}</li>)}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold">Recommendation:</h3>
        <p className="whitespace-pre-line">{data.recommendation}</p>
      </div>
    </div>
  );
}
