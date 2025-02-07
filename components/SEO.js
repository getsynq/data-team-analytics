import Head from 'next/head';

export default function SEO({ 
  title = "Data Team Analytics - Insights about Data Teams",
  description = "Explore data team analytics, including team sizes, composition, engineering ratios, and salary benchmarks across European tech companies.",
  path = ""
}) {
  const baseUrl = "https://data.synq.io"; // Replace with your actual domain
  const url = `${baseUrl}${path}`;
  
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}/og-image.png`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}/og-image.png`} />

      {/* Other important meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
} 