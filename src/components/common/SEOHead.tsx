
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  canonicalUrl?: string;
}

const SEOHead = ({
  title = "Quantum Philippines Nexus | QCSP",
  description = "Connecting quantum enthusiasts, researchers, and professionals in the Philippines. Access events, resources, courses, and join our community.",
  keywords = "quantum computing, Philippines, QCSP, quantum technology, quantum science, quantum research, quantum education",
  ogImage = "https://www.qcsp.ph/assets/images/wTagline.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  canonicalUrl = "https://quantum-philippines.org"
}: SEOHeadProps) => {
  const baseUrl = canonicalUrl.replace(/\/$/, '');
  const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;
  
  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="icon" href="https://www.qcsp.ph/assets/images/wTagline.png" type="image/png" />
      
      {/* OpenGraph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:alt" content="Quantum Computing Society of the Philippines" />
      
      {/* Twitter tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
    </Helmet>
  );
};

export default SEOHead;
