import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProductsDetailSection() {
  const productCategories = [
    {
      title: "Acero Inoxidable",
      subtitle: "Resistencia, durabilidad y acabado impecable",
      icon: "🔹",
      items: [
        "Láminas y placas T430, T201, T304, T316 (acabados: 2B, P3, P4, BA)",
        "Tubos sanitarios, ornamentales, estructurales y de cédula",
        "Ángulos, soleras, barras redondas, cuadradas y hexagonales",
        "Conexiones, válvulas, bombas, herrajes, lámina perforada y metal desplegado",
        "Rejillas electroforjadas, varilla roscada, cables y cadenas"
      ],
      imageQuery: "stainless steel sheets industrial"
    },
    {
      title: "Aluminio",
      subtitle: "Ligereza y versatilidad para múltiples aplicaciones",
      icon: "🔹",
      items: [
        "Láminas lisas, antiderrapantes y perforadas",
        "Placas diamantadas y Fortalum",
        "Tubos redondos, cuadrados y rectangulares (6061, 6063)",
        "Perfiles: ángulos, canales y soleras"
      ],
      imageQuery: "aluminum sheets metal industrial"
    },
    {
      title: "Metales No Ferrosos",
      subtitle: "Soluciones especiales para ingeniería y manufactura",
      icon: "🔹",
      items: [
        "Cobre 110: barras y láminas",
        "Latón 260 y 360: en ángulos y barras (redondas, cuadradas y hexagonales)",
        "Bronce en diferentes presentaciones",
        "Plomo y zinc en láminas y barras"
      ],
      imageQuery: "copper brass bronze metal bars"
    },
    {
      title: "Acero al Carbón y Especiales",
      subtitle: "Fortaleza y confiabilidad para proyectos exigentes",
      icon: "🔹",
      items: [
        "Láminas HR, CR, A36 y 1008",
        "Tuberías cédula 10, 40, 80, 160 y XXS",
        "Aceros para maquinaria y herramientas (O1, A2, D2, H13, P20)",
        "Aleaciones especiales (4140, 4340, 9840, 8620)"
      ],
      imageQuery: "carbon steel pipes industrial"
    },
    {
      title: "Placa Antidesgaste y Ultra Resistente",
      subtitle: "Desarrolladas para soportar condiciones extremas",
      icon: "🔹",
      items: [
        "Espesores de 3 mm hasta 100+ mm",
        "Aplicaciones en minería, cuchillas, tolvas, contenedores y maquinaria pesada"
      ],
      imageQuery: "wear resistant steel plates mining"
    },
    {
      title: "Paneles de Aluminio Compuesto (ACP)",
      subtitle: "Diseño, resistencia y estética en un solo material",
      icon: "🔹",
      items: [
        "Acabados sólidos, metálicos y tipo madera",
        "Ideal para fachadas, señalización, interiores y revestimientos arquitectónicos"
      ],
      imageQuery: "aluminum composite panels architecture"
    },
    {
      title: "Consumibles y Abrasivos",
      subtitle: "Complementos de calidad para mantenimiento y producción",
      icon: "🔹",
      items: [
        "Electrodos, soldadura y aportes",
        "Discos flap, corte, cepillos, lijas y esmeriles"
      ],
      imageQuery: "welding electrodes grinding discs"
    },
    {
      title: "Soluciones IRVING®",
      subtitle: "Distribuidores autorizados de la marca líder",
      icon: "🔹",
      items: [
        "Rejillas de acero inoxidable, acero al carbón y galvanizado",
        "Rejillas de fibra de vidrio y aluminio",
        "Barandales de seguridad fabricados bajo normas internacionales"
      ],
      imageQuery: "industrial gratings safety railings"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p 
              className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Nuestro catálogo está diseñado para cubrir las necesidades de sectores como construcción, minería, 
              agroindustria, arquitectura e infraestructura.
            </p>
          </motion.div>

          {/* Product Categories Grid */}
          <div className="space-y-16">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:col-start-6' : ''}`}>
                  <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-sm border border-border/30">
                    <div className="flex items-center space-x-3 mb-6">
                      <span className="text-3xl">{category.icon}</span>
                      <div>
                        <h3 
                          className="text-2xl lg:text-3xl text-foreground"
                          style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                        >
                          {category.title}
                        </h3>
                        <p 
                          className="text-accent"
                          style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400, fontStyle: 'italic' }}
                        >
                          {category.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <p 
                            className="text-muted-foreground leading-relaxed"
                            style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                          >
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative">
                    <ImageWithFallback
                      src={`https://images.unsplash.com/photo-1626470159396-8a6b361ab3a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800`}
                      alt={category.title}
                      className="w-full aspect-square object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-foreground/20 rounded-2xl" />
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
            className="text-center mt-20"
          >
            <div className="bg-accent/5 rounded-2xl p-12 border border-accent/20">
              <h3 
                className="text-3xl lg:text-4xl mb-6 text-foreground"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
              >
                ¿Necesitas un producto específico?
              </h3>
              <p 
                className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                Nuestro equipo de especialistas puede ayudarte a encontrar exactamente lo que necesitas 
                para tu proyecto, incluso si no está listado en nuestro catálogo principal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl shadow-lg transition-all duration-300"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                >
                  Ver Catálogo Completo
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 rounded-xl transition-all duration-300"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                >
                  Solicitar Cotización
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}