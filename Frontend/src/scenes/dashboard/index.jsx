import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useTheme } from "@mui/material";
import Rate from "./Rate";
import Stats from "./Stats";
import PopularUsedSpots from "./PopularSpots";
import TotalRevenue from "./TotalRevenue";
import ParkingDuration from "./ParkingDurations";

// ChartJS registration
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const theme = useTheme();
  const backgroundColor = theme.palette.background.default; // dark or light background
  const textColor = theme.palette.secondary[200]; // general text color
  return (
    <div
      className="min-h-screen p-4 space-y-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
      style={{ backgroundColor: theme.palette.background.alt }}
    >
      <Stats />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div
          className="dark:bg-gray-800 rounded-lg shadow-md flex flex-col justify-between min-h-[150px]"
          style={{
            backgroundColor: backgroundColor,
            color: textColor,
          }}
        >
          <Rate />
        </div>
        <div
          className="dark:bg-gray-800 rounded-lg shadow-md flex flex-col justify-between min-h-[150px]"
          style={{
            backgroundColor: backgroundColor,
            color: textColor,
          }}
        >
          <PopularUsedSpots />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div
          className="dark:bg-gray-800 rounded-lg shadow-md flex flex-col justify-between min-h-[150px] col-span-3"
          style={{
            backgroundColor: backgroundColor,
            color: textColor,
          }}
        >
          <TotalRevenue />
        </div>
        <div
          className="dark:bg-gray-800 rounded-lg shadow-md flex flex-col justify-between min-h-[150px] col-span-1"
          style={{
            backgroundColor: backgroundColor,
            color: textColor,
          }}
        >
          <ParkingDuration />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
