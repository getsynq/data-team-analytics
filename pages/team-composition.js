import Image from 'next/image';
import Link from 'next/link';
import DataTeamComposition from '../components/charts/DataTeamComposition';

export default function TeamCompositionPage() {
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
          Composition of data roles across insight, data engineering, and machine learning

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
        Data collected from 40 companies in July 2024 based on publicly available LinkedIn data. <a 
          href="https://www.synq.io/blog/data-team-composition" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#0070f3', textDecoration: 'none' }}
        >Read more</a> about this analysis.
      </p>

     
    </div>
  );
}