import React from 'react';
import { motion } from 'motion/react';
import { Home, ArrowLeft, Search, Phone } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate?: (page: string) => void;
}

export function NotFoundPage({ onNavigate }: NotFoundPageProps) {

  const handleGoHome = () => {
    if (onNavigate) {
      onNavigate('home');
    } else {
      window.location.href = '/';
    }
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const handleNavigate = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      window.location.href = `/#${page}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-ainsa-white to-ainsa-gray/20 dark:from-ainsa-black dark:to-ainsa-gray/20 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* 404 Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="text-9xl font-bold text-ainsa-red mb-4">
            404
          </div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-ainsa-red to-ainsa-red/80 mx-auto rounded-full"
          />
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-ainsa-black dark:text-ainsa-white mb-4">
            ¡Oops! Página no encontrada
          </h1>
          <p className="text-xl text-ainsa-gray mb-6">
            La página que buscas no existe o ha sido movida.
          </p>
          <p className="text-lg text-ainsa-gray/80">
            No te preocupes, te ayudamos a encontrar lo que necesitas.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGoHome}
            className="bg-ainsa-red hover:bg-ainsa-red/90 text-ainsa-white px-8 py-4 rounded-lg font-semibold flex items-center gap-3 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <Home className="w-5 h-5" />
            Ir al Inicio
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGoBack}
            className="bg-ainsa-gray/20 hover:bg-ainsa-gray/30 dark:bg-ainsa-gray/20 dark:hover:bg-ainsa-gray/30 text-ainsa-black dark:text-ainsa-white px-8 py-4 rounded-lg font-semibold flex items-center gap-3 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver Atrás
          </motion.button>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
        >
          <h2 className="text-2xl font-bold text-ainsa-black dark:text-ainsa-white mb-6">
            Enlaces Útiles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Productos */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-ainsa-gray/10 dark:bg-ainsa-gray/20 rounded-xl hover:bg-ainsa-gray/20 dark:hover:bg-ainsa-gray/30 transition-colors duration-200 cursor-pointer"
              onClick={() => handleNavigate('productos')}
            >
              <div className="w-12 h-12 bg-ainsa-red rounded-lg flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-ainsa-black dark:text-ainsa-white mb-2">
                Productos
              </h3>
              <p className="text-ainsa-gray text-sm">
                Explora nuestro catálogo de acero inoxidable y metales industriales
              </p>
            </motion.div>

            {/* Servicios */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-ainsa-gray/10 dark:bg-ainsa-gray/20 rounded-xl hover:bg-ainsa-gray/20 dark:hover:bg-ainsa-gray/30 transition-colors duration-200 cursor-pointer"
              onClick={() => handleNavigate('servicios')}
            >
              <div className="w-12 h-12 bg-ainsa-red rounded-lg flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-ainsa-black dark:text-ainsa-white mb-2">
                Servicios
              </h3>
              <p className="text-ainsa-gray text-sm">
                Conoce nuestros servicios especializados en metales industriales
              </p>
            </motion.div>

            {/* Contacto */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-ainsa-gray/10 dark:bg-ainsa-gray/20 rounded-xl hover:bg-ainsa-gray/20 dark:hover:bg-ainsa-gray/30 transition-colors duration-200 cursor-pointer"
              onClick={() => handleNavigate('contacto')}
            >
              <div className="w-12 h-12 bg-ainsa-red rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-ainsa-black dark:text-ainsa-white mb-2">
                Contacto
              </h3>
              <p className="text-ainsa-gray text-sm">
                Ponte en contacto con nuestro equipo de expertos
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            ¿Necesitas ayuda? Contáctanos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-ainsa-gray/80">
            <span>📞 662-438-5634</span>
            <span>📧 info@inoxidablesainsa.mx</span>
            <span>📍 Hermosillo, Sonora</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
