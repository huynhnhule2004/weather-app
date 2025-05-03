import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

const ChartDisplay = ({ forecast }) => {
  const data = {
    labels: forecast.map(item => item.date.split(' ')[0]),
    datasets: [
      {
        label: 'Nhiệt độ (°)',
        data: forecast.map(item => item.temp),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="mt-6">
      <h3 className="font-semibold mb-2">Dự báo nhiệt độ 5 ngày</h3>
      <Line data={data} />
    </div>
  );
};

export default ChartDisplay;