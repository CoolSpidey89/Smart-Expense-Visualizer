import { predictNextMonth } from "../utils/predictTrend";
import { detectAnomalies } from "../utils/detectAnomalies";

export default function InsightsBox({ stats }) {
  const highestMonth = Object.keys(stats.monthlyTotals).reduce((a, b) =>
    stats.monthlyTotals[a] > stats.monthlyTotals[b] ? a : b
  );

  const prediction = predictNextMonth(stats.monthlyTotals);
  const anomalies = detectAnomalies(stats.monthlyTotals);

  return (
    <div className="bg-indigo-500/10 backdrop-blur-xl border border-indigo-400/20 p-6 rounded-2xl hover:scale-[1.02] transition-all duration-300">
      <h2 className="text-xl font-semibold mb-3">Smart Insights</h2>

      <ul className="space-y-2 text-slate-300">
        <li>💡 {stats.topCategory} is your biggest expense category</li>
        <li>📈 Highest spending month: {highestMonth}</li>
        <li>
          💰 Average monthly spend: ₹
          {(stats.total / Object.keys(stats.monthlyTotals).length).toFixed(2)}
        </li>

        {prediction && (
          <li className="text-indigo-300">
            🔮 Forecast next month spend: ₹{prediction.toFixed(2)}
          </li>
        )}

        {anomalies.length > 0 && (
          <>
            <li className="text-red-400 font-semibold mt-2">
              ⚠ Spending Anomalies Detected:
            </li>
            {anomalies.map((a, i) => (
              <li key={i} className="text-red-300">
                • {a.month} unusually high at ₹{a.value}
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
}

