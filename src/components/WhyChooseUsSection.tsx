import { motion } from 'motion/react';
import { Clock, Shield, Users, Truck } from 'lucide-react';

interface WhyChooseUsSectionProps {
  onNavigate?: (page: string) => void;
}

export function WhyChooseUsSection({ onNavigate }: WhyChooseUsSectionProps) {
  const reasons = [
    {
      icon: Clock,
      title: "Entrega Rápida",
      description: "Stock permanente y logística optimizada para entrega en 24-48 horas",
      metric: "48h",
      detail: "Tiempo promedio"
    },
    {
      icon: Shield,
      title: "Calidad Garantizada",
      description: "Materiales certificados con trazabilidad completa y respaldo de garantía",
      metric: "100%",
      detail: "Materiales certificados"
    },
    {
      icon: Users,
      title: "Asesoría Especializada",
      description: "Equipo técnico especializado para encontrar la solución perfecta",
      metric: "24/7",
      detail: "Soporte técnico"
    },
    {
      icon: Truck,
      title: "Cobertura Nacional",
      description: "Red de distribución que abarca todo México con entregas puntuales",
      metric: "99.8%",
      detail: "Satisfacción del cliente"
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
              className="caption text-accent bg-background px-4 py-2 rounded-full border border-border/30 mb-6 inline-block"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              ¿POR QUÉ ELEGIRNOS?
            </span>
            <h2 
              className="text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight text-ainsa-black dark:text-ainsa-white mb-6"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
            >
              Tu Socio Estratégico en
              <span 
                className="block text-accent"
                style={{ fontStyle: 'italic', fontWeight: 400 }}
              >
                Materias Primas
              </span>
            </h2>
            <p 
              className="text-lg lg:text-xl text-ainsa-gray leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Más que un proveedor, somos tu aliado para el éxito. Descubre por qué las empresas 
              líderes confían en AINSA para sus proyectos más importantes.
            </p>
          </motion.div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-background border border-border/50 rounded-2xl p-8 hover:border-accent/50 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  {/* Icon and Metric */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent/10 to-primary/10 border border-border/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                    <div className="text-right">
                      <div 
                        className="text-3xl lg:text-4xl font-bold text-ainsa-black dark:text-ainsa-white group-hover:text-ainsa-red transition-colors duration-300"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                      >
                        {reason.metric}
                      </div>
                      <p 
                        className="text-xs text-ainsa-gray uppercase tracking-wide"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                      >
                        {reason.detail}
                      </p>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h3 
                      className="text-xl lg:text-2xl text-ainsa-black dark:text-ainsa-white group-hover:text-ainsa-red transition-colors duration-300"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                    >
                      {reason.title}
                    </h3>
                    <p 
                      className="text-ainsa-gray leading-relaxed"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                    >
                      {reason.description}
                    </p>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-border/30 rounded-2xl p-8 lg:p-12">
              <h3 
                className="text-2xl lg:text-3xl text-ainsa-black dark:text-ainsa-white mb-4"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
              >
                ¿Listo para experimentar la diferencia AINSA?
              </h3>
              <p 
                className="text-ainsa-gray mb-6 max-w-2xl mx-auto"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                Únete a las empresas que ya confían en nosotros para sus proyectos más exigentes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-ainsa-red hover:bg-ainsa-red/90 text-ainsa-white px-8 py-3 rounded-xl font-medium transition-colors"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                  onClick={() => onNavigate?.('contacto')}
                >
                  Contactar Ahora
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border border-ainsa-gray/30 hover:bg-ainsa-gray/10 text-ainsa-black dark:text-ainsa-white px-8 py-3 rounded-xl font-medium transition-colors"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                  onClick={() => window.open('https://api.whatsapp.com/send/?phone=526624968802&text=Hola,%20me%20gustaría%20recibir%20información%20sobre%20su%20catálogo%20de%20productos.&type=phone_number&app_absent=0', '_blank')}
                >
                  Ver Catálogo
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}