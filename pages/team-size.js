import { useState } from 'react';
import Link from 'next/link';
import Nav from '../components/Nav';
import DataTeamSizeChartEU from '../components/charts/DataTeamSizeChartEU';
import DataTeamSizeChartUS from '../components/charts/DataTeamSizeChartUS';
import DataTeamSizeChartVertical from '../components/charts/DataTeamSizeChartVertical';
import SEO from '../components/SEO';
import styles from '../styles/Home.module.css';

export default function TeamSize() {
  return (
    <>
      <SEO 
        title="Data Team Size Analysis - Data Team Analytics"
        description="Discover how data team sizes scale with company growth across European tech companies. Analysis of 100+ tech scaleups."
        path="/team-size"
      />
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
            How big should your data team be? We analyzed 100 tech companies to uncover benchmarks for optimal data team size at different stages of growth.{' '}
            <span className={styles.highlight}>See how your team compares to industry benchmarks.</span>
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
          Data collected from 100 tech scaleups across Europe and US in 2023. Data team size is defined as the number of data professionals in the company based on these role definitions on LinkedIn: Data Analyst, Data Scientist, Machine Learning Engineer, Data Engineer, Product Analyst, Business Intelligence, Data Warehouse, Analytics Engineer, Data Manager, Data Lead, Head of Data, Data Director, VP of Data, Chief Data Officer. <a 
            href="https://www.synq.io/blog/data-team-size-at-100-scaleups" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#0070f3', textDecoration: 'none' }}
          >Read more</a> about this analysis.
        </p>
      </div>
    </>
  );
}