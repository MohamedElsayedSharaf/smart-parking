import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { useTheme } from '@mui/material';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ParkingDuration = () => {
  const theme = useTheme();
  const backgroundColor = theme.palette.background.default; // dark or light background
  const textColor = theme.palette.secondary[200]; // general text color
  const data = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Hours',
        data: [6, 8, 4, 7, 5, 3, 2],
        backgroundColor: '#3b82f6',
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: '#1f2937', beginAtZero: true } },
    },
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md w-full h-64"  style={{
      backgroundColor: backgroundColor, color: textColor
    }}>
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-semibold">Parking Duration</h2>
        <button className="text-blue-400 text-sm">Weekly ▼</button>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ParkingDuration;