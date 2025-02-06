import Image from 'next/image';
import Link from 'next/link';
import SalaryBenchMark from './charts/SalaryBenchMark';

export default function SalaryBenchmark() {
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
        }}>Europe Data Salary Benchmark</h2>
        <h3 style={{ 
          fontWeight: 'normal', 
          fontSize: '1.5rem', 
          maxWidth: '800px', 
          lineHeight: '1.4',
          margin: '0 auto',
          color: '#666',
          marginBottom: '40px'
        }}>
          A pay benchmark for data analysts, data scientists, analytics engineers and data engineers across hundreds of companies
        </h3>
        
        {/* <Image 
          src={teamSizeImage}
          alt="Data team size companies"
          width={800}
          height={400}
          style={{ maxWidth: '100%', height: 'auto' }}
        /> */}
      </header>

      <SalaryBenchMark />

      <p style={{ 
        fontStyle: 'italic',
        color: '#666',
        fontSize: '0.9rem',
        marginTop: '40px',
        textAlign: 'center',
        lineHeight: '1.6'
      }}>
        Data collected from 500 jobs across 260 companies in Europe, including total compensation (base salary, stock options, and bonuses) for individual contributor roles in data engineering, data science, analytics engineering, and data/product analytics. <a 
          href="https://www.synq.io/blog/europe-data-salary-benchmark-2023" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#0070f3', textDecoration: 'none' }}
        >Read more</a> about this analysis.
      </p>

     
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      // Add any props you need here
    }
  }
}