import Image from 'next/image';
import Link from 'next/link';
import DataTeamComposition from '../components/charts/DataTeamComposition';
import SEO from '../components/SEO';
import styles from '../styles/Home.module.css';  // Reusing the highlight style

export default function TeamCompositionPage() {
  return (
    <>
      <SEO 
        title="Data Team Composition Analysis - Data Team Analytics"
        description="Explore the makeup of successful data teams across different company sizes. Analysis of roles, responsibilities, and team structures in European tech companies."
        path="/team-composition"
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
          }}>Data Team Composition</h2>
          <h3 style={{ 
            fontWeight: 'normal', 
            fontSize: '1.5rem', 
            maxWidth: '800px', 
            lineHeight: '1.4',
            margin: '0 auto',
            color: '#666',
            marginBottom: '40px'
          }}>
            What's the right mix of data roles in top data teams? We analyzed 40 tech companies to understand how companies balance analysts, data engineering, and machine learning roles.{' '}
            <span className={styles.highlight}>Find out what the optimal data team composition is for your team.</span>
          </h3>
          
          {/* <Image 
            src={teamSizeImage}
            alt="Data team size companies"
            width={800}
            height={400}
            style={{ maxWidth: '100%', height: 'auto' }}
          /> */}
        </header>

        <DataTeamComposition />

        <p style={{ 
          fontStyle: 'italic',
          color: '#666',
          fontSize: '0.9rem',
          marginTop: '40px',
          textAlign: 'center',
          lineHeight: '1.6'
        }}>
          Data collected from 40 European tech companies in July 2024, including Series A to public companies, with data teams ranging from 5 to 200+ people. We've looked into the distribution of data roles in 40 top data teams. The analysis include the following job titles: Data Analysts, Product Analysts, Data Scientists, Data Engineers, Data Platform, Analytics Engineers, Data Governance, and Machine Learning Engineers. Based on publicly available LinkedIn data and verified through industry connections. <a 
            href="https://www.synq.io/blog/data-team-composition" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#0070f3', textDecoration: 'none' }}
          >Read more</a> about this analysis.
        </p>

       
      </div>
    </>
  );
}