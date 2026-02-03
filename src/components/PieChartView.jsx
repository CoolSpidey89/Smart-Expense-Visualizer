import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChartView({ categoryTotals }) {
  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        label: "Spending by Category",
        data: Object.values(categoryTotals),
        backgroundColor: [
          "#6366f1",
          "#ec4899",
          "#14b8a6",
          "#f59e0b",
          "#ef4444",
        ],
      },
    ],
  };

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition-all duration-300">
      <Pie data={data} />
    </div>
  );
}
