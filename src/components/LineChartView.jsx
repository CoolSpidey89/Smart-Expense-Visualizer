import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { predictNextMonth } from "../utils/predictTrend";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export default function LineChartView({ monthlyTotals }) {
  const prediction = predictNextMonth(monthlyTotals);

  const labels = Object.keys(monthlyTotals);
  const actualData = Object.values(monthlyTotals);

  const forecastLabels = prediction ? [...labels, "Next"] : labels;

  const data = {
    labels: forecastLabels,
    datasets: [
      {
        label: "Actual Spending",
        data: actualData,
        borderColor: "#6366f1",
        backgroundColor: "#6366f1",
        tension: 0.4,
      },
      prediction && {
        label: "Forecast",
        data: [
          ...Array(actualData.length - 1).fill(null),
          actualData[actualData.length - 1],
          prediction,
        ],
        borderColor: "#f43f5e",
        borderDash: [6, 6],
        tension: 0.4,
      },
    ].filter(Boolean),
  };

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition-all duration-300">
      <Line data={data} />
    </div>
  );
}
