import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Building2, Pickaxe, Sprout, Factory, Building } from 'lucide-react';

interface IndustriasPageProps {
  onNavigate: (page: string) => void;
}

export function IndustriasPage({ onNavigate }: IndustriasPageProps) {
  const industrias = [
    {
      icon: Building2,
      emoji: "🏗️",
      title: "Construcción e Infraestructura",
      subtitle: "Soluciones resistentes y confiables para proyectos arquitectónicos, estructurales y de gran escala.",
      productos: [
        "Acero inoxidable para acabados y estructuras",
        "Paneles de aluminio compuesto para fachadas modernas",
        "Aceros estructurales y placas de alto rendimiento"
      ],
      beneficio: "Materiales duraderos que cumplen con normas internacionales y mejoran la estética y seguridad de las obras.",
      imageUrl: "https://images.unsplash.com/photo-1691760300575-6cce80be7541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBpbmZyYXN0cnVjdHVyZSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc1NzM1MjI4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Pickaxe,
      emoji: "⚙️",
      title: "Minería y Maquinaria Pesada",
      subtitle: "Metales diseñados para soportar ambientes extremos y alto desgaste.",
      productos: [
        "Placas antidesgaste de hasta 100+ mm",
        "Aceros para maquinaria y herramientas (O1, A2, D2, H13, P20)",
        "Aleaciones especiales y aceros de alto impacto"
      ],
      beneficio: "Mayor vida útil en equipos y reducción de costos de mantenimiento.",
      imageUrl: "https://images.unsplash.com/photo-1652248718403-354f8394773d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBoZWF2eSUyMG1hY2hpbmVyeSUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzU3MzUyMjg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Sprout,
      emoji: "🌱",
      title: "Agroindustria",
      subtitle: "Respaldo metálico para procesos productivos y de almacenamiento.",
      productos: [
        "Tuberías y conexiones sanitarias en acero inoxidable",
        "Válvulas, bombas y herrajes de grado alimenticio",
        "Láminas y estructuras resistentes a la corrosión"
      ],
      beneficio: "Higiene, durabilidad y cumplimiento de estándares en procesos agroalimentarios.",
      imageUrl: "https://images.unsplash.com/photo-1651525670054-279c154bc3b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZvb2QlMjBwcm9jZXNzaW5nJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NTczNTIyOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Factory,
      emoji: "🏭",
      title: "Industria Manufacturera",
      subtitle: "Materiales versátiles que se adaptan a procesos productivos y de transformación.",
      productos: [
        "Aceros laminados en caliente y frío",
        "Metales no ferrosos: cobre, latón, bronce, plomo y zinc",
        "Consumibles y abrasivos para producción continua"
      ],
      beneficio: "Eficiencia operativa y suministro confiable que asegura la continuidad de la línea de producción.",
      imageUrl: "https://images.unsplash.com/photo-1720036237193-ea82bdac7be0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwaW5kdXN0cnklMjBmYWN0b3J5JTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NTczNTIyOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Building,
      emoji: "🏢",
      title: "Arquitectura y Diseño",
      subtitle: "Estética, resistencia y vanguardia en cada detalle.",
      productos: [
        "Rejillas electroforjadas y barandales IRVING®",
        "Aluminio en múltiples acabados y perfiles",
        "Paneles ACP para interiores y exteriores"
      ],
      beneficio: "Proyectos arquitectónicos con alto valor estético y funcional, respaldados por materiales de primera calidad.",
      imageUrl: "https://images.unsplash.com/photo-1625201212921-1c5e5557d451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBkZXNpZ24lMjBtb2Rlcm4lMjBidWlsZGluZ3xlbnwxfHx8fDE3NTczNTIyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const ventajas = [
    {
      icon: "📦",
      title: "Amplio stock y disponibilidad inmediata"
    },
    {
      icon: "✅",
      title: "Certificación de materiales bajo normas nacionales e internacionales"
    },
    {
      icon: "👷",
      title: "Asesoría técnica especializada en cada proyecto"
    },
    {
      icon: "⏱️",
      title: "Entregas rápidas y seguras en todo México"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
        
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span 
                className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full mb-6"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
              >
                Sectores Industriales
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-6 text-foreground"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
            >
              Industrias que Impulsamos
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              En AINSA Acero Inoxidable entendemos que cada sector tiene necesidades únicas. Por 
              eso ofrecemos metales industriales de calidad certificada, asesoría técnica 
              especializada y entregas oportunas que garantizan la continuidad de tus proyectos.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Nuestra experiencia y red de alianzas estratégicas nos convierten en un socio 
              confiable para empresas de diferentes industrias en México y Estados Unidos.
            </motion.p>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1697281679290-ad7be1b10682?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjaWxpdHklMjBtZXRhbCUyMHByb2Nlc3Npbmd8ZW58MXx8fHwxNzU3MzUyMzAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Instalaciones industriales"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
      </section>

      {/* Industrias Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-16">
            {industrias.map((industria, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:col-start-6' : ''}`}>
                  <div className="max-w-2xl">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">{industria.emoji}</span>
                      </div>
                      <div>
                        <h2 
                          className="text-3xl lg:text-4xl text-foreground"
                          style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                        >
                          {industria.title}
                        </h2>
                      </div>
                    </div>

                    <p 
                      className="text-lg text-accent mb-6"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400, fontStyle: 'italic' }}
                    >
                      {industria.subtitle}
                    </p>

                    <div className="space-y-4 mb-6">
                      {industria.productos.map((producto, productIndex) => (
                        <div key={productIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <p 
                            className="text-muted-foreground leading-relaxed"
                            style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                          >
                            {producto}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="bg-accent/5 rounded-xl p-6 border border-accent/20">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                        </div>
                        <div>
                          <h4 
                            className="text-accent mb-2"
                            style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                          >
                            Beneficio:
                          </h4>
                          <p 
                            className="text-muted-foreground leading-relaxed"
                            style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                          >
                            {industria.beneficio}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative">
                    <ImageWithFallback
                      src={industria.imageUrl}
                      alt={industria.title}
                      className="w-full aspect-square object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-foreground/20 rounded-2xl" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ¿Por qué elegir AINSA? Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-6 text-foreground"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
            >
              ¿Por qué elegir AINSA?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ventajas.map((ventaja, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-background rounded-2xl p-8 border border-border/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">{ventaja.icon}</span>
                </div>
                <h3 
                  className="text-lg text-foreground leading-snug"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                >
                  {ventaja.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-br from-accent/5 via-primary/5 to-accent/5 rounded-3xl p-12 lg:p-16 border border-accent/20"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-6 text-foreground"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
            >
              ¿Tu industria necesita metales de calidad?
            </h2>
            <p 
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Nuestro equipo de especialistas está listo para asesorarte y encontrar 
              las mejores soluciones metálicas para tu sector específico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => onNavigate('contacto')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl transition-all duration-300"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
              >
                Solicitar Asesoría Técnica
              </motion.button>
              <motion.button
                onClick={() => onNavigate('productos')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent hover:bg-accent/10 text-accent border border-accent px-8 py-4 rounded-xl transition-all duration-300"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
              >
                Ver Catálogo Completo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}