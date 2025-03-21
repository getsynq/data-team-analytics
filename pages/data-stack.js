import Image from 'next/image';
import Link from 'next/link';
import SEO from '../components/SEO';
import styles from '../styles/Home.module.css';  // Reusing the highlight style
import DataStackBenchmarks from '../components/charts/DataStackBenchmarks';

export default function DataStackPage() {
  return (
    <>
      <SEO 
        title="Data Stack Benchmarks"
        description="What tools are leading data teams using? We analyzed tens of thousands of tech companies to understand how they build their modern data stacks across data warehousing (92%), business intelligence (89%), data transformation (85%), data ingestion (78%), and data catalogs (45%)."
        path="/data-stack"
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
          }}>Data Stack Benchmarks</h2>
          <h3 style={{ 
            fontWeight: 'normal', 
            fontSize: '1.5rem', 
            maxWidth: '800px', 
            lineHeight: '1.4',
            margin: '0 auto',
            color: '#666',
            marginBottom: '40px'
          }}>
            What tools are leading data teams using? We analyzed tens of thousands of companies to understand how they build their modern data stacks across warehousing, BI, transformation, ingestion, and data catalogs.{' '}
            <span className={styles.highlight}>Find out which tools are becoming industry standards in modern data stacks.</span>
          </h3>
          
          {/* <Image 
            src={teamSizeImage}
            alt="Data team size companies"
            width={800}
            height={400}
            style={{ maxWidth: '100%', height: 'auto' }}
          /> */}
        </header>

        <div style={{ marginBottom: '40px' }}>
          <DataStackBenchmarks />
        </div>

        <p style={{ 
          fontStyle: 'italic',
          color: '#666',
          fontSize: '0.9rem',
          marginTop: '40px',
          textAlign: 'center',
          lineHeight: '1.6'
        }}>
          Data extracted from external sources such as theirstack.com and may only be approximately correct. The analysis covers five key categories of the modern data stack: data warehouses (e.g., Snowflake, BigQuery), business intelligence tools (e.g., Looker, Tableau), data transformation (e.g., dbt, Dataform), data ingestion (e.g., Fivetran, Airbyte), and data catalogs (e.g., Atlan, Alation). Numbers are aggregated across company segments from startups to enterprises and should be used as general indicators of tool adoption rather than exact figures.
        </p>

       
      </div>
    </>
  );
}