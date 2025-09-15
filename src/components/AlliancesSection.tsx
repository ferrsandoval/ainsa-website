import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AlliancesSection() {
  const benefits = [
    {
      title: "Disponibilidad inmediata",
      description: "Stock permanente de los productos más demandados",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Precios competitivos",
      description: "Tarifas preferenciales por volumen de compra",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      title: "Respaldo de marcas reconocidas",
      description: "Productos IRVING® en rejillas, barandales y soluciones de seguridad",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
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
              NUESTRAS ALIANZAS
            </span>
            <h2 
              className="text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight text-ainsa-black dark:text-ainsa-white mb-6"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
            >
              Alianzas
              <span 
                className="block text-ainsa-red"
                style={{ fontStyle: 'italic', fontWeight: 400 }}
              >
                Estratégicas
              </span>
            </h2>
            <p 
              className="text-lg lg:text-xl text-ainsa-gray leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Gracias a nuestras alianzas con fabricantes internacionales y distribuidores líderes 
              en México y EE. UU., garantizamos los mejores productos y servicios.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="space-y-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-ainsa-red/10 rounded-xl flex items-center justify-center">
                        <div className="text-ainsa-red">
                          {benefit.icon}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 
                        className="text-xl lg:text-2xl mb-2 text-ainsa-black dark:text-ainsa-white"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                      >
                        {benefit.title}
                      </h3>
                      <p 
                        className="text-ainsa-gray leading-relaxed"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                      >
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* IRVING Brand Highlight */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-12 p-6 bg-ainsa-red/5 rounded-2xl border border-ainsa-red/20"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-ainsa-red/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-ainsa-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h4 
                    className="text-lg text-ainsa-red font-bold"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                  >
                    Marca IRVING®
                  </h4>
                </div>
                <p 
                  className="text-ainsa-gray"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                >
                  Distribuidor autorizado de productos IRVING® para rejillas electroforjadas, 
                  barandales y soluciones de seguridad industrial de alta calidad.
                </p>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGFydG5lcnNoaXAlMjBoYW5kc2hha2V8ZW58MXx8fHwxNzU3MzA3MTgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Industrial partnership handshake"
                  className="w-full aspect-square object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-foreground/20 rounded-2xl" />
              </div>
            </motion.div>
          </div>

          {/* Additional Partners Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h3 
              className="text-2xl lg:text-3xl mb-8 text-ainsa-black dark:text-ainsa-white"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
            >
              Fabricantes y Distribuidores Internacionales
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center justify-center p-6 bg-ainsa-gray/10 dark:bg-ainsa-gray/20/30 rounded-xl">
                <span 
                  className="text-ainsa-gray font-medium"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                >
                  México
                </span>
              </div>
              <div className="flex items-center justify-center p-6 bg-ainsa-gray/10 dark:bg-ainsa-gray/20/30 rounded-xl">
                <span 
                  className="text-ainsa-gray font-medium"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                >
                  EE. UU.
                </span>
              </div>
              <div className="flex items-center justify-center p-6 bg-ainsa-gray/10 dark:bg-ainsa-gray/20/30 rounded-xl">
                <span 
                  className="text-ainsa-gray font-medium"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                >
                  Europa
                </span>
              </div>
              <div className="flex items-center justify-center p-6 bg-ainsa-gray/10 dark:bg-ainsa-gray/20/30 rounded-xl">
                <span 
                  className="text-ainsa-gray font-medium"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                >
                  Asia
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}