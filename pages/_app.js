import '../styles/globals.css';
import Nav from '../components/Nav';

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '20px',
      backgroundColor: 'white'
    }}>
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
