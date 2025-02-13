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

const companyData = [
  { name: 'Revolut', analysts: 71.3, dataScientists: 15.5, dataEngineers: 3.9, analyticsBI: 4.9, dataPlatform: 0.7, dataGovernance: 0.7, machineLearning: 2.8 },
  { name: 'Wise', analysts: 61.5, dataScientists: 15.4, dataEngineers: 2.6, analyticsBI: 13.7, dataPlatform: 1.7, dataGovernance: 0, machineLearning: 5.1 },
  { name: 'Monday.com', analysts: 52.8, dataScientists: 15.1, dataEngineers: 18.9, analyticsBI: 13.2, dataPlatform: 0, dataGovernance: 0, machineLearning: 0 },
  { name: 'Brex', analysts: 26.7, dataScientists: 40.0, dataEngineers: 16.7, analyticsBI: 10.0, dataPlatform: 0, dataGovernance: 0, machineLearning: 6.7 },
  { name: 'JetBlue', analysts: 44.6, dataScientists: 20.5, dataEngineers: 16.9, analyticsBI: 13.3, dataPlatform: 0, dataGovernance: 2.4, machineLearning: 2.4 },
  { name: 'Stripe', analysts: 18.7, dataScientists: 44.8, dataEngineers: 11.0, analyticsBI: 1.3, dataPlatform: 2.3, dataGovernance: 0, machineLearning: 21.9 },
  { name: 'Siemens', analysts: 33.0, dataScientists: 23.9, dataEngineers: 18.8, analyticsBI: 14.6, dataPlatform: 1.1, dataGovernance: 0.7, machineLearning: 7.9 },
  { name: 'Robinhood', analysts: 6.3, dataScientists: 47.9, dataEngineers: 17.7, analyticsBI: 1.0, dataPlatform: 4.2, dataGovernance: 1.0, machineLearning: 21.9 },
  { name: 'Github', analysts: 27.3, dataScientists: 25.8, dataEngineers: 14.4, analyticsBI: 4.5, dataPlatform: 0.8, dataGovernance: 0, machineLearning: 27.3 },
  { name: 'Coinbase', analysts: 16.2, dataScientists: 35.9, dataEngineers: 12.0, analyticsBI: 3.4, dataPlatform: 7.7, dataGovernance: 0, machineLearning: 24.8 },
  { name: 'Faire', analysts: 1.9, dataScientists: 48.1, dataEngineers: 7.4, analyticsBI: 13.0, dataPlatform: 1.9, dataGovernance: 0, machineLearning: 27.8 },
  { name: 'Chainalysis', analysts: 23.1, dataScientists: 26.9, dataEngineers: 38.5, analyticsBI: 3.8, dataPlatform: 0, dataGovernance: 0, machineLearning: 7.7 },
  { name: 'Notion', analysts: 2.8, dataScientists: 47.2, dataEngineers: 22.2, analyticsBI: 5.6, dataPlatform: 5.6, dataGovernance: 0, machineLearning: 16.7 },
  { name: 'Nordea', analysts: 33.3, dataScientists: 15.8, dataEngineers: 12.5, analyticsBI: 19.2, dataPlatform: 1.3, dataGovernance: 15.8, machineLearning: 2.0 },
  { name: 'PluralSight', analysts: 27.4, dataScientists: 20.5, dataEngineers: 20.5, analyticsBI: 15.1, dataPlatform: 2.7, dataGovernance: 1.4, machineLearning: 12.3 },
  { name: 'Podium', analysts: 33.3, dataScientists: 13.3, dataEngineers: 33.3, analyticsBI: 20.0, dataPlatform: 0, dataGovernance: 0, machineLearning: 0 },
  { name: 'N26', analysts: 32.8, dataScientists: 13.8, dataEngineers: 27.6, analyticsBI: 15.5, dataPlatform: 0, dataGovernance: 1.7, machineLearning: 8.6 },
  { name: 'Monzo', analysts: 11.6, dataScientists: 34.7, dataEngineers: 3.2, analyticsBI: 33.7, dataPlatform: 2.1, dataGovernance: 0, machineLearning: 14.7 },
  { name: 'Tinder', analysts: 3.2, dataScientists: 41.9, dataEngineers: 6.5, analyticsBI: 1.6, dataPlatform: 3.2, dataGovernance: 0, machineLearning: 43.5 },
  { name: 'Gitlab', analysts: 31.1, dataScientists: 13.3, dataEngineers: 22.2, analyticsBI: 17.8, dataPlatform: 2.2, dataGovernance: 4.4, machineLearning: 8.9 },
  { name: 'Typeform', analysts: 18.8, dataScientists: 25.0, dataEngineers: 25.0, analyticsBI: 18.8, dataPlatform: 6.3, dataGovernance: 0, machineLearning: 6.3 },
  { name: 'Squarespace', analysts: 27.0, dataScientists: 16.2, dataEngineers: 24.3, analyticsBI: 16.2, dataPlatform: 5.4, dataGovernance: 0, machineLearning: 10.8 },
  { name: 'Miro', analysts: 24.6, dataScientists: 17.4, dataEngineers: 30.4, analyticsBI: 15.9, dataPlatform: 4.3, dataGovernance: 0, machineLearning: 7.2 },
  { name: 'Deliveroo', analysts: 11.4, dataScientists: 30.2, dataEngineers: 5.0, analyticsBI: 26.2, dataPlatform: 2.0, dataGovernance: 1.5, machineLearning: 23.8 },
  { name: 'Checkout.com', analysts: 19.1, dataScientists: 21.3, dataEngineers: 14.9, analyticsBI: 36.2, dataPlatform: 4.3, dataGovernance: 2.1, machineLearning: 2.1 },
  { name: 'Instacart', analysts: 11.7, dataScientists: 25.7, dataEngineers: 6.3, analyticsBI: 6.3, dataPlatform: 1.9, dataGovernance: 0, machineLearning: 47.6 },
  { name: 'ClickUp', analysts: 35.0, dataScientists: 0, dataEngineers: 30.0, analyticsBI: 15.0, dataPlatform: 20.0, dataGovernance: 0, machineLearning: 0 },
  { name: 'Skyscanner', analysts: 1.8, dataScientists: 30.9, dataEngineers: 60.0, analyticsBI: 0, dataPlatform: 1.8, dataGovernance: 0, machineLearning: 5.5 },
  { name: 'Lacework', analysts: 0, dataScientists: 31.3, dataEngineers: 31.3, analyticsBI: 12.5, dataPlatform: 0, dataGovernance: 0, machineLearning: 25.0 },
  { name: 'Rippling', analysts: 9.1, dataScientists: 21.2, dataEngineers: 33.3, analyticsBI: 0, dataPlatform: 21.2, dataGovernance: 0, machineLearning: 15.2 },
  { name: 'Zoom', analysts: 19.9, dataScientists: 9.9, dataEngineers: 37.6, analyticsBI: 2.8, dataPlatform: 3.9, dataGovernance: 2.2, machineLearning: 23.8 },
  { name: 'Personio', analysts: 16.1, dataScientists: 12.9, dataEngineers: 6.5, analyticsBI: 35.5, dataPlatform: 19.4, dataGovernance: 0, machineLearning: 9.7 },
  { name: 'LEGO', analysts: 14.0, dataScientists: 14.5, dataEngineers: 24.0, analyticsBI: 33.0, dataPlatform: 7.3, dataGovernance: 2.8, machineLearning: 3.9 },
  { name: 'Bumble', analysts: 16.3, dataScientists: 11.6, dataEngineers: 32.6, analyticsBI: 7.0, dataPlatform: 2.3, dataGovernance: 0, machineLearning: 30.2 },
  { name: 'Wrike', analysts: 13.8, dataScientists: 13.8, dataEngineers: 41.4, analyticsBI: 17.2, dataPlatform: 0, dataGovernance: 0, machineLearning: 13.8 },
  { name: 'Nubank', analysts: 6.2, dataScientists: 19.3, dataEngineers: 4.8, analyticsBI: 44.4, dataPlatform: 1.5, dataGovernance: 1.9, machineLearning: 21.8 },
  { name: 'Ramp', analysts: 13.6, dataScientists: 9.1, dataEngineers: 4.5, analyticsBI: 72.7, dataPlatform: 0, dataGovernance: 0, machineLearning: 0 },
  { name: 'Zendesk', analysts: 14.6, dataScientists: 6.3, dataEngineers: 29.2, analyticsBI: 2.1, dataPlatform: 1.4, dataGovernance: 3.5, machineLearning: 43.1 }
];

const data = {
  labels: companyData.map(company => company.name),
  datasets: [
    { label: 'Analysts', data: companyData.map(company => company.analysts), backgroundColor: '#FFD700' },
    { label: 'Data Scientists', data: companyData.map(company => company.dataScientists), backgroundColor: '#FFEA00' },
    { label: 'Data Engineers', data: companyData.map(company => company.dataEngineers), backgroundColor: '#87CEFA' },
    { label: 'Analytics Engineer & BI', data: companyData.map(company => company.analyticsBI), backgroundColor: '#6495ED' },
    { label: 'Data Platform', data: companyData.map(company => company.dataPlatform), backgroundColor: '#ADD8E6' },
    { label: 'Data Governance', data: companyData.map(company => company.dataGovernance), backgroundColor: '#D8BFD8' },
    { label: 'Machine Learning', data: companyData.map(company => company.machineLearning), backgroundColor: '#FFB6C1' }
  ]
};

const options = {
  indexAxis: 'y',
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'bottom' },
    title: {
      display: true,
      text: 'Distribution of Roles by Company',
      font: { size: 20, weight: 'bold' }
    },
    tooltip: {
      callbacks: {
        label: function(context) {
          return `${context.dataset.label}: ${context.raw}%`;
        }
      }
    }
  },
  scales: {
    x: {
      stacked: true,
      max: 100,
      ticks: {
        callback: function(value) {
          return value + '%';
        }
      }
    },
    y: {
      stacked: true,
      ticks: {
        autoSkip: false,
        maxRotation: 0,
        minRotation: 0,
        font: {
          size: 11
        }
      }
    }
  }
};

export default function DataTeamComposition() {
  return (
    <div style={{ 
      maxWidth: '1000px', 
      margin: '0 auto', 
      padding: '20px',
      height: '800px'  // Reduced from 1200px to 800px
    }}>
      <Bar data={data} options={options} />
    </div>
  );
}