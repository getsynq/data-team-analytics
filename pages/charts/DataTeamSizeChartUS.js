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
    { name: 'Rippling', value: 0.7 },
    { name: 'DoorDash', value: 0.7 },
    { name: 'HashiCorp', value: 0.7 },
    { name: 'Impossible', value: 0.7 },
    { name: 'Samsara', value: 0.8 },
    { name: 'Glossier', value: 1.0 },
    { name: 'Lattice', value: 1.2 },
    { name: 'Carta', value: 1.4 },
    { name: 'Amplitude', value: 1.5 },
    { name: 'Sentry', value: 1.5 },
    { name: 'BlockFi', value: 1.5 },
    { name: 'GitLab', value: 1.6 },
    { name: 'Instacart', value: 1.6 },
    { name: 'Ramp', value: 1.7 },
    { name: 'Airtable', value: 1.7 },
    { name: 'Flexport', value: 1.7 },
    { name: 'Opendoor', value: 1.9 },
    { name: 'Gusto', value: 2.0 },
    { name: 'GrubHub', value: 2.0 },
    { name: 'FullStory', value: 2.0 },
    { name: 'Substack', value: 2.1 },
    { name: 'Productboard', value: 2.1 },
    { name: 'Figma', value: 2.2 },
    { name: 'Outreach', value: 2.3 },
    { name: 'TripActions', value: 2.3 },
    { name: 'Snowflake', value: 2.4 },
    { name: 'Calm', value: 2.4 },
    { name: 'Notion', value: 2.4 },
    { name: 'Discord', value: 2.5 },
    { name: 'Headspace', value: 2.6 },
    { name: 'Venmo', value: 2.7 },
    { name: 'Webflow', value: 2.7 },
    { name: 'Talkdesk', value: 2.7 },
    { name: 'PagerDuty', value: 2.8 },
    { name: 'Coinbase', value: 2.9 },
    { name: 'Oscar', value: 3.2 },
    { name: 'Robinhood', value: 3.3 },
    { name: 'Lemonade', value: 3.8 },
    { name: 'Faire', value: 3.9 },
    { name: 'Flatiron', value: 4.0 },
    { name: 'Chime', value: 4.3 },
    { name: 'Convoy', value: 4.4 },
    { name: 'Scale', value: 4.6 },
    { name: 'Brex', value: 4.8 },
    { name: 'Loom', value: 5.0 },
    { name: 'Zapier', value: 5.2 },
    { name: 'dbt', value: 7.3 }
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

export default function DataTeamSizeChartUS() {
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
      }}>Data Roles as % of Company Size (US)</h2>
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
