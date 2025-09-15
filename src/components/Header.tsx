import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'motion/react';
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";

// Importar los logos de AINSA
import logoAinsa from '../assets/logo-ainsa.png';
import logoAinsaDark from '../assets/logo-ainsa-dark.png';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMobileProductsOpen(false);
  };
  const toggleMobileProducts = () => setIsMobileProductsOpen(!isMobileProductsOpen);

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

  return (
    <header className="w-full bg-background/95 backdrop-blur-md sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            {/* Logo completo para desktop */}
            <ImageWithFallback 
              src={isDark ? logoAinsaDark : logoAinsa} 
              alt="AINSA - Acero Inoxidable & Metales Industriales" 
              className="h-12 lg:h-16 xl:h-18 w-auto hidden md:block hover:opacity-80 transition-opacity"
            />
            {/* Logo símbolo para mobile */}
            <ImageWithFallback 
              src={isDark ? logoAinsaDark : logoAinsa} 
              alt="AINSA" 
              className="h-10 w-auto md:hidden hover:opacity-80 transition-opacity"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            {/* Dropdown Productos */}
            <div className="relative group">
              <button 
                className={`flex items-center space-x-1 transition-colors duration-300 py-2 ${
                  currentPage.includes('productos') || currentPage.includes('aceros') || currentPage.includes('aluminio') || currentPage.includes('metales') || currentPage.includes('placas') || currentPage.includes('paneles') || currentPage.includes('consumibles') || currentPage.includes('soluciones') ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <span>Productos</span>
                <ChevronDown className="w-4 h-4 text-foreground transition-transform duration-200 group-hover:rotate-180" />
              </button>
              
              {/* Dropdown Menu */}
              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="absolute top-full left-0 mt-2 w-80 bg-[#4a4a4a] dark:bg-[#a7a9ac] border border-[#4a4a4a]/50 dark:border-[#a7a9ac]/50 rounded-xl shadow-2xl py-4 z-50"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <motion.button 
                      onClick={() => onNavigate('productos')}
                      className="block w-full text-left px-6 py-3 text-ainsa-white hover:text-ainsa-white hover:bg-[#a7a9ac] dark:hover:bg-[#4a4a4a] transition-colors border-b border-ainsa-white/20 dark:border-ainsa-white/10"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      Ver Todos los Productos
                    </motion.button>
                    <motion.button 
                      onClick={() => onNavigate('aceros-inoxidables')}
                      className="block w-full text-left px-6 py-3 text-ainsa-white hover:text-ainsa-white hover:bg-[#a7a9ac] dark:hover:bg-[#4a4a4a] transition-colors"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      Acero Inoxidable
                    </motion.button>
                    <motion.button 
                      onClick={() => onNavigate('aluminio')}
                      className="block w-full text-left px-6 py-3 text-ainsa-white hover:text-ainsa-white hover:bg-[#a7a9ac] dark:hover:bg-[#4a4a4a] transition-colors"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      Aluminio
                    </motion.button>
                    <motion.button 
                      onClick={() => onNavigate('metales-no-ferrosos')}
                      className="block w-full text-left px-6 py-3 text-ainsa-white hover:text-ainsa-white hover:bg-[#a7a9ac] dark:hover:bg-[#4a4a4a] transition-colors"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      Metales No Ferrosos
                    </motion.button>
                    <motion.button 
                      onClick={() => onNavigate('aceros-carbones-especiales')}
                      className="block w-full text-left px-6 py-3 text-ainsa-white hover:text-ainsa-white hover:bg-[#a7a9ac] dark:hover:bg-[#4a4a4a] transition-colors"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      Acero al Carbón y Especiales
                    </motion.button>
                    <motion.button 
                      onClick={() => onNavigate('placas-antidesgaste')}
                      className="block w-full text-left px-6 py-3 text-ainsa-white hover:text-ainsa-white hover:bg-[#a7a9ac] dark:hover:bg-[#4a4a4a] transition-colors"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      Placas Antidesgaste
                    </motion.button>
                    <motion.button 
                      onClick={() => onNavigate('paneles-acp')}
                      className="block w-full text-left px-6 py-3 text-ainsa-white hover:text-ainsa-white hover:bg-[#a7a9ac] dark:hover:bg-[#4a4a4a] transition-colors"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      Paneles ACP
                    </motion.button>
                    <motion.button 
                      onClick={() => onNavigate('consumibles-abrasivos')}
                      className="block w-full text-left px-6 py-3 text-ainsa-white hover:text-ainsa-white hover:bg-[#a7a9ac] dark:hover:bg-[#4a4a4a] transition-colors"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      Consumibles y Abrasivos
                    </motion.button>
                    <motion.button 
                      onClick={() => onNavigate('soluciones-irving')}
                      className="block w-full text-left px-6 py-3 text-ainsa-white hover:text-ainsa-white hover:bg-[#a7a9ac] dark:hover:bg-[#4a4a4a] transition-colors"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      Soluciones IRVING®
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button 
              onClick={() => onNavigate('por-que-inoxidable')}
              className={`transition-colors duration-300 ${
                currentPage === 'por-que-inoxidable' ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              ¿Por qué Inoxidable?
            </button>

            <button 
              onClick={() => onNavigate('industrias')}
              className={`transition-colors duration-300 ${
                currentPage === 'industrias' ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Industrias
            </button>

            <button 
              onClick={() => onNavigate('nosotros')}
              className={`transition-colors duration-300 ${
                currentPage === 'nosotros' ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Nosotros
            </button>

            <button 
              onClick={() => onNavigate('contacto')}
              className={`transition-colors duration-300 ${
                currentPage === 'contacto' ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Contacto
            </button>
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=526624968802&text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20productos%20y%20servicios%20de%20acero%20inoxidable.&type=phone_number&app_absent=0', '_blank')}
              className="bg-[#25D366] hover:bg-[#22C55E] text-white font-medium px-6 py-2.5 rounded-xl flex items-center space-x-2 transition-all duration-300"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.513"/>
              </svg>
              <span>WhatsApp</span>
            </Button>
            <Button 
              onClick={() => onNavigate('contacto')}
              className="bg-[#a32714] hover:bg-[#a32714]/90 text-white font-medium px-6 py-2.5 rounded-xl"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Cotizar Ahora
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={toggleMenu}
              className="p-2 hover:bg-muted"
            >
              {isMenuOpen ? 
                <X className="w-6 h-6 text-foreground" /> : 
                <Menu className="w-6 h-6 text-foreground" />
              }
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pb-6">
                <nav className="pt-4 space-y-2 border-t border-border/20">
                  
                  {/* Productos Dropdown */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <button 
                        onClick={() => { onNavigate('productos'); closeMenu(); }}
                        className={`flex-1 text-left py-3 transition-colors ${
                          currentPage.includes('productos') || currentPage.includes('aceros') || currentPage.includes('aluminio') || currentPage.includes('metales') || currentPage.includes('placas') || currentPage.includes('paneles') || currentPage.includes('consumibles') || currentPage.includes('soluciones') ? 'text-primary' : 'text-foreground hover:text-primary'
                        }`}
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                      >
                        Productos
                      </button>
                      <button 
                        onClick={toggleMobileProducts}
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <motion.div
                          animate={{ rotate: isMobileProductsOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </button>
                    </div>
                    
                    <AnimatePresence>
                      {isMobileProductsOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="overflow-hidden"
                        >
                          <div className="ml-6 mr-2 mt-2 space-y-1 bg-muted/30 rounded-lg p-3">
                            <motion.button 
                              onClick={() => { onNavigate('aceros-inoxidables'); closeMenu(); }}
                              className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors"
                              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                              whileHover={{ x: 4 }}
                              transition={{ duration: 0.15 }}
                            >
                              Acero Inoxidable
                            </motion.button>
                            <motion.button 
                              onClick={() => { onNavigate('aluminio'); closeMenu(); }}
                              className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors"
                              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                              whileHover={{ x: 4 }}
                              transition={{ duration: 0.15 }}
                            >
                              Aluminio
                            </motion.button>
                            <motion.button 
                              onClick={() => { onNavigate('metales-no-ferrosos'); closeMenu(); }}
                              className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors"
                              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                              whileHover={{ x: 4 }}
                              transition={{ duration: 0.15 }}
                            >
                              Metales No Ferrosos
                            </motion.button>
                            <motion.button 
                              onClick={() => { onNavigate('aceros-carbones-especiales'); closeMenu(); }}
                              className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors"
                              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                              whileHover={{ x: 4 }}
                              transition={{ duration: 0.15 }}
                            >
                              Acero al Carbón y Especiales
                            </motion.button>
                            <motion.button 
                              onClick={() => { onNavigate('placas-antidesgaste'); closeMenu(); }}
                              className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors"
                              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                              whileHover={{ x: 4 }}
                              transition={{ duration: 0.15 }}
                            >
                              Placas Antidesgaste
                            </motion.button>
                            <motion.button 
                              onClick={() => { onNavigate('paneles-acp'); closeMenu(); }}
                              className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors"
                              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                              whileHover={{ x: 4 }}
                              transition={{ duration: 0.15 }}
                            >
                              Paneles ACP
                            </motion.button>
                            <motion.button 
                              onClick={() => { onNavigate('consumibles-abrasivos'); closeMenu(); }}
                              className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors"
                              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                              whileHover={{ x: 4 }}
                              transition={{ duration: 0.15 }}
                            >
                              Consumibles y Abrasivos
                            </motion.button>
                            <motion.button 
                              onClick={() => { onNavigate('soluciones-irving'); closeMenu(); }}
                              className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors"
                              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                              whileHover={{ x: 4 }}
                              transition={{ duration: 0.15 }}
                            >
                              Soluciones IRVING®
                            </motion.button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Navigation Links */}
                  <motion.button 
                    onClick={() => { onNavigate('por-que-inoxidable'); closeMenu(); }}
                    className={`block w-full text-left py-3 transition-colors ${
                      currentPage === 'por-que-inoxidable' ? 'text-primary' : 'text-foreground hover:text-primary'
                    }`}
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.15 }}
                  >
                    ¿Por qué Inoxidable?
                  </motion.button>

                  <motion.button 
                    onClick={() => { onNavigate('industrias'); closeMenu(); }}
                    className={`block w-full text-left py-3 transition-colors ${
                      currentPage === 'industrias' ? 'text-primary' : 'text-foreground hover:text-primary'
                    }`}
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.15 }}
                  >
                    Industrias
                  </motion.button>

                  <motion.button 
                    onClick={() => { onNavigate('nosotros'); closeMenu(); }}
                    className={`block w-full text-left py-3 transition-colors ${
                      currentPage === 'nosotros' ? 'text-primary' : 'text-foreground hover:text-primary'
                    }`}
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.15 }}
                  >
                    Nosotros
                  </motion.button>

                  <motion.button 
                    onClick={() => { onNavigate('contacto'); closeMenu(); }}
                    className={`block w-full text-left py-3 transition-colors ${
                      currentPage === 'contacto' ? 'text-primary' : 'text-foreground hover:text-primary'
                    }`}
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.15 }}
                  >
                    Contacto
                  </motion.button>
                  
                  {/* Mobile CTA Buttons */}
                  <div className="pt-4 space-y-3 border-t border-border/20">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button 
                        onClick={() => {
                          closeMenu();
                          window.open('https://api.whatsapp.com/send/?phone=526624968802&text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20productos%20y%20servicios%20de%20acero%20inoxidable.&type=phone_number&app_absent=0', '_blank');
                        }}
                        className="w-full bg-[#25D366] hover:bg-[#22C55E] text-white font-medium flex items-center justify-center space-x-2 rounded-xl py-3"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.513"/>
                        </svg>
                        <span>WhatsApp</span>
                      </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button 
                        onClick={() => {
                          closeMenu();
                          onNavigate('contacto');
                        }}
                        className="w-full bg-[#a32714] hover:bg-[#a32714]/90 text-white font-medium rounded-xl py-3"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                      >
                        Cotizar Ahora
                      </Button>
                    </motion.div>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}