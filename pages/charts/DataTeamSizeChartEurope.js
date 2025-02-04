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
  { name: 'Snyk', value: 0.8 },
  { name: 'Starling Bank', value: 0.8 },
  { name: 'Meero', value: 0.8 },
  { name: 'Zego', value: 0.8 },
  { name: 'ManyPets', value: 1.1 },
  { name: 'Hopin', value: 1.3 },
  { name: 'Just Eat', value: 1.4 },
  { name: 'Gymshark', value: 1.4 },
  { name: 'Templafy', value: 1.7 },
  { name: 'TravelPerk', value: 1.7 },
  { name: 'Contentful', value: 2.0 },
  { name: 'Soldo', value: 2.0 },
  { name: 'Pleo', value: 2.2 },
  { name: 'Deliveroo', value: 2.2 },
  { name: 'Tide', value: 2.3 },
  { name: 'Etoro', value: 2.5 },
  { name: 'MessageBird', value: 2.5 },
  { name: 'Instabox', value: 2.6 },
  { name: 'Babylon', value: 2.7 },
  { name: 'HelloFresh', value: 2.9 },
  { name: 'Voi', value: 3.0 },
  { name: 'Trustpilot', value: 3.2 },
  { name: 'Wise', value: 3.2 },
  { name: 'N26', value: 3.2 },
  { name: 'Getir', value: 3.6 },
  { name: 'Comply Advantage', value: 3.7 },
  { name: 'Glovo', value: 3.8 },
  { name: 'Trouva', value: 3.8 },
  { name: 'Revolut', value: 3.9 },
  { name: 'Get Your Guide', value: 3.9 },
  { name: 'BlaBlaCar', value: 4.2 },
  { name: 'Cazoo', value: 4.5 },
  { name: 'Tink', value: 4.6 },
  { name: 'Curve', value: 4.7 },
  { name: 'Zopa', value: 4.8 },
  { name: 'GoCardless', value: 5.0 },
  { name: 'Tessian', value: 5.1 },
  { name: 'Dixa', value: 5.2 },
  { name: 'Monzo', value: 5.6 },
  { name: 'Klarna', value: 5.7 },
  { name: 'Gousto', value: 5.8 },
  { name: 'Lendable', value: 5.9 },
  { name: 'Contentsquare', value: 6.6 },
  { name: 'Truecaller', value: 6.9 },
  { name: 'Checkout.com', value: 7.0 }
];

const data = {
  labels: companyData.map(company => company.name),
  datasets: [
    {
      label: 'Data Roles as % of Company Size',
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
      text: 'Data Roles as % of Company Size',
      font: { size: 20 }
    },
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
};

export default function DataTeamSizeChartEurope() {
  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h2 style={{ 
        fontSize: '2rem', 
        marginBottom: '1rem',
        color: '#333'
      }}>Data Roles as % of Company Size (Europe)</h2>
      <p style={{ 
        color: '#666', 
        marginBottom: '2rem',
        lineHeight: '1.6'
      }}>Explore how different European companies allocate their workforce to data roles</p>
      <div style={{ height: '700px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
