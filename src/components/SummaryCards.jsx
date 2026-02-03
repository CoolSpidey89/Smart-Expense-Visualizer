export default function SummaryCards({ stats }) {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl hover:shadow-indigo-500/20 hover:scale-[1.02] transition-all duration-300">
        <p className="text-slate-400">Total Spend</p>
        <h2 className="text-2xl font-bold">₹{stats.total.toFixed(2)}</h2>
      </div>

      <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl  hover:shadow-indigo-500/20 hover:scale-[1.02] transition-all duration-300">
        <p className="text-slate-400">Top Category</p>
        <h2 className="text-2xl font-bold">{stats.topCategory}</h2>
      </div>

      <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl  hover:shadow-indigo-500/20 hover:scale-[1.02] transition-all duration-300">
        <p className="text-slate-400">Months Tracked</p>
        <h2 className="text-2xl font-bold">
          {Object.keys(stats.monthlyTotals).length}
        </h2>
      </div>
    </div>
  );
}
