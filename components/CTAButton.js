import Image from 'next/image';
import styles from '../styles/CTAButton.module.css';
import synqLogo from '../assets/synq_logo.png';

export default function CTAButton() {
  return (
    <div className={styles.container}>
      <div className={styles.divider}></div>
      
      <a 
        href="https://synq.io/guide" 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.button}
      >
        <div className={styles.content}>
          <div className={styles.logo}>
            <Image
              src={synqLogo}
              alt="SYNQ Logo"
              width={80}
              height={24}
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <p className={styles.text}>
            Want to learn more about how to build reliable data products?
            <span className={styles.link}>Check out SYNQ's guide →</span>
          </p>
        </div>
      </a>
    </div>
  );
} 