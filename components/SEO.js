import Head from 'next/head';

export default function SEO({ 
  title = "Benchmark Your Data Team",
  description = "We analyzed 100+ fast-growing companies to uncover insights about team size, role distribution, data-to-engineer ratios, and salaries. Benchmark how your team compares.",
  path = ""
}) {
  const domain = 'https://databenchmarks.com'; // Update this to your actual domain
  const fullUrl = `${domain}${path}`;
  const imageUrl = `${domain}/data_team_benchmarks.png`;
  
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="628" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Other important meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={fullUrl} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
} 