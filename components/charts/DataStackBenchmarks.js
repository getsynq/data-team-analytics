import { Bar } from 'react-chartjs-2';
import { useState, useMemo } from 'react';
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

const rawData = [
  { tool: "BigQuery", category: "Data Warehouse", region: "North America", segment: "Small", companies: 469 },
  { tool: "BigQuery", category: "Data Warehouse", region: "North America", segment: "Mid", companies: 911 },
  { tool: "BigQuery", category: "Data Warehouse", region: "North America", segment: "Enterprise", companies: 414 },
  { tool: "Snowflake", category: "Data Warehouse", region: "North America", segment: "Enterprise", companies: 1554 },
  { tool: "Snowflake", category: "Data Warehouse", region: "North America", segment: "Small", companies: 1989 },
  { tool: "Snowflake", category: "Data Warehouse", region: "North America", segment: "Mid", companies: 3896 },
  { tool: "Redshift", category: "Data Warehouse", region: "North America", segment: "Enterprise", companies: 742 },
  { tool: "Redshift", category: "Data Warehouse", region: "North America", segment: "Small", companies: 919 },
  { tool: "Redshift", category: "Data Warehouse", region: "North America", segment: "Mid", companies: 1828 },
  { tool: "Databricks", category: "Data Warehouse", region: "North America", segment: "Enterprise", companies: 1185 },
  { tool: "Databricks", category: "Data Warehouse", region: "North America", segment: "Small", companies: 1190 },
  { tool: "Databricks", category: "Data Warehouse", region: "North America", segment: "Mid", companies: 2362 },
  { tool: "Looker", category: "Business Intelligence", region: "North America", segment: "Enterprise", companies: 905 },
  { tool: "Looker", category: "Business Intelligence", region: "North America", segment: "Small", companies: 1705 },
  { tool: "Looker", category: "Business Intelligence", region: "North America", segment: "Mid", companies: 2977 },
  { tool: "Tableau", category: "Business Intelligence", region: "North America", segment: "Enterprise", companies: 3409 },
  { tool: "Tableau", category: "Business Intelligence", region: "North America", segment: "Small", companies: 6335 },
  { tool: "Tableau", category: "Business Intelligence", region: "North America", segment: "Mid", companies: 11090 },
  { tool: "PowerBI", category: "Business Intelligence", region: "North America", segment: "Enterprise", companies: 3806 },
  { tool: "PowerBI", category: "Business Intelligence", region: "North America", segment: "Small", companies: 6641 },
  { tool: "PowerBI", category: "Business Intelligence", region: "North America", segment: "Mid", companies: 13291 },
  { tool: "ThoughtSpot", category: "Business Intelligence", region: "North America", segment: "Enterprise", companies: 136 },
  { tool: "ThoughtSpot", category: "Business Intelligence", region: "North America", segment: "Small", companies: 89 },
  { tool: "ThoughtSpot", category: "Business Intelligence", region: "North America", segment: "Mid", companies: 171 },
  { tool: "dbt", category: "Data Transformation", region: "North America", segment: "Enterprise", companies: 639 },
  { tool: "dbt", category: "Data Transformation", region: "North America", segment: "Small", companies: 1225 },
  { tool: "dbt", category: "Data Transformation", region: "North America", segment: "Mid", companies: 1985 },
  { tool: "Matillion", category: "Data Transformation", region: "North America", segment: "Enterprise", companies: 173 },
  { tool: "Matillion", category: "Data Transformation", region: "North America", segment: "Small", companies: 138 },
  { tool: "Matillion", category: "Data Transformation", region: "North America", segment: "Mid", companies: 361 },
  { tool: "Dataform", category: "Data Transformation", region: "North America", segment: "Enterprise", companies: 24 },
  { tool: "Dataform", category: "Data Transformation", region: "North America", segment: "Small", companies: 25 },
  { tool: "Dataform", category: "Data Transformation", region: "North America", segment: "Mid", companies: 59 },
  { tool: "Fivetran", category: "Data Ingest", region: "North America", segment: "Enterprise", companies: 224 },
  { tool: "Fivetran", category: "Data Ingest", region: "North America", segment: "Small", companies: 369 },
  { tool: "Fivetran", category: "Data Ingest", region: "North America", segment: "Mid", companies: 767 },
  { tool: "Airbyte", category: "Data Ingest", region: "North America", segment: "Enterprise", companies: 29 },
  { tool: "Airbyte", category: "Data Ingest", region: "North America", segment: "Small", companies: 77 },
  { tool: "Airbyte", category: "Data Ingest", region: "North America", segment: "Mid", companies: 127 },
  { tool: "Matillion", category: "Data Ingest", region: "North America", segment: "Enterprise", companies: 173 },
  { tool: "Matillion", category: "Data Ingest", region: "North America", segment: "Small", companies: 138 },
  { tool: "Matillion", category: "Data Ingest", region: "North America", segment: "Mid", companies: 361 },
  { tool: "Stitch", category: "Data Ingest", region: "North America", segment: "Enterprise", companies: 225 },
  { tool: "Stitch", category: "Data Ingest", region: "North America", segment: "Small", companies: 271 },
  { tool: "Stitch", category: "Data Ingest", region: "North America", segment: "Mid", companies: 484 },
  { tool: "Alation", category: "Data Catalog", region: "North America", segment: "Enterprise", companies: 287 },
  { tool: "Alation", category: "Data Catalog", region: "North America", segment: "Small", companies: 81 },
  { tool: "Alation", category: "Data Catalog", region: "North America", segment: "Mid", companies: 252 },
  { tool: "Atlan", category: "Data Catalog", region: "North America", segment: "Enterprise", companies: 52 },
  { tool: "Atlan", category: "Data Catalog", region: "North America", segment: "Small", companies: 21 },
  { tool: "Atlan", category: "Data Catalog", region: "North America", segment: "Mid", companies: 77 },
  { tool: "Collibra", category: "Data Catalog", region: "North America", segment: "Enterprise", companies: 442 },
  { tool: "Collibra", category: "Data Catalog", region: "North America", segment: "Small", companies: 167 },
  { tool: "Collibra", category: "Data Catalog", region: "North America", segment: "Mid", companies: 415 },
  { tool: "Datahub", category: "Data Catalog", region: "North America", segment: "Enterprise", companies: 110 },
  { tool: "Datahub", category: "Data Catalog", region: "North America", segment: "Small", companies: 40 },
  { tool: "Datahub", category: "Data Catalog", region: "North America", segment: "Mid", companies: 117 },
  { tool: "Amundsen", category: "Data Catalog", region: "North America", segment: "Enterprise", companies: 14 },
  { tool: "Amundsen", category: "Data Catalog", region: "North America", segment: "Small", companies: 7 },
  { tool: "Amundsen", category: "Data Catalog", region: "North America", segment: "Mid", companies: 21 }
];

const regions = ['All', ...new Set(rawData.map(item => item.region))];
const segments = ['All', ...new Set(rawData.map(item => item.segment))];
const categories = [...new Set(rawData.map(item => item.category))];

const colors = [
  '#FFD700', // Gold
  '#87CEFA', // Light Sky Blue
  '#6495ED', // Cornflower Blue
  '#ADD8E6', // Light Blue
  '#D8BFD8', // Thistle
  '#FFB6C1', // Light Pink
  '#98FB98', // Pale Green
  '#DDA0DD', // Plum
  '#F0E68C', // Khaki
  '#E6E6FA'  // Lavender
];

function calculatePercentages(data, selectedRegion, selectedSegment) {
  const filteredData = data.filter(item => 
    (selectedRegion === 'All' || item.region === selectedRegion) &&
    (selectedSegment === 'All' || item.segment === selectedSegment)
  );

  // Aggregate data by tool within each category
  const aggregatedData = [];
  categories.forEach(category => {
    const toolsInCategory = [...new Set(filteredData.filter(item => item.category === category).map(item => item.tool))];
    toolsInCategory.forEach(tool => {
      const totalForTool = filteredData
        .filter(item => item.category === category && item.tool === tool)
        .reduce((sum, item) => sum + item.companies, 0);
      
      aggregatedData.push({
        tool,
        category,
        companies: totalForTool
      });
    });
  });

  return aggregatedData;
}

function CategoryChart({ category, data, selectedRegion, selectedSegment }) {
  const categoryData = data.filter(item => item.category === category);
  const maxValue = Math.max(...categoryData.map(item => item.companies));
  
  // Round the max value to a nice number
  const getRoundedMax = (value) => {
    if (value <= 100) return Math.ceil(value / 10) * 10;
    if (value <= 1000) return Math.ceil(value / 100) * 100;
    return Math.ceil(value / 1000) * 1000;
  };

  const roundedMax = getRoundedMax(maxValue);

  const chartData = {
    labels: categoryData.map(item => item.tool),
    datasets: [{
      data: categoryData.map(item => item.companies),
      backgroundColor: colors,
      borderColor: colors.map(color => color.replace('0.2', '1')),
      borderWidth: 1
    }]
  };

  const options = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: category,
        font: { size: 16, weight: 'bold' }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.raw.toLocaleString()} companies`;
          }
        }
      }
    },
    scales: {
      x: {
        max: roundedMax,
        ticks: {
          maxTicksLimit: 6,
          callback: function(value) {
            return value.toLocaleString();
          }
        }
      },
      y: {
        ticks: {
          font: {
            size: 12
          }
        }
      }
    }
  };

  return (
    <div style={{ height: '200px', marginBottom: '20px' }}>
      <Bar data={chartData} options={options} />
    </div>
  );
}

export default function DataStackBenchmarks() {
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);
  const [selectedSegment, setSelectedSegment] = useState(segments[0]);

  const processedData = useMemo(
    () => calculatePercentages(rawData, selectedRegion, selectedSegment),
    [selectedRegion, selectedSegment]
  );

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ 
        fontSize: '20px',
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: '30px',
        color: '#666'
      }}>
        Tool Adoption by Category
      </h2>
      <div style={{ 
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label htmlFor="regionFilter" style={{ fontSize: '14px', color: '#666' }}>
            Region:
          </label>
          <select 
            id="regionFilter"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            style={{
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              fontSize: '14px',
              color: '#333',
              backgroundColor: 'white'
            }}
          >
            {regions.map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label htmlFor="segmentFilter" style={{ fontSize: '14px', color: '#666' }}>
            Segment:
          </label>
          <select 
            id="segmentFilter"
            value={selectedSegment}
            onChange={(e) => setSelectedSegment(e.target.value)}
            style={{
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              fontSize: '14px',
              color: '#333',
              backgroundColor: 'white'
            }}
          >
            {segments.map(segment => (
              <option key={segment} value={segment}>{segment}</option>
            ))}
          </select>
        </div>
      </div>

      {categories.map(category => (
        <CategoryChart
          key={category}
          category={category}
          data={processedData}
          selectedRegion={selectedRegion}
          selectedSegment={selectedSegment}
        />
      ))}
    </div>
  );
} 