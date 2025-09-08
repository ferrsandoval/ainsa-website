import { useEffect } from 'react';
import { structuredDataBreadcrumbs } from '../utils/sitemap';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  jsonLd?: object;
  currentPage?: string;
}

export function SEOHead({
  title,
  description,
  keywords,
  canonical,
  ogImage = "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=2071",
  ogType = "website",
  twitterCard = "summary_large_image",
  jsonLd,
  currentPage = 'home'
}: SEOHeadProps) {
  
  // Initialize basic meta tags on first load
  useEffect(() => {
    // Add basic meta tags if they don't exist
    const addBasicMetaTags = () => {
      const basicTags = [
        { name: 'charset', content: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'theme-color', content: '#08163D' },
        { name: 'msapplication-TileColor', content: '#08163D' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'format-detection', content: 'telephone=no' }
      ];

      basicTags.forEach(tag => {
        if (!document.querySelector(`meta[name="${tag.name}"]`) && !document.querySelector(`meta[charset]`)) {
          const meta = document.createElement('meta');
          if (tag.name === 'charset') {
            meta.setAttribute('charset', tag.content);
          } else {
            meta.setAttribute('name', tag.name);
            meta.setAttribute('content', tag.content);
          }
          document.head.appendChild(meta);
        }
      });
    };

    addBasicMetaTags();
  }, []);
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
    const allJsonLd = [];
    
    // Add page-specific JSON-LD
    if (jsonLd) {
      allJsonLd.push(jsonLd);
    }
    
    // Add breadcrumbs JSON-LD
    const breadcrumbsData = structuredDataBreadcrumbs(currentPage, title.split(' | ')[0]);
    allJsonLd.push(breadcrumbsData);

    // Remove existing JSON-LD scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // Add new JSON-LD scripts
    allJsonLd.forEach((data, index) => {
      const scriptElement = document.createElement('script');
      scriptElement.type = 'application/ld+json';
      scriptElement.textContent = JSON.stringify(data);
      scriptElement.id = `jsonld-${index}`;
      document.head.appendChild(scriptElement);
    });

    // Additional meta tags for business
    updateMetaTag('geo.region', 'MX-BCN');
    updateMetaTag('geo.placename', 'Mexicali, Baja California');
    updateMetaTag('geo.position', '32.6519;-115.4540');
    updateMetaTag('ICBM', '32.6519, -115.4540');

  }, [title, description, keywords, canonical, ogImage, ogType, twitterCard, jsonLd]);

  return null;
}