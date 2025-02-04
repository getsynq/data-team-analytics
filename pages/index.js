import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
      {/* Navbar */}
      <nav style={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        padding: '24px 0',
        boxShadow: 'none',
        border: 'none',
        backgroundColor: '#f8f9fa'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
          <h1 style={{ margin: 0, fontSize: '1.8rem', fontWeight: '600', marginBottom: '4px' }}>Data Insights</h1>
          <div style={{ 
            fontSize: '0.75rem', 
            color: '#666',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            Sponsored by <a href="https://synq.io" target="_blank" style={{ textDecoration: 'none', margin: 0, padding: 0 }}>SYNQ</a>, the data products observability platform
          </div>
        </div>
        <div style={{ 
          display: 'flex', 
          gap: '24px',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Link href="/team-size" style={{ textDecoration: 'none', color: '#333' }}>Data Team Size</Link>
          <span style={{ textDecoration: 'none', color: '#999', cursor: 'default' }}>Team Composition</span>
          <span style={{ textDecoration: 'none', color: '#999', cursor: 'default' }}>Engineer Ratio</span>
          <span style={{ textDecoration: 'none', color: '#999', cursor: 'default' }}>Salary Benchmark</span>
        </div>
      </nav>

      {/* Hero Section */}
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
        <div style={{
          padding: '32px',
          borderRadius: '12px',
          border: '1px solid #eee',
          textDecoration: 'none',
          color: '#ffffff',
          backgroundColor: '#483c74',
          opacity: 0.5,
          cursor: 'default'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#ffffff' }}>Team Composition</h3>
          <p style={{ color: '#CBD5E1', lineHeight: '1.6' }}>Explore the makeup of successful data teams across different company sizes.</p>
        </div>
        <div style={{
          padding: '32px',
          borderRadius: '12px',
          border: '1px solid #eee',
          textDecoration: 'none',
          color: '#ffffff',
          backgroundColor: '#483c74',
          opacity: 0.5,
          cursor: 'default'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#ffffff' }}>Product Engineer Ratio</h3>
          <p style={{ color: '#CBD5E1', lineHeight: '1.6' }}>Analyze the relationship between data teams and overall engineering workforce.</p>
        </div>
        <div style={{
          padding: '32px',
          borderRadius: '12px',
          border: '1px solid #eee',
          textDecoration: 'none',
          color: '#ffffff',
          backgroundColor: '#483c74',
          opacity: 0.5,
          cursor: 'default'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#ffffff' }}>Salary Benchmark</h3>
          <p style={{ color: '#CBD5E1', lineHeight: '1.6' }}>Compare data team salaries across Europe in 2023.</p>
        </div>
      </section>
    </div>
  );
}
