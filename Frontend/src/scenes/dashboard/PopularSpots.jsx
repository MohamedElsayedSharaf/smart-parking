import { useTheme } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PopularUsedSpots = () => {
  const theme = useTheme();
  const backgroundColor = theme.palette.background.default; // dark or light background
  const textColor = theme.palette.secondary[200]; // general text color
  // Mock data for usage chart
  const data = {
    labels: ["A04", "A05", "A08", "A10", "A12"],
    datasets: [
      {
        label: "Usage Count",
        data: [12, 9, 7, 14, 6], // example usage counts
        backgroundColor: "rgba(59, 130, 246, 0.6)", // Tailwind's blue-500 (semi-transparent)
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Most Frequently Used Spots",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Mock parking spot statuses
  const spots = [
    { id: "A04", used: true },
    { id: "A05", used: false },
    { id: "A08", used: true },
    { id: "A10", used: true },
    { id: "A12", used: false },
    { id: "A13", used: false },
    { id: "A14", used: false },
    // add more spots if you want
  ];

  return (
    <div
      className="p-4 bg-gray-800 text-white rounded-md"
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      <h2 className="text-2xl font-semibold mb-4">Popular Used Spots</h2>
      <div
        className="flex flex-col md:flex-row gap-6"
        style={{
          backgroundColor: backgroundColor,
          color: textColor,
        }}
      >
        <div
          className="w-full md:w-1/2 bg-gray-900 p-4 rounded-md"
          style={{
            backgroundColor: backgroundColor,
            color: textColor,
          }}
        >
          <Bar data={data} options={options} />
        </div>
        <div
          className="w-full md:w-1/2 bg-gray-900 p-4 rounded-md"
          style={{
            backgroundColor: backgroundColor,
            color: textColor,
          }}
        >
          <div className="mb-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="inline-block w-4 h-4 bg-blue-500 rounded-full"></span>
              <span className="text-sm">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-4 h-4 bg-gray-400 rounded-full"></span>
              <span className="text-sm">Used</span>
            </div>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            style={{
              backgroundColor: backgroundColor,
              color: textColor,
            }}
          >
            {spots.map((spot) => (
              <div
                key={spot.id}
                className={`flex items-center justify-between p-2 rounded-md
                  ${spot.used ? "bg-gray-700" : "bg-gray-600"}`}
                style={{
                  backgroundColor: backgroundColor,
                  color: textColor,
                }}
              >
                <span className="font-semibold">{spot.id}</span>
                <div
                  className={`w-8 h-4 rounded ${
                    spot.used ? "bg-gray-400" : "bg-blue-500"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularUsedSpots;
