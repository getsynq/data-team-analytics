import { useEffect, useRef } from "react";
import * as d3 from "d3";
import MondayLogo from '../../assets/logos/monday.png';
import NotionLogo from '../../assets/logos/notion.png';
import PluralSightLogo from '../../assets/logos/pluralsight.png';
import RouteLogo from '../../assets/logos/route.png';
import LucidLogo from '../../assets/logos/lucid.png';
import LaceworkLogo from '../../assets/logos/lacework.png';
import PodiumLogo from '../../assets/logos/podium.png';
import ClickUpLogo from '../../assets/logos/clickup.png';
import MiroLogo from '../../assets/logos/miro.png';
import BrexLogo from '../../assets/logos/brex.png';
import LoomLogo from '../../assets/logos/loom.png';
import TypeformLogo from '../../assets/logos/typeform.png';
import CazooLogo from '../../assets/logos/cazoo.png';
import N26Logo from '../../assets/logos/n26.png';
import StripeLogo from '../../assets/logos/stripe.png';
import RipplingLogo from '../../assets/logos/rippling.png';
import InstacartLogo from '../../assets/logos/instacart.png';
import GitlabLogo from '../../assets/logos/gitlab.png';
import GithubLogo from '../../assets/logos/github.png';
import RemoteLogo from '../../assets/logos/remote.png';
import DeelLogo from '../../assets/logos/deel.png';
import AirtableLogo from '../../assets/logos/airtable.png';
import TinderLogo from '../../assets/logos/tinder.png';
import BumbleLogo from '../../assets/logos/bumble.png';
import ChainalysisLogo from '../../assets/logos/chainalysis.png';
import CoverGeniusLogo from '../../assets/logos/covergenius.png';
import ZendeskLogo from '../../assets/logos/zendesk.png';
import MasterclassLogo from '../../assets/logos/masterclass.png';
import PersonioLogo from '../../assets/logos/personio.png';
import RampLogo from '../../assets/logos/ramp.png';
import VantaLogo from '../../assets/logos/vanta.png';
import SpendeskLogo from '../../assets/logos/spendesk.png';
import RobinhoodLogo from '../../assets/logos/robinhood.png';
import SquarespaceLogo from '../../assets/logos/squarespace.png';
import WebflowLogo from '../../assets/logos/webflow.png';
import DoordashLogo from '../../assets/logos/doordash.png';
import FaireLogo from '../../assets/logos/faire.png';
import LatticeLogo from '../../assets/logos/lattice.png';
import WiseLogo from '../../assets/logos/wise.png';
import CheckoutLogo from '../../assets/logos/checkout.png';
import styles from '../../styles/DataEngineerRatio.module.css';

const companyLogos = {
  "Monday.com": MondayLogo.src,
  "Notion": NotionLogo.src,
  "PluralSight": PluralSightLogo.src,
  "Route": RouteLogo.src,
  "Lucid": LucidLogo.src,
  "Lacework": LaceworkLogo.src,
  "Podium": PodiumLogo.src,
  "ClickUp": ClickUpLogo.src,
  "Miro": MiroLogo.src,
  "Brex": BrexLogo.src,
  "Loom": LoomLogo.src,
  "Typeform": TypeformLogo.src,
  "Cazoo": CazooLogo.src,
  "N26": N26Logo.src,
  "Stripe": StripeLogo.src,
  "Rippling": RipplingLogo.src,
  "Instacart": InstacartLogo.src,
  "Gitlab": GitlabLogo.src,
  "Github": GithubLogo.src,
  "Remote": RemoteLogo.src,
  "Deel": DeelLogo.src,
  "Airtable": AirtableLogo.src,
  "Tinder": TinderLogo.src,
  "Bumble": BumbleLogo.src,
  "Chainalysis": ChainalysisLogo.src,
  "Cover Genious": CoverGeniusLogo.src,
  "Zendesk": ZendeskLogo.src,
  "Masterclass": MasterclassLogo.src,
  "Personio": PersonioLogo.src,
  "Ramp": RampLogo.src,
  "Vanta": VantaLogo.src,
  "Spendesk": SpendeskLogo.src,
  "Robinhood": RobinhoodLogo.src,
  "Squarespace": SquarespaceLogo.src,
  "Webflow": WebflowLogo.src,
  "Doordash": DoordashLogo.src,
  "Faire": FaireLogo.src,
  "Lattice": LatticeLogo.src,
  "Wise": WiseLogo.src,
  "Checkout.com": CheckoutLogo.src
};

const dataPoints = [
  { name: "Monday.com", x: 0.14, y: 0.145 },
  { name: "Notion", x: 0.09, y: 0.075 },
  { name: "PluralSight", x: 0.18, y: 0.125 },
  { name: "Route", x: 0.15, y: 0.16 },
  { name: "Lucid", x: 0.06, y: 0.15 },
  { name: "Lacework", x: 0.08, y: 0.065 },
  { name: "Podium", x: 0.13, y: 0.13 },
  { name: "ClickUp", x: 0.12, y: 0.10 },
  { name: "Miro", x: 0.09, y: 0.12 },
  { name: "Brex", x: 0.12, y: 0.08 },
  { name: "Loom", x: 0.18, y: 0.15 },
  { name: "Typeform", x: 0.19, y: 0.13 },
  { name: "N26", x: 0.17, y: 0.16 },
  { name: "Stripe", x: 0.11, y: 0.09 },
  { name: "Rippling", x: 0.04, y: 0.06 },
  { name: "Instacart", x: 0.27, y: 0.14 },
  { name: "Gitlab", x: 0.07, y: 0.07 },
  { name: "Github", x: 0.06, y: 0.055 },
  { name: "Remote", x: 0.10, y: 0.055 },
  { name: "Deel", x: 0.07, y: 0.13 },
  { name: "Airtable", x: 0.08, y: 0.06 },
  { name: "Tinder", x: 0.21, y: 0.16 },
  { name: "Bumble", x: 0.17, y: 0.12 },
  { name: "Chainalysis", x: 0.22, y: 0.09 },
  { name: "Cover Genious", x: 0.13, y: 0.21 },
  { name: "Zendesk", x: 0.07, y: 0.10 },
  { name: "Masterclass", x: 0.22, y: 0.14 },
  { name: "Personio", x: 0.08, y: 0.165 },
  { name: "Ramp", x: 0.14, y: 0.15 },
  { name: "Vanta", x: 0.04, y: 0.12 },
  { name: "Spendesk", x: 0.11, y: 0.125 },
  { name: "Robinhood", x: 0.16, y: 0.08 },
  { name: "Squarespace", x: 0.11, y: 0.11 },
  { name: "Webflow", x: 0.05, y: 0.05 },
  { name: "Doordash", x: 0.23, y: 0.08 },
  { name: "Faire", x: 0.18, y: 0.115 },
  { name: "Lattice", x: 0.06, y: 0.17 },
  { name: "Wise", x: 0.19, y: 0.14 },
  { name: "Checkout.com", x: 0.14, y: 0.17 }
];

export default function DataEngineerRatio() {
  const chartRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(chartRef.current)
      .append("svg")
      .attr("width", 600)
      .attr("height", 600);

    const xScale = d3.scaleLinear().domain([0, 0.3]).range([50, 550]);
    const yScale = d3.scaleLinear().domain([0, 0.25]).range([550, 50]);

    // Create tooltip div
    const tooltip = d3.select(chartRef.current)
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0)
      .style("position", "absolute")
      .style("background-color", "white")
      .style("border", "1px solid #ddd")
      .style("border-radius", "4px")
      .style("padding", "8px")
      .style("font-size", "12px")
      .style("pointer-events", "none")
      .style("box-shadow", "0 2px 4px rgba(0,0,0,0.1)");

    svg.append("g")
      .attr("transform", "translate(0,550)")
      .call(d3.axisBottom(xScale).ticks(5).tickFormat(d => `${d.toFixed(2)}x`));

    svg.append("text")
      .attr("x", 300)
      .attr("y", 595)
      .style("text-anchor", "middle")
      .style("font-size", "14px")
      .text("Data / Engineers");

    svg.append("g")
      .attr("transform", "translate(50,0)")
      .call(d3.axisLeft(yScale).ticks(5).tickFormat(d => `${d.toFixed(2)}x`));

    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -300)
      .attr("y", 10)
      .style("text-anchor", "middle")
      .style("font-size", "14px")
      .text("PMs / Engineers");

    // Add images with increased size
    const images = svg.selectAll("image")
      .data(dataPoints)
      .enter()
      .append("image")
      .attr("x", d => xScale(d.x) - 35)
      .attr("y", d => yScale(d.y) - 7)
      .attr("width", 70)
      .attr("height", 14)
      .attr("href", d => companyLogos[d.name] || d.name)
      .style("cursor", "pointer")
      .on("mouseover", function(event, d) {
        // Show tooltip
        tooltip.transition()
          .duration(200)
          .style("opacity", .9);
        
        tooltip.html(`
          <strong>${d.name}</strong><br/>
          Data/Eng Ratio: ${d.x.toFixed(2)}x<br/>
          PM/Eng Ratio: ${d.y.toFixed(2)}x
        `)
          .style("left", (event.pageX + 10) + "px")
          .style("top", (event.pageY - 28) + "px");
      })
      .on("mouseout", function() {
        // Hide tooltip
        tooltip.transition()
          .duration(500)
          .style("opacity", 0);
      });

  }, []);

  return (
    <div style={{ 
      maxWidth: '1000px',
      margin: '0 auto', 
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h2 style={{ 
        fontSize: '20px',
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: '0px',
        color: '#666'
      }}>
        Data and Product to Engineering Roles Ratio
      </h2>
      <div className={styles.chartWrapper}>
        <div className={styles.chartContainer}>
          <div ref={chartRef} className={styles.chart}></div>
        </div>
      </div>
    </div>
  );
}
