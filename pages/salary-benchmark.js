import Link from 'next/link';

export default function SalaryBenchmark() {
  return (
    <div style={{ padding: '20px' }}>
      <Link href="/" style={{ color: '#0070f3' }}>Back to Home</Link>
      <h1>Salary Benchmark</h1>
      <p>Compare data team salaries across Europe in 2023.</p>
    </div>
  );
}