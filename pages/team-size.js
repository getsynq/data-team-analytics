import Image from 'next/image';
import Link from 'next/link';
import DataTeamSizeChartEurope from './charts/DataTeamSizeChartEurope';
import DataTeamSizeChartUS from './charts/DataTeamSizeChartUS';
import teamSizeImage from '../assets/data_team_size_companies.png';

export default function TeamSize() {
  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '20px',
      backgroundColor: 'white'
    }}>
      <Link href="/" style={{ color: '#0070f3' }}>Back to Home</Link>
      
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
        }}>Data Team Sizes</h2>
        <h3 style={{ 
          fontWeight: 'normal', 
          fontSize: '1.5rem', 
          maxWidth: '800px', 
          lineHeight: '1.4',
          margin: '0 auto',
          color: '#666',
          marginBottom: '40px'
        }}>
          A deep dive into how data teams scale<br />across 100 tech scaleups
        </h3>
        
        <Image 
          src={teamSizeImage}
          alt="Data team size companies"
          width={800}
          height={400}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </header>
      
      <DataTeamSizeChartEurope />
      <DataTeamSizeChartUS />
      
      <p style={{ 
        fontStyle: 'italic',
        color: '#666',
        fontSize: '0.9rem',
        marginTop: '40px',
        textAlign: 'center',
        lineHeight: '1.6'
      }}>
        Data collected from 100 tech scaleups across Europe in 2023. The median data team as percentage of the total workforce is 3%, with most companies falling within the 1-5% range.
      </p>
    </div>
  );
}