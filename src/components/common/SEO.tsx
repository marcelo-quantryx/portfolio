import React from 'react';
import { Helmet } from 'react-helmet-async';
import { seoConfig } from '../../config/seo';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({
  title = seoConfig.title,
  description = seoConfig.description,
  image = seoConfig.image,
  url = seoConfig.url,
  type = 'website'
}: SEOProps) {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={seoConfig.keywords} />
      <meta name="author" content={seoConfig.author} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={seoConfig.locale} />
      <meta property="og:site_name" content={title} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seoConfig.twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": seoConfig.author,
          "jobTitle": "Senior Data Engineer",
          "url": seoConfig.url,
          "image": seoConfig.image,
          "sameAs": [
            "https://github.com/marcelo-quantryx",
            "https://www.linkedin.com/in/marcelogazzola"
          ],
          "worksFor": {
            "@type": "Organization",
            "name": "Xiatech Consulting Ltd"
          },
          "description": seoConfig.description,
          "knowsAbout": [
            "Data Engineering",
            "ETL Pipeline Development",
            "Cloud Computing",
            "Python",
            "Google Cloud Platform",
            "Apache Airflow",
            "Big Data Processing"
          ]
        })}
      </script>
    </Helmet>
  );
}