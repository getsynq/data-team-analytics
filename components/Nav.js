import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Nav() {
  const router = useRouter();
  const currentPath = router.pathname;

  const getLinkStyle = (path) => ({
    textDecoration: 'none',
    color: '#333',
    fontWeight: currentPath === path ? '600' : '400',
    borderBottom: currentPath === path ? '2px solid #0070f3' : 'none',
    paddingBottom: '2px'
  });

  return (
    <nav style={{ 
      maxWidth: '800px',
      margin: '0 auto',
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center',
      padding: '24px 0',
      boxShadow: 'none',
      border: 'none',
      backgroundColor: 'white'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1 style={{ margin: 0, fontSize: '1.8rem', fontWeight: '600', marginBottom: '4px', cursor: 'pointer' }}>
            Data Insights 📊
          </h1>
        </Link>
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
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <Link href="/team-size" style={getLinkStyle('/team-size')}>Data Team Size</Link>
        <Link href="/team-composition" style={getLinkStyle('/team-composition')}>Team Composition</Link>
        <Link href="/data-engineer-ratio" style={getLinkStyle('/data-engineer-ratio')}>Data-to-Engineer Ratio</Link>
        <Link href="/salary-benchmark" style={getLinkStyle('/salary-benchmark')}>Salary Benchmark</Link>
      </div>
    </nav>
  );
} 