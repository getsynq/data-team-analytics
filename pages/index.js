import Link from 'next/link';
import Nav from '../components/Nav';

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
          Dive into comprehensive visualizations about data teams,<br /> their composition, and industry benchmarks.
        </h3>
      </header>

      {/* Cards Section */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '24px',
        padding: '20px 0',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <Link href="/team-size" style={{
          padding: '32px',
          borderRadius: '12px',
          border: '1px solid #eee',
          textDecoration: 'none',
          color: '#ffffff',
          backgroundColor: '#483c74'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#ffffff' }}>Data Team Size</h3>
          <p style={{ color: '#CBD5E1', lineHeight: '1.6' }}>Discover how data team sizes scale with company growth across Europe.</p>
        </Link>
        <Link href="/team-composition" style={{
          padding: '32px',
          borderRadius: '12px',
          border: '1px solid #eee',
          textDecoration: 'none',
          color: '#ffffff',
          backgroundColor: '#483c74'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#ffffff' }}>Team Composition</h3>
          <p style={{ color: '#CBD5E1', lineHeight: '1.6' }}>Explore the makeup of successful data teams across different company sizes.</p>
        </Link>
        <Link href="/data-engineer-ratio" style={{
          padding: '32px',
          borderRadius: '12px',
          border: '1px solid #eee',
          textDecoration: 'none',
          color: '#ffffff',
          backgroundColor: '#483c74'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#ffffff' }}>Data-to-Engineer Ratio</h3>
          <p style={{ color: '#CBD5E1', lineHeight: '1.6' }}>Analyze the relationship between data teams and overall engineering workforce.</p>
        </Link>
        <Link href="/salary-benchmark" style={{
          padding: '32px',
          borderRadius: '12px',
          border: '1px solid #eee',
          textDecoration: 'none',
          color: '#ffffff',
          backgroundColor: '#483c74'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#ffffff' }}>Salary Benchmark</h3>
          <p style={{ color: '#CBD5E1', lineHeight: '1.6' }}>Compare data team salaries across Europe in 2023.</p>
        </Link>
      </section>
    </div>
  );
}
