
import UploadSection from "./components/UploadSection";
import PieChartView from "./components/PieChartView";
import LineChartView from "./components/LineChartView";
import { calculateStats } from "./utils/calculateStats";
import SummaryCards from "./components/SummaryCards";
import InsightsBox from "./components/InsightsBox";
import Filters from "./components/Filters";
import ExpenseTable from "./components/ExpenseTable";
import BudgetBox from "./components/BudgetBox";
import ThemeToggle from "./components/ThemeToggle";
import ExportPDF from "./components/ExportPDF";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({ category: "", month: "" });

  const filteredData = data.filter((item) => {
  const date = new Date(item.Date);

  if (isNaN(date)) return false; // skip invalid rows

  const month = date.toISOString().slice(0, 7);

  return (
    (!filter.category || item.Category === filter.category) &&
    (!filter.month || month === filter.month)
  );
});

  const stats = filteredData.length ? calculateStats(filteredData) : null;

  const categories = [...new Set(data.map((d) => d.Category))];
  const months = [
  ...new Set(
    data
      .map((d) => {
        const date = new Date(d.Date);
        return isNaN(date) ? null : date.toISOString().slice(0, 7);
      })
      .filter(Boolean)
  ),
];

  const [budget, setBudget] = useState(10000);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-slate-950 dark:via-indigo-950 dark:to-slate-900 text-gray-900 dark:text-white p-8 space-y-8 transition-colors duration-500">
      <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold">Smart Expense Visualizer</h1>

      <div className="flex gap-3">
        <ThemeToggle />
        <ExportPDF />
      </div>
      </div>

      <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-10 rounded-2xl text-center space-y-6">

        <h1 className="text-4xl md:text-5xl font-bold">
          Turn Your Expense Data Into
          <span className="text-indigo-400"> Smart Financial Insights</span>
        </h1>

        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Upload a CSV of your expenses to instantly generate interactive charts,
          spending forecasts, anomaly detection, and intelligent financial insights.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="/Trial.csv"
            download
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-medium"
          >
            Download Sample CSV
          </a>
        </div>

      </div>


      <UploadSection setData={setData} />

      {stats && (
        <>
          <Filters
            categories={categories}
            months={months}
            setFilter={setFilter}
          />

          <SummaryCards stats={stats} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PieChartView categoryTotals={stats.categoryTotals} />
            <LineChartView monthlyTotals={stats.monthlyTotals} />
          </div>
        
          <InsightsBox stats={stats} />
          <BudgetBox stats={stats} budget={budget} setBudget={setBudget} />

          <ExpenseTable data={filteredData} />
        </>
      )}
    </div>
  );
}



