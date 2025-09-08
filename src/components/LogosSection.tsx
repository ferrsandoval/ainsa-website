import { motion } from 'motion/react';

export function LogosSection() {
  const strategicAlliances = [
    { 
      name: "GLOBAL CHAMBER", 
      description: "Cámara Global de Comercio",
      logo: "GC",
      color: "from-green-500/20 to-blue-500/20"
    },
    { 
      name: "INOX", 
      description: "Asociación Mexicana del Inoxidable",
      logo: "IN",
      color: "from-gray-500/20 to-slate-500/20"
    },
    { 
      name: "SONORA", 
      description: "Gobierno del Estado",
      logo: "SO",
      color: "from-orange-500/20 to-red-500/20"
    },
    { 
      name: "CANACINTRA", 
      description: "Cámara Nacional de la Industria",
      logo: "CA",
      color: "from-red-500/20 to-orange-500/20"
    },
    { 
      name: "TECNOLÓGICO", 
      description: "Instituto Tecnológico de Mexicali",
      logo: "TM",
      color: "from-blue-500/20 to-indigo-500/20"
    },
    { 
      name: "IRVING®", 
      description: "Rejillas Industriales",
      logo: "IR",
      color: "from-blue-600/20 to-cyan-500/20"
    }
  ];

  const internationalNorms = [
    { 
      name: "ASTM", 
      fullName: "ASTM International",
      description: "Estándares Técnicos",
      logo: "AS"
    },
    { 
      name: "ASME", 
      fullName: "American Society of Mechanical Engineers",
      description: "Códigos de Ingeniería",
      logo: "AM"
    },
    { 
      name: "AISI", 
      fullName: "American Iron and Steel Institute",
      description: "Instituto del Acero",
      logo: "AI"
    },
    { 
      name: "LLOYD'S", 
      fullName: "Lloyd's Register",
      description: "Certificación Internacional",
      logo: "LR"
    },
    { 
      name: "UKAS", 
      fullName: "United Kingdom Accreditation Service",
      description: "Acreditación Reino Unido",
      logo: "UK"
    }
  ];

  return (
    <section className="bg-background py-16 lg:py-20 border-y border-border/20 min-h-screen flex items-center">
      <div className="container mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-7xl mx-auto">
          {/* Main Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span 
              className="caption text-muted-foreground mb-4 block bg-muted px-6 py-3 rounded-full inline-block"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              CERTIFICACIONES Y ALIANZAS
            </span>
            <h2 
              className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
            >
              Respaldo de Calidad y
              <span 
                className="block" 
                style={{ fontStyle: 'italic', fontWeight: 400 }}
              >
                Confianza
              </span>
            </h2>
            <p 
              className="text-base lg:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Nuestras alianzas estratégicas y certificaciones internacionales garantizan productos 
              de la más alta calidad con trazabilidad completa.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            
            {/* Alianzas Estratégicas */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <h3 
                  className="text-2xl lg:text-3xl font-bold text-foreground mb-2"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                >
                  Alianzas Estratégicas
                </h3>
                <p 
                  className="text-sm text-muted-foreground"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                >
                  Colaboramos con organizaciones líderes
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {strategicAlliances.map((alliance, index) => (
                  <motion.div
                    key={alliance.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="bg-card border border-border/50 rounded-xl p-4 hover:border-accent/30 hover:shadow-lg transition-all duration-300 text-center h-full">
                      <div className={`w-12 h-12 bg-gradient-to-br ${alliance.color} border border-border/30 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                        <span 
                          className="text-sm font-bold text-foreground"
                          style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                        >
                          {alliance.logo}
                        </span>
                      </div>
                      <h4 
                        className="font-bold text-foreground mb-1 text-xs"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                      >
                        {alliance.name}
                      </h4>
                      <p 
                        className="text-xs text-muted-foreground leading-tight"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                      >
                        {alliance.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Normas Internacionales de Fabricación */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <h3 
                  className="text-2xl lg:text-3xl font-bold text-foreground mb-2"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                >
                  Normas Internacionales
                </h3>
                <p 
                  className="text-sm text-muted-foreground"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                >
                  Certificaciones que avalan la calidad superior
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {internationalNorms.map((norm, index) => (
                  <motion.div
                    key={norm.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="group relative bg-card border border-border/50 rounded-xl p-4 hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 border border-border/30 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <span 
                        className="text-base font-bold text-primary"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                      >
                        {norm.logo}
                      </span>
                    </div>
                    
                    <h4 
                      className="font-bold text-foreground mb-1 text-sm"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                    >
                      {norm.name}
                    </h4>
                    <h5 
                      className="text-xs font-medium text-primary mb-2"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                    >
                      {norm.fullName}
                    </h5>
                    <p 
                      className="text-xs text-muted-foreground leading-tight"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                    >
                      {norm.description}
                    </p>

                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Trust indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-border/20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div 
                  className="text-2xl lg:text-3xl font-bold text-foreground mb-1"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                >
                  100%
                </div>
                <p 
                  className="text-muted-foreground uppercase tracking-wider text-xs"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                >
                  Materiales Certificados
                </p>
              </div>
              <div>
                <div 
                  className="text-2xl lg:text-3xl font-bold text-foreground mb-1"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                >
                  24/7
                </div>
                <p 
                  className="text-muted-foreground uppercase tracking-wider text-xs"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                >
                  Soporte Técnico
                </p>
              </div>
              <div>
                <div 
                  className="text-2xl lg:text-3xl font-bold text-foreground mb-1"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                >
                  48h
                </div>
                <p 
                  className="text-muted-foreground uppercase tracking-wider text-xs"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                >
                  Tiempo de Entrega
                </p>
              </div>
              <div>
                <div 
                  className="text-2xl lg:text-3xl font-bold text-foreground mb-1"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                >
                  99.8%
                </div>
                <p 
                  className="text-muted-foreground uppercase tracking-wider text-xs"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                >
                  Satisfacción Cliente
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}