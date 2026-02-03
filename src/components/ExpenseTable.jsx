export default function ExpenseTable({ data }) {
  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl overflow-auto max-h-96 hover:scale-[1.02] transition-all duration-300">
      <table className="w-full text-left">
        <thead className="text-indigo-300 border-b border-white/10">
          <tr>
            <th>Date</th><th>Category</th><th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i} className="border-b border-slate-800">
              <td>{item.Date}</td>
              <td>{item.Category}</td>
              <td>₹{item.Amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
