import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'motion/react';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeToggle } from "./components/ThemeToggle";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { PageTransition } from "./components/PageTransition";
import { LoadingOverlay } from "./components/LoadingOverlay";
import { SEOHead } from "./components/SEOHead";
import { getSEOConfig } from "./utils/seoConfig";
import { useFavicon } from "./hooks/useFavicon";
import { HomePage } from "./pages/HomePage";
import { ProductosPage } from "./pages/ProductosPage";
import { NosotrosPage } from "./pages/NosotrosPage";
import { ContactoPage } from "./pages/ContactoPage";
import { AcerosInoxidablesPage } from "./pages/AcerosInoxidablesPage";
import { AluminioPage } from "./pages/AluminioPage";
import { MetalesNoFerrososPage } from "./pages/MetalesNoFerrososPage";
import { AcerosCarbonesEspecialesPage } from "./pages/AcerosCarbonesEspecialesPage";
import { PlacasAntidesgastePage } from "./pages/PlacasAntidesgastePage";
import { PanelesACPPage } from "./pages/PanelesACPPage";
import { ConsumiblesAbrasivosPage } from "./pages/ConsumiblesAbrasivosPage";
import { SolucionesIrvingPage } from "./pages/SolucionesIrvingPage";
import { PorQueInoxidablePage } from "./pages/PorQueInoxidablePage";
import { IndustriasPage } from "./pages/IndustriasPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(false);

  // Get SEO configuration for current page
  const seoConfig = getSEOConfig(currentPage);

  // Dynamic favicon based on theme
  useFavicon();

  // Valid pages for routing
  const validPages = [
    'home', 'productos', 'aceros-inoxidables', 'aluminio', 'metales-no-ferrosos',
    'aceros-carbones-especiales', 'placas-antidesgaste', 'paneles-acp',
    'consumibles-abrasivos', 'soluciones-irving', 'por-que-inoxidable',
    'industrias', 'nosotros', 'contacto', '404'
  ];

  // Check for invalid URLs and redirect to 404
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && !validPages.includes(hash)) {
      setCurrentPage('404');
    }
  }, []);

  // Update URL hash for better navigation (optional, helps with analytics)
  useEffect(() => {
    if (currentPage !== 'home' && currentPage !== '404') {
      window.history.replaceState({}, '', `#${currentPage}`);
    } else if (currentPage === 'home') {
      window.history.replaceState({}, '', '/');
    } else if (currentPage === '404') {
      window.history.replaceState({}, '', '/404');
    }
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    if (page === currentPage) return;
    
    // Validate page exists
    if (!validPages.includes(page)) {
      setCurrentPage('404');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate loading time for smooth transition
    setTimeout(() => {
      setCurrentPage(page);
      setIsLoading(false);
      // Smooth scroll to top when navigating
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 150);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'productos':
        return <ProductosPage onNavigate={handleNavigate} />;
      case 'aceros-inoxidables':
        return <AcerosInoxidablesPage onNavigate={handleNavigate} />;
      case 'aluminio':
        return <AluminioPage onNavigate={handleNavigate} />;
      case 'metales-no-ferrosos':
        return <MetalesNoFerrososPage onNavigate={handleNavigate} />;
      case 'aceros-carbones-especiales':
        return <AcerosCarbonesEspecialesPage onNavigate={handleNavigate} />;
      case 'placas-antidesgaste':
        return <PlacasAntidesgastePage onNavigate={handleNavigate} />;
      case 'paneles-acp':
        return <PanelesACPPage onNavigate={handleNavigate} />;
      case 'consumibles-abrasivos':
        return <ConsumiblesAbrasivosPage onNavigate={handleNavigate} />;
      case 'soluciones-irving':
        return <SolucionesIrvingPage onNavigate={handleNavigate} />;
      case 'por-que-inoxidable':
        return <PorQueInoxidablePage onNavigate={handleNavigate} />;
      case 'industrias':
        return <IndustriasPage onNavigate={handleNavigate} />;
      case 'nosotros':
        return <NosotrosPage onNavigate={handleNavigate} />;
      case 'contacto':
        return <ContactoPage onNavigate={handleNavigate} />;
      case '404':
        return <NotFoundPage onNavigate={handleNavigate} />;
      default:
        return <NotFoundPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Dynamic SEO Head */}
      <SEOHead 
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        canonical={seoConfig.canonical}
        ogImage={seoConfig.ogImage}
        jsonLd={seoConfig.jsonLd}
        currentPage={currentPage}
      />
      
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      
      <AnimatePresence mode="wait">
        <PageTransition key={currentPage}>
          {renderCurrentPage()}
        </PageTransition>
      </AnimatePresence>

      <Footer onNavigate={handleNavigate} />
      
      <ThemeToggle />
      <FloatingWhatsApp />
      
      <AnimatePresence>
        <LoadingOverlay isLoading={isLoading} />
      </AnimatePresence>
    </div>
  );
}