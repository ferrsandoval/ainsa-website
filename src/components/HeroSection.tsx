import { useState, useEffect } from "react";
import { motion } from 'motion/react';
import { AnimatedCTAButton } from "./AnimatedButton";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroSectionProps {
  onNavigate?: (page: string) => void;
}

// Importar los logos de AINSA
import logoAinsa from '../assets/logo-ainsa.png';
import logoAinsaDark from '../assets/logo-ainsa-dark.png';

export function HeroSection({ onNavigate }: HeroSectionProps) {
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

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 sm:py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1697281679290-ad7be1b10682?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMG1hbnVmYWN0dXJpbmclMjBpbmR1c3RyaWFsJTIwd2FyZWhvdXNlfGVufDF8fHx8MTc1NzMwNzE4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Industrial steel warehouse"
          className="w-full h-full object-cover"
          applyDarkFilter={true}
        />
        
        {/* Overlay gradients - más sutil para destacar el logo */}
        <div className="absolute inset-0 bg-gradient-to-b from-ainsa-white/95 via-ainsa-white/85 to-ainsa-white/95 dark:from-ainsa-black/95 dark:via-ainsa-black/85 dark:to-ainsa-black/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-ainsa-white/70 via-transparent to-ainsa-white/70 dark:from-ainsa-black/70 dark:via-transparent dark:to-ainsa-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 pt-20 pb-12 sm:pt-24 sm:pb-16">
        <div className="max-w-6xl mx-auto text-center flex flex-col justify-center space-y-4 sm:space-y-6 lg:space-y-8">
          
          {/* Logo centrado */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-3 lg:mb-4 -mt-24 sm:-mt-32 lg:-mt-40"
          >
            <ImageWithFallback 
              src={isDark ? logoAinsaDark : logoAinsa} 
              alt="AINSA - Acero Inoxidable & Metales Industriales" 
              className="w-full max-w-sm lg:max-w-xl h-auto mx-auto"
            />
          </motion.div>
          
          {/* Main heading con tipografía Sui Generis */}
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.9] tracking-tight text-ainsa-black dark:text-ainsa-white"
            style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
          >
            Soluciones integrales en acero inoxidable
            <span 
              className="block mt-2" 
              style={{ fontStyle: 'italic', fontWeight: 400 }}
            >
              y metales industriales
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="max-w-2xl lg:max-w-4xl mx-auto"
          >
            <p 
              className="text-base sm:text-lg lg:text-xl text-ainsa-gray leading-relaxed"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Amplio inventario, calidad certificada y entregas rápidas para la industria de Sonora y todo México.
            </p>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <AnimatedCTAButton 
              className="bg-[#a32714] hover:bg-[#a32714]/90 text-white px-6 py-3 sm:px-8 sm:py-4 h-auto font-medium text-sm sm:text-base rounded-xl shadow-lg min-w-[160px] sm:min-w-[180px] justify-center"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              onClick={() => onNavigate?.('contacto')}
            >
              Solicitar Cotización
            </AnimatedCTAButton>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17
              }}
            >
              <button
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=526624968802&text=Hola,%20quisiera%20obtener%20más%20información%20sobre%20sus%20productos%20y%20servicios.&type=phone_number&app_absent=0', '_blank')}
                className="bg-[#25D366] hover:bg-[#22C55E] text-white font-medium px-6 py-3 sm:px-8 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 whitespace-nowrap min-w-[160px] sm:min-w-[180px] justify-center"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.513"/>
                </svg>
                <span>WhatsApp</span>
              </button>
            </motion.div>
          </motion.div>


        </div>
      </div>
    </section>
  );
}