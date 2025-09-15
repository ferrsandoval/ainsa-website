import { motion } from 'motion/react';

export function ValuesSection() {
  const values = [
    {
      title: "Calidad certificada en cada material",
      description: "Todos nuestros productos cuentan con certificados de origen y calidad de fabricantes reconocidos mundialmente.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Amplio stock para entregas rápidas",
      description: "Mantenemos un inventario extenso que nos permite garantizar entregas en tiempo récord para proyectos urgentes.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: "Asesoría técnica especializada",
      description: "Nuestro equipo de expertos te acompaña en la selección de materiales ideales para tu proyecto específico.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Atención personalizada y trato profesional",
      description: "Cada cliente recibe un servicio personalizado con el compromiso de brindar la mejor experiencia comercial.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-ainsa-gray/10 dark:bg-ainsa-gray/20">
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
              className="caption text-accent bg-background/80 px-4 py-2 rounded-full border border-border/30 mb-6 inline-block"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              ¿POR QUÉ ELEGIR AINSA?
            </span>
            <h2 
              className="text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight text-ainsa-black dark:text-ainsa-white mb-6"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
            >
              Valores
              <span 
                className="block text-accent"
                style={{ fontStyle: 'italic', fontWeight: 400 }}
              >
                Diferenciales
              </span>
            </h2>
            <p 
              className="text-lg lg:text-xl text-ainsa-gray leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Lo que nos distingue en el mercado del acero inoxidable y metales industriales del noroeste de México.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-background rounded-2xl p-8 lg:p-10 shadow-sm border border-border/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  {/* Checkmark Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 
                      className="text-xl lg:text-2xl mb-3 text-ainsa-black dark:text-ainsa-white"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                    >
                      {value.title}
                    </h3>
                    <p 
                      className="text-ainsa-gray leading-relaxed"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                    >
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p 
              className="text-lg text-ainsa-gray mb-8"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Descubre cómo podemos impulsar tu próximo proyecto con soluciones de calidad certificada.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl shadow-lg transition-all duration-300"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Solicitar Cotización
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}