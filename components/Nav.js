import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../styles/Nav.module.css';
import Image from 'next/image';
import synqLogo from '../assets/synq_logo.png';

export default function Nav() {
  const router = useRouter();
  const currentPath = router.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLinkStyle = (path) => ({
    textDecoration: 'none',
    color: '#333',
    fontWeight: currentPath === path ? '600' : '400',
    borderBottom: currentPath === path ? '2px solid #0070f3' : 'none',
    paddingBottom: '2px'
  });

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

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
        <div className={styles.mobileHeader}>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1 className={styles.mobileTitle} style={{ margin: 0, fontSize: '1.8rem', marginBottom: '4px', cursor: 'pointer' }}>
              <span style={{ fontWeight: '300' }}>data</span>benchmarks.com
            </h1>
          </Link>
          <button 
            onClick={handleMenuClick}
            className={styles.hamburger}
          >
            <div style={{
              width: '24px',
              height: '2px',
              background: '#333',
              marginBottom: '6px',
              transition: 'all 0.3s ease'
            }}></div>
            <div style={{
              width: '24px',
              height: '2px',
              background: '#333',
              marginBottom: '6px',
              transition: 'all 0.3s ease'
            }}></div>
            <div style={{
              width: '24px',
              height: '2px',
              background: '#333',
              transition: 'all 0.3s ease'
            }}></div>
          </button>
        </div>
        <div style={{ 
          fontSize: '0.75rem', 
          color: '#666',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            by <a 
              href="https://synq.io" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '4px' }}
            >
              <Image
                src={synqLogo}
                alt="SYNQ"
                width={40}
                height={12}
                style={{ objectFit: 'contain', display: 'block' }}
                priority
              />
            </a>
          </div>
          <div>the data products observability platform</div>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className={styles.desktopMenu}>
        <Link href="/team-size" style={getLinkStyle('/team-size')} onClick={handleLinkClick}>Data Team Size</Link>
        <Link href="/team-composition" style={getLinkStyle('/team-composition')} onClick={handleLinkClick}>Team Composition</Link>
        <Link href="/data-engineer-ratio" style={getLinkStyle('/data-engineer-ratio')} onClick={handleLinkClick}>Data-to-Engineer Ratio</Link>
        <Link href="/salary-benchmark" style={getLinkStyle('/salary-benchmark')} onClick={handleLinkClick}>Salary Benchmark</Link>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/team-size" style={getLinkStyle('/team-size')} onClick={handleLinkClick}>Data Team Size</Link>
          <Link href="/team-composition" style={getLinkStyle('/team-composition')} onClick={handleLinkClick}>Team Composition</Link>
          <Link href="/data-engineer-ratio" style={getLinkStyle('/data-engineer-ratio')} onClick={handleLinkClick}>Data-to-Engineer Ratio</Link>
          <Link href="/salary-benchmark" style={getLinkStyle('/salary-benchmark')} onClick={handleLinkClick}>Salary Benchmark</Link>
        </div>
      )}
    </nav>
  );
} 