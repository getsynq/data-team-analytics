import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import salaryData from '../../assets/salary_data_with_tooltip.csv';

const experienceLevels = ["Junior", "Mid", "Senior"];

const SalaryChart = () => {
  const chartRef = useRef(null);
  const [selectedCity, setSelectedCity] = useState('All');
  
  // Get top 5 cities and total unique cities count
  const cityCount = d3.rollup(salaryData, v => v.length, d => d.city);
  const totalCities = cityCount.size;
  const topCities = Array.from(cityCount.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)  // Changed from 10 to 5
    .map(([city]) => city);

  useEffect(() => {
    // Clear previous chart
    d3.select(chartRef.current).selectAll("*").remove();

    const width = 800;
    const height = 600;  // Increased from 600 to 800
    const margin = { top: 20, right: 30, bottom: 50, left: 100 };

    const svg = d3.select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    // Filter data based on selected city
    const filteredData = selectedCity === 'All' 
      ? salaryData 
      : salaryData.filter(d => d.city === selectedCity);

    // Transform the filtered data
    const dataPoints = filteredData.map(d => ({
      salary: +d.salary,
      experience: d.experience,
      company: d.company,
      city: d.city
    }));

    const xScale = d3.scaleLinear()
      .domain([0, 250000])
      .range([margin.left, width - margin.right]);

    const yScale = d3.scaleBand()
      .domain(experienceLevels)
      .range([margin.top, height - margin.bottom])  // Adjusted to use new height
      .padding(0.5);

    // Create force simulation for each experience level
    experienceLevels.forEach(level => {
      const levelData = dataPoints.filter(d => d.experience === level);
      
      const simulation = d3.forceSimulation(levelData)
        .force("x", d3.forceX(d => xScale(d.salary)).strength(1))
        .force("y", d3.forceY(yScale(level) + yScale.bandwidth() / 2))
        .force("collide", d3.forceCollide(5))  // Radius of 5 plus small padding
        .stop();

      // Run the simulation
      for (let i = 0; i < 120; ++i) simulation.tick();
    });

    // X-axis
    svg.append("g")
      .attr("transform", `translate(0, ${height - margin.bottom})`)
      .call(d3.axisBottom(xScale).tickFormat(d => `$${d3.format(",")(d)}`));

    // Y-axis
    svg.append("g")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(yScale));

    // Tooltip
    const tooltip = d3.select(chartRef.current)
      .append("div")
      .style("position", "absolute")
      .style("background", "white")
      .style("border", "1px solid black")
      .style("padding", "5px")
      .style("border-radius", "5px")
      .style("visibility", "hidden")
      .style("font-size", "12px");

    // Calculate medians for each experience level
    const medians = {
      Junior: d3.median(dataPoints.filter(d => d.experience === "Junior"), d => d.salary),
      Mid: d3.median(dataPoints.filter(d => d.experience === "Mid"), d => d.salary),
      Senior: d3.median(dataPoints.filter(d => d.experience === "Senior"), d => d.salary)
    };
    
    // First add all the circles (data points)
    svg.selectAll("circle")
      .data(dataPoints)
      .enter()
      .append("circle")
      .attr("cx", d => d.x)
      .attr("cy", d => d.y)
      .attr("r", 5)
      .attr("fill", "teal")
      .on("mouseover", (event, d) => {
        tooltip.style("visibility", "visible")
          .html(`<strong>Company:</strong> ${d.company}<br/><strong>City:</strong> ${d.city}<br/><strong>Salary:</strong> $${d3.format(",")(d.salary)}`)
          .style("left", `${event.pageX + 10}px`)
          .style("top", `${event.pageY - 28}px`);
      })
      .on("mousemove", (event) => {
        tooltip.style("left", `${event.pageX + 10}px`)
          .style("top", `${event.pageY - 28}px`);
      })
      .on("mouseout", () => {
        tooltip.style("visibility", "hidden");
      });

    // Then add median lines and labels on top
    Object.entries(medians).forEach(([level, median]) => {
      // Add vertical line
      svg.append("line")
        .attr("x1", xScale(median))
        .attr("x2", xScale(median))
        .attr("y1", yScale(level) - yScale.bandwidth() / 2)
        .attr("y2", yScale(level) + yScale.bandwidth() / 2)
        .attr("stroke", "#666")
        .attr("stroke-width", 1.5)
        .attr("stroke-dasharray", "4");

      // Add median value label
      svg.append("text")
        .attr("x", xScale(median))
        .attr("y", yScale(level) - yScale.bandwidth() / 2 - 5)
        .attr("text-anchor", "middle")
        .attr("fill", "#666")
        .attr("font-size", "12px")
        .text(`Median: $${d3.format(",")(Math.round(median))}`);
    });
  }, [selectedCity]);

  return (
    <div>
      <h2 style={{ 
        fontSize: '20px',
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: '30px',  // Increased from 20px to 30px
        color: '#666'
      }}>
        Salary Distribution by Experience Level
      </h2>
      <div style={{ 
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <label htmlFor="cityFilter" style={{ fontSize: '14px', color: '#666' }}>
          Filter by city:
        </label>
        <select 
          id="cityFilter"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          style={{
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ddd',
            fontSize: '14px',
            color: '#333',
            backgroundColor: 'white'
          }}
        >
          <option value="All">All Cities</option>
          {topCities.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>
      <p style={{ 
        fontSize: '12px', 
        color: '#666', 
        fontStyle: 'italic',
        marginTop: '-15px',  // Negative margin to move it up closer to the filter
        marginBottom: '5px', // Add some space before the chart
        textAlign: 'left'
      }}>
        Showing top 5 cities by number of data points in filter. Data includes {totalCities} cities in total.
      </p>
      <div ref={chartRef}></div>
    </div>
  );
};

export default SalaryChart;
