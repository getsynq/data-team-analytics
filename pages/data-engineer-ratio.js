import Image from 'next/image';
import Link from 'next/link';
import DataEngineerRatio from '../components/charts/DataEngineerRatio';
import SEO from '../components/SEO';
import styles from '../styles/Home.module.css';

export default function DataEngineerRatioPage() {
  return (
    <>
      <SEO 
        title="Data to Product and Engineering Ratios"
        description="How large should your data team be relative to your engineering team? We analyzed 40 top tech companies to uncover benchmarks in engineering and product teams relative to the data team."
        path="/data-engineer-ratio"
      />
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
            How large should your data team be relative to your engineering team? We analyzed 40 top tech companies to uncover benchmarks in engineering and product teams relative to the data team.{' '}
            <span className={styles.highlight}>See how your company's data-to-engineer ratio compares to the benchmark.</span>
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
          Data collected from 40 companies in April 2023 based on publicly available LinkedIn data, analyzing tens of thousands of profiles. We categorized roles using the following job titles - <strong>Data:</strong> Data Analyst, Data Scientist, Machine Learning Engineer, Data Engineer, Product Analyst, Business Intelligence, Data Warehouse, Analytics Engineer, Data Manager, Data Lead, Head of Data, Data Director, VP of Data, Chief Data Officer; <strong>Engineering:</strong> Engineer/Engineering (excluding Data Engineer), Developer, Tech/Technical Lead, Chief Technical Officer; <strong>Product:</strong> Product Manager, Product Lead, Head of Product, Director of Product, VP of Product, Chief Product Officer. Note that some people may not have updated their LinkedIn job titles to their most recent roles and are not included in this analysis. We've spot checked many data points through company interviews and found the numbers align closely with reported figures. <a 
            href="https://www.synq.io/blog/data-product-engineer-ratio" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#0070f3', textDecoration: 'none' }}
          >Read more</a> about this analysis.
        </p>
      </div>
    </>
  );
}