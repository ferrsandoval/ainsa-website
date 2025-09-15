import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SectorsSection() {
  const sectors = [
    {
      title: "Construcción",
      description: "Materiales de alta calidad para proyectos de infraestructura y edificación.",
      icon: "🏗️"
    },
    {
      title: "Minería",
      description: "Soluciones especializadas para la industria minera y extractiva.",
      icon: "⛏️"
    },
    {
      title: "Agroindustria",
      description: "Materiales resistentes para el sector agrícola e industrial alimentario.",
      icon: "🌾"
    },
    {
      title: "Arquitectura e Infraestructura",
      description: "Elementos decorativos y estructurales para proyectos arquitectónicos.",
      icon: "🏛️"
    },
    {
      title: "Industria Manufacturera",
      description: "Componentes y materiales para procesos de manufactura industrial.",
      icon: "🏭"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-ainsa-white dark:bg-ainsa-black">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span 
              className="caption text-ainsa-red bg-ainsa-gray/10 dark:bg-ainsa-gray/20/50 px-4 py-2 rounded-full border border-ainsa-gray/30 mb-6 inline-block"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              INDUSTRIAS
            </span>
            <h2 
              className="text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight text-ainsa-black dark:text-ainsa-white mb-6"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
            >
              Sectores que
              <span 
                className="block text-ainsa-red"
                style={{ fontStyle: 'italic', fontWeight: 400 }}
              >
                Atendemos
              </span>
            </h2>
            <p 
              className="text-lg lg:text-xl text-ainsa-gray leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Nuestros productos impulsan proyectos en múltiples sectores industriales, 
              proporcionando soluciones especializadas para cada necesidad.
            </p>
          </motion.div>

          {/* Sectors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-ainsa-gray/10 dark:bg-ainsa-gray/20/30 rounded-2xl p-8 hover:bg-ainsa-red/5 transition-colors duration-300 border border-ainsa-gray/30"
              >
                <div className="mb-6">
                  <div className="text-4xl mb-4">{sector.icon}</div>
                  <h3 
                    className="text-xl lg:text-2xl mb-3 text-ainsa-black dark:text-ainsa-white group-hover:text-ainsa-red transition-colors duration-300"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                  >
                    {sector.title}
                  </h3>
                </div>
                <p 
                  className="text-ainsa-gray leading-relaxed"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                >
                  {sector.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Background Industrial Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjaWxpdHklMjBtZXRhbCUyMHN0ZWVsfGVufDF8fHx8MTc1NzMwNzE4MXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Industrial facility"
              className="w-full h-64 lg:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-start px-8 lg:px-12">
              <div className="max-w-lg">
                <h3 
                  className="text-2xl lg:text-3xl text-white mb-4"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                >
                  Impulsando la Industria Mexicana
                </h3>
                <p 
                  className="text-white/90 leading-relaxed"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                >
                  Con más de 25 años de experiencia, hemos participado en proyectos que han transformado 
                  la industria del noroeste de México.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}