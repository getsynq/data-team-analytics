import Link from 'next/link';

export default function TeamComposition() {
  return (
    <div style={{ padding: '20px' }}>
      <Link href="/" style={{ color: '#0070f3' }}>Back to Home</Link>
      <h1>Team Composition</h1>
      <p>Explore the makeup of successful data teams across different company sizes.</p>
    </div>
  );
}