import Image from 'next/image';
import Link from 'next/link';
import DataEngineerRatio from '../components/charts/DataEngineerRatio';

export default function DataEngineerRatioPage() {
  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '20px',
      backgroundColor: 'white'
    }}>
      
      <header style={{ 
        textAlign: 'center', 
        padding: '60px 0',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h2 style={{ 
          fontSize: '3.5rem', 
          marginBottom: '24px',
          lineHeight: '1.1'
        }}>Data to Product and Engineering Ratios</h2>
        <h3 style={{ 
          fontWeight: 'normal', 
          fontSize: '1.5rem', 
          maxWidth: '800px', 
          lineHeight: '1.4',
          margin: '0 auto',
          color: '#666',
          marginBottom: '40px'
        }}>
          How data and product teams compare to engineering team sizes in 40 scaleup companies
        </h3>       
        
      </header>

      <DataEngineerRatio />

      <p style={{ 
        fontStyle: 'italic',
        color: '#666',
        fontSize: '0.9rem',
        marginTop: '40px',
        textAlign: 'center',
        lineHeight: '1.6'
      }}>
        Data collected from 40 companies in April 2023 based on publicly available LinkedIn data. Note that some people may not have updated their LinkedIn job titles to their most recent roles and are not included in this analysis. We've spot checked many data points through company interviews and found the numbers align closely with reported figures. <a 
          href="https://www.synq.io/blog/data-product-engineer-ratio" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#0070f3', textDecoration: 'none' }}
        >Read more</a> about this analysis.
      </p>

     
    </div>
  );
}