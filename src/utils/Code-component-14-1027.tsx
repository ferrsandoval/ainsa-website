interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: object;
}

const baseUrl = 'https://ainsa.com.mx'; // Cambiar por la URL real del sitio

// JSON-LD base para la organización
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AINSA Acero Inoxidable",
  "description": "Distribuidor líder de materias primas de acero inoxidable en México",
  "url": baseUrl,
  "logo": `${baseUrl}/logo.png`,
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+52-662-496-8802",
    "contactType": "Ventas",
    "areaServed": "MX",
    "availableLanguage": "Spanish"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Dirección de AINSA",
    "addressLocality": "Mexicali",
    "addressRegion": "Baja California",
    "addressCountry": "MX"
  },
  "sameAs": [
    "https://www.facebook.com/ainsa",
    "https://www.linkedin.com/company/ainsa"
  ]
};

export const seoConfigs: Record<string, SEOConfig> = {
  'home': {
    title: 'AINSA - Distribución de Acero Inoxidable | Materias Primas Industriales',
    description: 'AINSA es distribuidor líder de acero inoxidable, aluminio y materias primas industriales en México. Calidad garantizada, entrega rápida y asesoría especializada.',
    keywords: 'acero inoxidable, materias primas, distribución industrial, aluminio, metales no ferrosos, AINSA, México, Mexicali',
    canonical: baseUrl,
    jsonLd: {
      ...organizationJsonLd,
      "@type": ["Organization", "Store"],
      "priceRange": "$$",
      "openingHours": "Mo-Fr 08:00-17:00"
    }
  },
  
  'productos': {
    title: 'Catálogo de Productos | Acero Inoxidable y Materias Primas - AINSA',
    description: 'Descubre nuestro amplio catálogo de productos: acero inoxidable, aluminio, metales no ferrosos, placas antidesgaste, paneles ACP y consumibles industriales.',
    keywords: 'catálogo productos, acero inoxidable, aluminio, metales no ferrosos, placas antidesgaste, paneles ACP, consumibles, abrasivos',
    canonical: `${baseUrl}/productos`,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Productos AINSA",
      "description": "Catálogo completo de materias primas industriales",
      "numberOfItems": 8,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Acero Inoxidable" },
        { "@type": "ListItem", "position": 2, "name": "Aluminio" },
        { "@type": "ListItem", "position": 3, "name": "Metales No Ferrosos" },
        { "@type": "ListItem", "position": 4, "name": "Acero al Carbón y Especiales" },
        { "@type": "ListItem", "position": 5, "name": "Placas Antidesgaste" },
        { "@type": "ListItem", "position": 6, "name": "Paneles ACP" },
        { "@type": "ListItem", "position": 7, "name": "Consumibles y Abrasivos" },
        { "@type": "ListItem", "position": 8, "name": "Soluciones IRVING®" }
      ]
    }
  },

  'aceros-inoxidables': {
    title: 'Acero Inoxidable | Láminas, Placas y Perfiles - AINSA',
    description: 'Especialistas en acero inoxidable 304, 316, 430 y más. Láminas, placas, tubos y perfiles de la más alta calidad para aplicaciones industriales.',
    keywords: 'acero inoxidable 304, acero inoxidable 316, láminas inoxidables, placas acero inoxidable, tubos inoxidables, perfiles inoxidables',
    canonical: `${baseUrl}/aceros-inoxidables`
  },

  'aluminio': {
    title: 'Aluminio Industrial | Láminas, Placas y Perfiles - AINSA',
    description: 'Distribución de aluminio industrial en diversas aleaciones. Láminas, placas, tubos y perfiles de aluminio para construcción e industria.',
    keywords: 'aluminio industrial, láminas aluminio, placas aluminio, tubos aluminio, perfiles aluminio, aleaciones aluminio',
    canonical: `${baseUrl}/aluminio`
  },

  'metales-no-ferrosos': {
    title: 'Metales No Ferrosos | Cobre, Latón, Bronce - AINSA',
    description: 'Amplia gama de metales no ferrosos: cobre, latón, bronce y aleaciones especiales para aplicaciones industriales especializadas.',
    keywords: 'metales no ferrosos, cobre industrial, latón, bronce, aleaciones especiales, metales conductivos',
    canonical: `${baseUrl}/metales-no-ferrosos`
  },

  'aceros-carbones-especiales': {
    title: 'Acero al Carbón y Especiales | Aleaciones de Alta Resistencia - AINSA',
    description: 'Aceros al carbón y aleaciones especiales para aplicaciones que requieren alta resistencia, durabilidad y propiedades mecánicas superiores.',
    keywords: 'acero al carbón, aleaciones especiales, aceros alta resistencia, aceros estructurales, aceros herramientas',
    canonical: `${baseUrl}/aceros-carbones-especiales`
  },

  'placas-antidesgaste': {
    title: 'Placas Antidesgaste | Protección Industrial - AINSA',
    description: 'Placas antidesgaste de alta dureza para protección en aplicaciones mineras, construcción y maquinaria pesada. Máxima durabilidad garantizada.',
    keywords: 'placas antidesgaste, protección industrial, minería, construcción, maquinaria pesada, alta dureza',
    canonical: `${baseUrl}/placas-antidesgaste`
  },

  'paneles-acp': {
    title: 'Paneles ACP | Revestimientos Arquitectónicos - AINSA',
    description: 'Paneles de aluminio compuesto (ACP) para revestimientos arquitectónicos. Soluciones estéticas y funcionales para fachadas y interiores.',
    keywords: 'paneles ACP, aluminio compuesto, revestimientos arquitectónicos, fachadas, paneles decorativos',
    canonical: `${baseUrl}/paneles-acp`
  },

  'consumibles-abrasivos': {
    title: 'Consumibles y Abrasivos | Herramientas Industriales - AINSA',
    description: 'Consumibles y abrasivos industriales de primera calidad. Discos de corte, discos de desbaste, electrodos y herramientas especializadas.',
    keywords: 'consumibles industriales, abrasivos, discos corte, discos desbaste, electrodos, herramientas industriales',
    canonical: `${baseUrl}/consumibles-abrasivos`
  },

  'soluciones-irving': {
    title: 'Soluciones IRVING® | Tecnología Avanzada - AINSA',
    description: 'Soluciones especializadas IRVING® para aplicaciones industriales avanzadas. Tecnología de vanguardia en materiales y procesos.',
    keywords: 'soluciones IRVING, tecnología avanzada, materiales especializados, procesos industriales, innovación',
    canonical: `${baseUrl}/soluciones-irving`
  },

  'por-que-inoxidable': {
    title: '¿Por qué Acero Inoxidable? | Ventajas y Beneficios - AINSA',
    description: 'Descubre las ventajas del acero inoxidable: resistencia a la corrosión, durabilidad, higiene, reciclabilidad y versatilidad para múltiples aplicaciones.',
    keywords: 'ventajas acero inoxidable, resistencia corrosión, durabilidad, higiene, reciclable, aplicaciones industriales',
    canonical: `${baseUrl}/por-que-inoxidable`
  },

  'industrias': {
    title: 'Industrias Atendidas | Sectores Especializados - AINSA',
    description: 'Atendemos múltiples sectores industriales: alimentario, farmacéutico, construcción, petroquímico y naval con materiales especializados.',
    keywords: 'industrias atendidas, sector alimentario, farmacéutico, construcción, petroquímico, naval, materiales especializados',
    canonical: `${baseUrl}/industrias`,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Servicios por Industria",
      "description": "Materiales especializados para múltiples sectores industriales",
      "provider": organizationJsonLd,
      "areaServed": "Mexico",
      "serviceType": ["Alimentario", "Farmacéutico", "Construcción", "Petroquímico", "Naval"]
    }
  },

  'nosotros': {
    title: 'Nosotros | Historia y Compromiso de AINSA',
    description: 'Conoce la historia de AINSA, empresa líder en distribución de acero inoxidable con más de X años de experiencia, compromiso con la calidad y servicio excepcional.',
    keywords: 'AINSA historia, empresa acero inoxidable, compromiso calidad, experiencia, liderazgo, distribución industrial',
    canonical: `${baseUrl}/nosotros`,
    jsonLd: {
      ...organizationJsonLd,
      "foundingDate": "YYYY", // Agregar año real de fundación
      "numberOfEmployees": "XX-XX", // Agregar rango real de empleados
      "knowsAbout": ["Acero Inoxidable", "Distribución Industrial", "Materias Primas", "Asesoría Técnica"]
    }
  },

  'contacto': {
    title: 'Contacto | AINSA Acero Inoxidable | Cotizaciones y Asesoría',
    description: 'Contáctanos para cotizaciones, asesoría técnica y atención personalizada. AINSA te ofrece la mejor solución en materias primas industriales.',
    keywords: 'contacto AINSA, cotizaciones, asesoría técnica, atención personalizada, materias primas, acero inoxidable',
    canonical: `${baseUrl}/contacto`,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contacto AINSA",
      "description": "Página de contacto para cotizaciones y asesoría",
      "mainEntity": organizationJsonLd
    }
  }
};

export function getSEOConfig(page: string): SEOConfig {
  return seoConfigs[page] || seoConfigs['home'];
}