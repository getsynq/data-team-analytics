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

const verticalData = {
  B2B: [
    { name: 'dbt', value: 7.3 },
    { name: 'Contentsquare', value: 6.6 },
    { name: 'Truecaller', value: 6.9 },
    { name: 'Zapier', value: 5.2 },
    { name: 'Loom', value: 5.0 },
    { name: 'Tessian', value: 5.1 },
    { name: 'Dixa', value: 5.2 },
    { name: 'Scale', value: 4.6 },
    { name: 'Productboard', value: 2.1 },
    { name: 'Figma', value: 2.2 },
    { name: 'Notion', value: 2.4 },
  ],
  Marketplace: [
    { name: 'Cazoo', value: 4.5 },
    { name: 'Convoy', value: 4.4 },
    { name: 'BlaBlaCar', value: 4.2 },
    { name: 'Get Your Guide', value: 3.9 },
    { name: 'Faire', value: 3.9 },
    { name: 'Trouva', value: 3.8 },
    { name: 'Glovo', value: 3.8 },
    { name: 'Getir', value: 3.6 },
    { name: 'Voi', value: 3.0 },
    { name: 'Instabox', value: 2.6 },
    { name: 'Deliveroo', value: 2.2 },
  ],
  B2C: [
    { name: 'Gousto', value: 5.8 },
    { name: 'Oscar', value: 3.2 },
    { name: 'HelloFresh', value: 2.9 },
    { name: 'Babylon', value: 2.7 },
    { name: 'Headspace', value: 2.6 },
    { name: 'Discord', value: 2.5 },
    { name: 'Calm', value: 2.4 },
    { name: 'Substack', value: 2.1 },
    { name: 'Gymshark', value: 1.4 },
    { name: 'ManyPets', value: 1.1 },
    { name: 'Glossier', value: 1.0 },
  ],
  Fintech: [
    { name: 'Checkout.com', value: 7.0 },
    { name: 'Lendable', value: 5.9 },
    { name: 'Klarna', value: 5.7 },
    { name: 'Monzo', value: 5.6 },
    { name: 'GoCardless', value: 5.0 },
    { name: 'Zopa', value: 4.8 },
    { name: 'Curve', value: 4.7 },
    { name: 'Tink', value: 4.6 },
    { name: 'Revolut', value: 3.9 },
    { name: 'Wise', value: 3.2 },
    { name: 'N26', value: 3.2 },
  ]
};

const options = {
  indexAxis: 'y',
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    title: {
      display: true,
      font: { size: 18, weight: 'bold' },
    },
  },
};

const DataRolesByVerticals = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {Object.entries(verticalData).map(([vertical, data]) => (
        <div key={vertical} className="p-4 bg-white shadow-lg rounded-xl">
          <h2 className="text-xl font-bold text-center mb-4">{vertical} Companies</h2>
          <div style={{ height: '400px' }}>
            <Bar
              data={{
                labels: data.map(company => company.name),
                datasets: [
                  {
                    label: `Data Roles as % of Company Size`,
                    data: data.map(company => company.value),
                    backgroundColor: vertical === 'B2B' ? '#6a89cc' :
                                      vertical === 'Marketplace' ? '#4caf50' :
                                      vertical === 'B2C' ? '#ff6f61' :
                                      '#ffcc00',
                    borderRadius: 5,
                  },
                ],
              }}
              options={{
                ...options,
                plugins: {
                  ...options.plugins,
                  title: { ...options.plugins.title, text: `${vertical} Companies` },
                },
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataRolesByVerticals;
