import { motion } from 'motion/react';
import { Shield, Heart, DollarSign, CheckCircle, Factory, Utensils, Stethoscope, Plane, Home, Car, Ship, Zap, Settings, Sparkles } from 'lucide-react';
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface PorQueInoxidablePageProps {
  onNavigate?: (page: string) => void;
}

export function PorQueInoxidablePage({ onNavigate }: PorQueInoxidablePageProps) {
  const ventajas = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Material de elección",
      description: "Bacteriológicamente neutro y naturalmente hipoalergénico, el acero inoxidable es el material elegido para los lugares donde la higiene y la seguridad son necesarias."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Garantía de seguridad e higiene",
      description: "Ya sea en hospitales, cocinas o baños; en hoteles, comunidades, o instalaciones sanitarias empresariales, el acero inoxidable facilita las operaciones de limpieza y contribuye a una mejor higiene."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Costo total competitivo",
      description: "El enfoque de costo global está totalmente en línea con el enfoque de desarrollo sostenible, ofreciendo una inversión a largo plazo."
    }
  ];

  const aplicacionesIndustriales = [
    { icon: <Utensils className="w-5 h-5" />, name: "Industria Alimenticia" },
    { icon: <Stethoscope className="w-5 h-5" />, name: "Industria Farmacéutica" },
    { icon: <Heart className="w-5 h-5" />, name: "Industria Médica" },
    { icon: <Factory className="w-5 h-5" />, name: "Sector Agroindustrial" },
    { icon: <Settings className="w-5 h-5" />, name: "Industria Minera" },
    { icon: <Plane className="w-5 h-5" />, name: "Industria Aeroespacial" },
    { icon: <Car className="w-5 h-5" />, name: "Automotriz" },
    { icon: <Ship className="w-5 h-5" />, name: "Industria Marítima" },
    { icon: <Factory className="w-5 h-5" />, name: "Industria Petroquímica" },
    { icon: <Zap className="w-5 h-5" />, name: "Generación de Energía" }
  ];

  const aplicacionesComerciales = [
    { icon: <Home className="w-5 h-5" />, name: "Hogar y Cocina" },
    { icon: <Sparkles className="w-5 h-5" />, name: "Mobiliario" },
    { icon: <Settings className="w-5 h-5" />, name: "Accesorios" },
    { icon: <Factory className="w-5 h-5" />, name: "Tecnología" },
    { icon: <Sparkles className="w-5 h-5" />, name: "Joyería" },
    { icon: <Home className="w-5 h-5" />, name: "Mobiliario Urbano" },
    { icon: <Factory className="w-5 h-5" />, name: "Arquitectura" },
    { icon: <Sparkles className="w-5 h-5" />, name: "Escultura" }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1642844744022-d76a9af3711a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFpbmxlc3MlMjBzdGVlbCUyMG1lZGljYWwlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzU3MzQ5MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Stainless steel medical equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-300/80 via-gray-300/60 to-gray-300/80 dark:from-background/90 dark:via-background/70 dark:to-background/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="caption text-muted-foreground bg-background/80 dark:bg-background/60 px-4 py-2 rounded-full backdrop-blur-sm border border-border/30 mb-8 inline-block"
            >
              REVOLUCIÓN INOXIDABLE
            </motion.span>
            
            <h1 
              className="text-3xl sm:text-4xl lg:text-6xl tracking-tight mb-6 text-foreground"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
            >
              ¿Por qué inoxidable?
            </h1>
            
            <p 
              className="text-lg lg:text-xl text-accent dark:text-muted-foreground leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Descubre las ventajas competitivas del acero inoxidable y por qué es el material de elección para aplicaciones críticas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ventajas Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              className="text-2xl sm:text-3xl lg:text-4xl mb-6 text-foreground"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
            >
              Ventajas competitivas del acero inoxidable
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {ventajas.map((ventaja, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center lg:text-left"
              >
                <div className="flex justify-center lg:justify-start mb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                    {ventaja.icon}
                  </div>
                </div>
                
                <h3 
                  className="text-xl lg:text-2xl mb-4 text-foreground"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                >
                  {ventaja.title}
                </h3>
                
                <p 
                  className="text-muted-foreground leading-relaxed"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                >
                  {ventaja.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resistencia a la corrosión */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1633536704679-de310869515b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwc3RhaW5sZXNzJTIwc3RlZWx8ZW58MXx8fHwxNzU3MzQ5MTE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern kitchen with stainless steel"
                className="w-full h-64 lg:h-80 object-cover rounded-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-accent mr-3" />
                <span 
                  className="caption text-accent"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                >
                  PROTECCIÓN NATURAL
                </span>
              </div>
              
              <h3 
                className="text-2xl lg:text-3xl mb-6 text-foreground"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
              >
                Resistencia a la corrosión
              </h3>
              
              <p 
                className="text-muted-foreground leading-relaxed mb-6"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                Su resistencia a la corrosión se debe al hecho de que se autoprotege mediante una capa pasiva. 
                La elección del grado de acero inoxidable debe adaptarse a condiciones específicas para garantizar 
                el máximo rendimiento.
              </p>

              <div className="space-y-3">
                {[
                  "Autoprotección mediante capa pasiva",
                  "Adaptable a condiciones especiales",
                  "Mantenimiento mínimo requerido",
                  "Durabilidad a largo plazo"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span 
                      className="text-muted-foreground"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                    >
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Aplicaciones Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              className="text-2xl sm:text-3xl lg:text-4xl mb-6 text-foreground"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
            >
              Sectores de aplicación
            </h2>
            <p 
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              El acero inoxidable encuentra aplicación en una amplia variedad de industrias y sectores, 
              desde la medicina hasta la arquitectura.
            </p>
          </motion.div>

          {/* Aplicaciones Industriales */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 
              className="text-xl lg:text-2xl mb-8 text-foreground text-center"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
            >
              Aplicaciones Industriales
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
              {aplicacionesIndustriales.map((aplicacion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-background border border-border/30 rounded-xl p-4 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                      {aplicacion.icon}
                    </div>
                  </div>
                  <span 
                    className="text-sm text-foreground"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                  >
                    {aplicacion.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Aplicaciones Comerciales */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 
              className="text-xl lg:text-2xl mb-8 text-foreground text-center"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
            >
              Aplicaciones Comerciales y Domésticas
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {aplicacionesComerciales.map((aplicacion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-background border border-border/30 rounded-xl p-4 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                      {aplicacion.icon}
                    </div>
                  </div>
                  <span 
                    className="text-sm text-foreground"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                  >
                    {aplicacion.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 
              className="text-2xl sm:text-3xl lg:text-4xl mb-6"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
            >
              ¿Listo para la revolución inoxidable?
            </h2>
            
            <p 
              className="text-lg text-background/80 mb-8 leading-relaxed"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Descubre nuestra amplia gama de productos de acero inoxidable y encuentra la solución perfecta para tu proyecto.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onNavigate?.('productos')}
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-xl font-medium transition-colors"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                Ver Productos
              </button>
              <button 
                onClick={() => onNavigate?.('contacto')}
                className="bg-transparent border-2 border-background text-background hover:bg-background hover:text-foreground px-8 py-4 rounded-xl font-medium transition-colors"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                Contactar Experto
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}