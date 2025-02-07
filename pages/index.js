import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>      

      {/* Hero Section */}
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
        }}>Data Team Analytics</h2>
        <h3 style={{ 
          fontWeight: 'normal', 
          fontSize: '1.5rem', 
          maxWidth: '800px', 
          lineHeight: '1.4',
          margin: '0 auto',
          color: '#666'
        }}>
          Dive into visualizations about data teams, their composition, and industry benchmarks.
        </h3>
      </header>

      {/* Cards Section */}
      <section className={styles.cardGrid}>
        <Link href="/team-size" style={{
          padding: '32px',
          borderRadius: '12px',
          border: '1px solid #eee',
          textDecoration: 'none',
          color: '#000000',
          background: 'linear-gradient(125deg, #FFE419 0%, #FFF5B1 100%)',
          transition: 'all 0.2s ease-in-out',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#000000' }}>Data Team Size</h3>
          <p style={{ color: '#333333', lineHeight: '1.6' }}>Ratio of data team size compared to total company size in 100 tech scaleups.</p>
        </Link>
        <Link href="/team-composition" style={{
          padding: '32px',
          borderRadius: '12px',
          border: '1px solid #eee',
          textDecoration: 'none',
          color: '#000000',
          background: 'linear-gradient(145deg, #FFE419 0%, #FFF8D1 100%)',
          transition: 'all 0.2s ease-in-out',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#000000' }}>Team Composition</h3>
          <p style={{ color: '#333333', lineHeight: '1.6' }}>Composition of data roles across insight, data engineering, and machine learning.</p>
        </Link>
        <Link href="/data-engineer-ratio" style={{
          padding: '32px',
          borderRadius: '12px',
          border: '1px solid #eee',
          textDecoration: 'none',
          color: '#000000',
          background: 'linear-gradient(155deg, #FFE419 10%, #FFF5B1 90%)',
          transition: 'all 0.2s ease-in-out',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#000000' }}>Data-to-Engineer Ratio</h3>
          <p style={{ color: '#333333', lineHeight: '1.6' }}>How data and product teams compare to engineering team sizes in 40 scaleups.</p>
        </Link>
        <Link href="/salary-benchmark" style={{
          padding: '32px',
          borderRadius: '12px',
          border: '1px solid #eee',
          textDecoration: 'none',
          color: '#000000',
          background: 'linear-gradient(165deg, #FFE419 15%, #FFF2A1 95%)',
          transition: 'all 0.2s ease-in-out',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#000000' }}>Salary Benchmark</h3>
          <p style={{ color: '#333333', lineHeight: '1.6' }}>Compare data team salaries across hundreds of European companies.</p>
        </Link>
      </section>
    </div>
  );
}
