import Link from 'next/link';

export default function EngineerRatio() {
  return (
    <div style={{ padding: '20px' }}>
      <Link href="/" style={{ color: '#0070f3' }}>Back to Home</Link>
      <h1>Product Engineer Ratio</h1>
      <p>Analyze the relationship between data teams and overall engineering workforce.</p>
    </div>
  );
}