export default function BudgetBox({ stats, budget, setBudget }) {
  const overspend = stats.total - budget;

  return (
    <div className="bg-rose-500/10 backdrop-blur-xl border border-rose-400/20 p-6 rounded-2xl hover:scale-[1.02] transition">
      <h2 className="text-xl font-semibold mb-3">Budget Planner</h2>

      <div className="flex items-center gap-3 mb-3">
        <span>Set Monthly Budget:</span>
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="bg-white/10 border border-white/20 rounded-lg px-3 py-1 w-32"
        />
      </div>

      <p>Budget: ₹{budget}</p>

      <p className={`mt-2 font-semibold ${overspend > 0 ? "text-red-400" : "text-green-400"}`}>
        {overspend > 0
          ? `Over budget by ₹${overspend.toFixed(2)}`
          : `Within budget by ₹${Math.abs(overspend).toFixed(2)}`}
      </p>
    </div>
  );
}

