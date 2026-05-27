import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  children?: React.ReactNode;
}

export const SEO: React.FC<SEOProps> = ({ title, description, keywords, children }) => {
  // If the title already contains Jawai Rock Resort, don't duplicate it.
  const fullTitle = title.includes('Jawai Rock Resort') ? title : `${title} | Jawai Rock Resort`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {children}
    </Helmet>
  );
};
