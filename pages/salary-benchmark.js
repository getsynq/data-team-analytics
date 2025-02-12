import Image from 'next/image';
import Link from 'next/link';
import SalaryBenchMark from '../components/charts/SalaryBenchMark';
import SEO from '../components/SEO';
import styles from '../styles/Home.module.css';

export default function SalaryBenchmark() {
  return (
    <>
      <SEO 
        title="Europe Data Salary Benchmark"
        description="How much should you pay your data team? We analyzed salaries across 500 jobs to benchmark salaries for data engineers, data analysts, analytics engineers, and data scientists."
        path="/salary-benchmark"
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
            How much should you pay your data team? We analyzed salaries across 500 jobs to benchmark salaries for data engineers, data analysts, analytics engineers, and data scientists.{' '}
            <span className={styles.highlight}>See how you compare to the data salary benchmark.</span>
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
          We've used publicly available job boards and self reported data points on European data pay to collect data for 500 jobs across 260 companies. In cases where a job listing provided a range (i.e. $60-80k) we've taken the mid of the range. We've converted all numbers from local currencies to USD to make them comparable. The sample mostly consist of data points from the following job categories: Data Engineer, Data Scientist, Analytics Engineer and Data/Product Analyst. All roles we've included have been individual contributor (IC) roles although some of the lead roles may include informal people management. If we had included manager, director and VP level roles, there would be some total compensation packages exceeding what we've found for IC roles. Our benchmark looks at total compensation which also includes stock rewards and bonuses to give the most fair comparison. <a 
            href="https://www.synq.io/blog/europe-data-salary-benchmark-2023" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#0070f3', textDecoration: 'none' }}
          >Read more</a> about this analysis.
        </p>

       
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      // Add any props you need here
    }
  }
}