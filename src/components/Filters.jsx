import { formatMonth } from "../utils/formatMonth";

export default function Filters({ categories, months, setFilter }) {
  return (
    <div className="flex gap-4 flex-wrap">
      <select onChange={(e) => setFilter(f => ({...f, category: e.target.value}))}
        className="bg-slate-900 p-2 rounded-lg">
        <option value="">All Categories</option>
        {categories.map((c) => <option key={c}>{c}</option>)}
      </select>

      <select onChange={(e) => setFilter(f => ({...f, month: e.target.value}))}
        className="bg-slate-900 p-2 rounded-lg">
        <option value="">All Months</option>
        {months.map((m) => <option key={m} value={m}>
       {formatMonth(m)}
      </option>)}
      </select>
    </div>
  );
}
