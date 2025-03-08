import { useTheme } from "@mui/material";
import { Line } from "react-chartjs-2";

const Rate = () => {
  const theme = useTheme();
  const backgroundColor = theme.palette.background.default; // dark or light background
  const textColor = theme.palette.secondary[200]; // general text color
  const data = {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        label: "Parking Spots",
        data: [30, 45, 40, 35, 28, 32, 38],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        pointBorderColor: "#fff",
        pointBackgroundColor: "#3b82f6",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#3b82f6",
        tension: 0.4, // smooth line
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // No legend in the design
      },
      tooltip: {
        backgroundColor: "#1f2937", // Dark tooltip background
        titleColor: "#fff",
        bodyColor: "#fff",
        padding: 10,
        displayColors: false,
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.raw} Parking Spots`,
          title: () => "Oct 18th, 2023",
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#9ca3af" }, // Light gray text for days
        grid: { display: false },
      },
      y: {
        display: false, // No y-axis in the design
      },
    },
  };

  return (
    <div
      className="bg-gray-800 rounded-lg p-5 h-[150px]"
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-2xl font-semibold">Rate of Parking Spots</h3>
          <p className="text-sm text-gray-400">
            It illustrate the number of booked spots per day
          </p>
        </div>
        <button className="flex items-center space-x-1 text-blue-400 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h2M12 12v6m-3-3h6"
            />
          </svg>
          <span>Save Report</span>
        </button>
      </div>
      {/* Chart */}
      <div className="h-48">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Rate;
