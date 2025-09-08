import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  jsonLd?: object;
}

export function SEOHead({
  title,
  description,
  keywords,
  canonical,
  ogImage = "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=2071",
  ogType = "website",
  twitterCard = "summary_large_image",
  jsonLd
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Function to update or create meta tags
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`) as HTMLMetaElement;
      
      if (element) {
        element.content = content;
      } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        element.content = content;
        document.head.appendChild(element);
      }
    };

    // Update or create link tags
    const updateLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (element) {
        element.href = href;
      } else {
        element = document.createElement('link');
        element.rel = rel;
        element.href = href;
        document.head.appendChild(element);
      }
    };

    // Basic SEO meta tags
    updateMetaTag('description', description);
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    updateMetaTag('author', 'AINSA Acero Inoxidable');
    updateMetaTag('language', 'es-MX');
    
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Open Graph meta tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:image:alt', title, true);
    updateMetaTag('og:site_name', 'AINSA Acero Inoxidable', true);
    updateMetaTag('og:locale', 'es_MX', true);

    // Twitter Card meta tags
    updateMetaTag('twitter:card', twitterCard);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:image:alt', title);

    // Canonical URL
    if (canonical) {
      updateLinkTag('canonical', canonical);
    }

    // JSON-LD structured data
    if (jsonLd) {
      let scriptElement = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      
      if (scriptElement) {
        scriptElement.textContent = JSON.stringify(jsonLd);
      } else {
        scriptElement = document.createElement('script');
        scriptElement.type = 'application/ld+json';
        scriptElement.textContent = JSON.stringify(jsonLd);
        document.head.appendChild(scriptElement);
      }
    }

    // Additional meta tags for business
    updateMetaTag('geo.region', 'MX-BCN');
    updateMetaTag('geo.placename', 'Mexicali, Baja California');
    updateMetaTag('geo.position', '32.6519;-115.4540');
    updateMetaTag('ICBM', '32.6519, -115.4540');

  }, [title, description, keywords, canonical, ogImage, ogType, twitterCard, jsonLd]);

  return null;
}