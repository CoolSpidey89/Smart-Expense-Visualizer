
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

  // Load saved data on start
  useEffect(() => {
    const saved = localStorage.getItem("expenses");
    if (saved) setData(JSON.parse(saved));
  }, []);

// Save data when it changes
  useEffect(() => {
    if (data.length) {
      localStorage.setItem("expenses", JSON.stringify(data));
  }
  }, [data]);

  const [budget, setBudget] = useState(10000);

  useEffect(() => {
  const savedBudget = localStorage.getItem("budget");
  if (savedBudget) setBudget(Number(savedBudget));
  }, []);

  useEffect(() => {
  localStorage.setItem("budget", budget);
  }, [budget]);

  const filteredData = data.filter((item) => {
  const month = new Date(item.Date).toISOString().slice(0, 7);

  return (
    (!filter.category || item.Category === filter.category) &&
    (!filter.month || month === filter.month)
  );
 });

  const stats = filteredData.length ? calculateStats(filteredData) : null;

  const categories = [...new Set(data.map((d) => d.Category))];
  const months = [...new Set(data.map((d) =>
  new Date(d.Date).toISOString().slice(0, 7)
  ))];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-slate-950 dark:via-indigo-950 dark:to-slate-900 text-gray-900 dark:text-white p-8 space-y-8 transition-colors duration-500">
      <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold">Smart Expense Visualizer</h1>

      <div className="flex gap-3">
        <ThemeToggle />
        <ExportPDF />
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



