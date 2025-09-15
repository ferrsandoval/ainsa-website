import React, { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

// Importar los logos de AINSA
import logoAinsa from '../assets/logo-ainsa.png';
import logoAinsaDark from '../assets/logo-ainsa-dark.png';

// Importar los logos de EasyDevs
import logoEasyDevs from '../assets/logo-easydevs.png';
import logoEasyDevsNight from '../assets/logo-easydevs-night.png';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps = {}) {
  const [isDark, setIsDark] = useState(false);

  // Detectar tema actual
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkTheme();
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });
    
    return () => observer.disconnect();
  }, []);

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <footer className="bg-ainsa-white dark:bg-ainsa-black border-t border-ainsa-gray/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Main footer content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
            
            {/* Company Info */}
            <div className="lg:col-span-2 max-w-md">
              <ImageWithFallback 
                src={isDark ? logoAinsaDark : logoAinsa} 
                alt="AINSA - Acero Inoxidable & Metales Industriales" 
                className="h-12 lg:h-14 w-auto mb-6"
              />
              <p 
                className="text-ainsa-gray leading-relaxed mb-6"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                Empresa mexicana especializada en la distribución de materiales, tubería, conexiones y accesorios de acero inoxidable para aplicaciones sanitarias, industriales y ornamentales.
              </p>
              
              {/* Contact Quick Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-ainsa-gray">
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                  <span 
                    className="text-sm"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                  >
                    Tlaxcala 328, Hermosillo, Sonora, México
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-ainsa-gray">
                  <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                  <span 
                    className="text-sm"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                  >
                    662-438-5634 | 662-170-2822 | 662-496-8802 | 662-419-9080
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-ainsa-gray">
                  <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                  <a 
                    href="mailto:ventas@inoxidablesainsa.mx"
                    className="text-sm hover:text-ainsa-black dark:text-ainsa-white transition-colors"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                  >
                    ventas@inoxidablesainsa.mx
                  </a>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <div>
              <h4 
                className="caption text-ainsa-black dark:text-ainsa-white mb-6"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
              >
                Navegación
              </h4>
              <nav className="space-y-4">
                <button 
                  onClick={() => handleNavigation('home')}
                  className="block text-ainsa-gray hover:text-ainsa-black dark:text-ainsa-white transition-colors text-left"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                >
                  Inicio
                </button>
                <button 
                  onClick={() => handleNavigation('productos')}
                  className="block text-ainsa-gray hover:text-ainsa-black dark:text-ainsa-white transition-colors text-left"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                >
                  Productos
                </button>
                <button 
                  onClick={() => handleNavigation('por-que-inoxidable')}
                  className="block text-ainsa-gray hover:text-ainsa-black dark:text-ainsa-white transition-colors text-left"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                >
                  ¿Por qué Inoxidable?
                </button>
                <button 
                  onClick={() => handleNavigation('nosotros')}
                  className="block text-ainsa-gray hover:text-ainsa-black dark:text-ainsa-white transition-colors text-left"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                >
                  Nosotros
                </button>
                <button 
                  onClick={() => handleNavigation('contacto')}
                  className="block text-ainsa-gray hover:text-ainsa-black dark:text-ainsa-white transition-colors text-left"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                >
                  Contacto
                </button>
              </nav>
            </div>
            
            {/* Productos */}
            <div>
              <h4 
                className="caption text-ainsa-black dark:text-ainsa-white mb-6"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
              >
                Productos
              </h4>
              <nav className="space-y-4">
                <button 
                  onClick={() => handleNavigation('aceros-inoxidables')}
                  className="block text-ainsa-gray hover:text-ainsa-black dark:text-ainsa-white transition-colors text-left"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                >
                  Aceros Inoxidables
                </button>
                <button 
                  onClick={() => handleNavigation('aleaciones-especiales')}
                  className="block text-ainsa-gray hover:text-ainsa-black dark:text-ainsa-white transition-colors text-left"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                >
                  Aleaciones Especiales
                </button>
                <button 
                  onClick={() => handleNavigation('placas-laminas')}
                  className="block text-ainsa-gray hover:text-ainsa-black dark:text-ainsa-white transition-colors text-left"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                >
                  Placas y Láminas
                </button>
                <button 
                  onClick={() => handleNavigation('tubos-perfiles')}
                  className="block text-ainsa-gray hover:text-ainsa-black dark:text-ainsa-white transition-colors text-left"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                >
                  Tubos y Perfiles
                </button>
              </nav>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-border/30 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-1">
              <p 
                className="text-ainsa-gray text-sm"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                © 2025 AINSA Acero Inoxidable.
              </p>
              <p 
                className="text-ainsa-gray text-sm"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                Todos los derechos reservados.
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              <span 
                className="text-ainsa-gray text-sm"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                Design by
              </span>
              <a 
                href="https://easydevs.us" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1 hover:opacity-80 transition-opacity"
              >
                <ImageWithFallback 
                  src={isDark ? logoEasyDevsNight : logoEasyDevs} 
                  alt="EasyDevs" 
                  className="h-7 w-auto"
                />
                <ExternalLink className="w-3 h-3 text-ainsa-gray" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}