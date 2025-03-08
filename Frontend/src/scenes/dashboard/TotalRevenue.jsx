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
import { useTheme } from "@mui/material";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const TotalRevenue = () => {
  const theme = useTheme();
  const backgroundColor = theme.palette.background.default; // dark or light background
  const textColor = theme.palette.secondary[200]; // general text color
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "2024",
        data: [
          20000, 25000, 30000, 20000, 28000, 38000, 32000, 31000, 29000, 26000,
          22000, 27000,
        ],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: "#3b82f6",
      },
      {
        label: "2025",
        data: [
          22000, 27000, 31000, 25000, 30000, 35000, 34000, 33000, 32000, 29000,
          26000, 31000,
        ],
        borderColor: "#facc15",
        backgroundColor: "rgba(250, 204, 21, 0.2)",
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: "#facc15",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true },
      tooltip: { enabled: true },
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: "#1f2937" } },
    },
  };

  return (
    <div
      className="bg-gray-800 p-4 rounded-lg shadow-md w-full h-64"
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      <h2 className="text-2xl font-semibold mb-2">Total Revenue</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default TotalRevenue;
