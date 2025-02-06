import { useState } from 'react';
import Link from 'next/link';
import Nav from '../components/Nav';
import DataTeamSizeChartEU from './charts/DataTeamSizeChartEU';
import DataTeamSizeChartUS from './charts/DataTeamSizeChartUS';
import DataTeamSizeChartVertical from './charts/DataTeamSizeChartVertical';

export default function TeamSize() {
  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '20px',
      backgroundColor: 'white'
    }}>     
      
      <header style={{ 
        textAlign: 'center', 
        padding: '40px 0',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h2 style={{ 
          fontSize: '3.5rem', 
          marginBottom: '24px',
          lineHeight: '1.1'
        }}>Data Team Sizes</h2>
        <h3 style={{ 
          fontWeight: 'normal', 
          fontSize: '1.5rem', 
          maxWidth: '800px', 
          lineHeight: '1.4',
          margin: '0 auto',
          color: '#666',
          marginBottom: '40px'
        }}>
          Data team sizes relative to total company size<br /> in 100 scaleup tech companies
        </h3>
      </header>
      
      <DataTeamSizeChartEU />
      <DataTeamSizeChartUS />
            
      <p style={{ 
        fontStyle: 'italic',
        color: '#666',
        fontSize: '0.9rem',
        marginTop: '40px',
        textAlign: 'center',
        lineHeight: '1.6'
      }}>
        Data collected from 100 tech scaleups across Europe in 2023. The median data team as percentage of the total workforce is 3%, with most companies falling within the 1-5% range. <a 
          href="https://www.synq.io/blog/data-team-size-at-100-scaleups" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#0070f3', textDecoration: 'none' }}
        >Read more</a> about this analysis.
      </p>
    </div>
  );
}