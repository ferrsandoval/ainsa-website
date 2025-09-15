import { motion } from 'motion/react';

export function MissionVisionSection() {
  return (
    <section className="py-24 lg:py-32 bg-ainsa-gray/10 dark:bg-ainsa-gray/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span 
              className="caption text-ainsa-red bg-ainsa-white dark:bg-ainsa-black/80 px-4 py-2 rounded-full border border-ainsa-gray/30 mb-6 inline-block"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              NUESTRA FILOSOFÍA
            </span>
            <h2 
              className="text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight text-ainsa-black dark:text-ainsa-white"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
            >
              Misión y Visión
            </h2>
          </motion.div>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-ainsa-white dark:bg-ainsa-black rounded-2xl p-8 lg:p-10 shadow-sm border border-ainsa-gray/30"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-ainsa-red/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-ainsa-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 
                  className="text-2xl lg:text-3xl mb-4 text-ainsa-black dark:text-ainsa-white"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                >
                  Misión
                </h3>
              </div>
              <p 
                className="text-lg text-ainsa-gray leading-relaxed"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                Proveer soluciones en acero inoxidable, aluminio y metales industriales de calidad certificada, 
                con eficiencia, atención personalizada y servicio ágil.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-ainsa-white dark:bg-ainsa-black rounded-2xl p-8 lg:p-10 shadow-sm border border-ainsa-gray/30"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-ainsa-red/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-ainsa-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 
                  className="text-2xl lg:text-3xl mb-4 text-ainsa-black dark:text-ainsa-white"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                >
                  Visión
                </h3>
              </div>
              <p 
                className="text-lg text-ainsa-gray leading-relaxed"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                Ser la empresa líder en soluciones de metales industriales en el noroeste de México, 
                impulsando la innovación y el desarrollo industrial a través de un servicio integral.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}