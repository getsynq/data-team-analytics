import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function DataTeamSizeChart({ 
  companyData = [], 
  title, 
  subtitle,
  chartTitle = 'Data Roles as % of Company Size'
}) {
  if (!companyData || companyData.length === 0) {
    return null; // Or return a loading state/placeholder
  }

  const data = {
    labels: companyData.map(company => company.name),
    datasets: [
      {
        label: chartTitle,
        data: companyData.map(company => company.value),
        backgroundColor: 'rgba(100, 100, 100, 0.8)',
        borderRadius: 5,
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: chartTitle,
        font: { size: 20 }
      },
      tooltip: {
        enabled: true,
        position: 'average',
        mode: 'nearest',
        intersect: true,
        callbacks: {
          label: function(context) {
            return `${context.raw.toFixed(1)}%`;
          }
        }
      }
    },
    scales: {
      x: {
        ticks: {
          font: { size: 14, weight: 'normal' },
          callback: function(value) {
            return value + '%';
          },
          autoSkip: false,
        },
      },
      y: {
        ticks: {
          font: { size: 14, weight: 'normal' },
          autoSkip: false,
          maxRotation: 0,
        },
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: true
    }
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-bold text-center mb-4">{title}</h2>
      <p className="text-gray-600 text-center mb-6">{subtitle}</p>
      <div style={{ height: '800px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
} 