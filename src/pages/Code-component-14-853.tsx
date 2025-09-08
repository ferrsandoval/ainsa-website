import { SectionTransition, StaggerContainer, StaggerItem } from "../components/PageTransition";
import { CTASection } from "../components/CTASection";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface SolucionesIrvingPageProps {
  onNavigate: (page: string) => void;
}

export function SolucionesIrvingPage({ onNavigate }: SolucionesIrvingPageProps) {
  const productLines = [
    {
      category: "Rejillas de Acero Inoxidable",
      description: "Para ambientes corrosivos y aplicaciones sanitarias",
      products: [
        { name: "Rejillas electroforjadas", specs: "304, 316L, diversas cargas" },
        { name: "Rejillas prensadas", specs: "Superficie lisa, fácil limpieza" },
        { name: "Peldaños antideslizantes", specs: "Con borde de seguridad" },
        { name: "Marcos y accesorios", specs: "Sistema completo de instalación" }
      ],
      applications: ["Industria alimentaria", "Farmacéutica", "Química", "Marina"],
      icon: "🔷"
    },
    {
      category: "Rejillas de Acero al Carbón",
      description: "Soluciones robustas para industria pesada",
      products: [
        { name: "Rejillas electroforjadas", specs: "Barras de carga y transversales" },
        { name: "Rejillas prensadas", specs: "Para tráfico pesado" },
        { name: "Tapas de drenaje", specs: "Cargas hasta 400kN" },
        { name: "Escalones industriales", specs: "Con superficie antideslizante" }
      ],
      applications: ["Plantas industriales", "Petroquímica", "Minería", "Estructuras"],
      icon: "⚫"
    },
    {
      category: "Rejillas Galvanizadas",
      description: "Protección contra la corrosión para exteriores",
      products: [
        { name: "Rejillas electroforjadas", specs: "Galvanizado en caliente" },
        { name: "Tapas de registro", specs: "Para alcantarillado y drenaje" },
        { name: "Plataformas de trabajo", specs: "Resistencia a intemperie" },
        { name: "Pasarelas peatonales", specs: "Con barandales integrados" }
      ],
      applications: ["Infraestructura urbana", "Plantas de tratamiento", "Exteriores", "Drenaje"],
      icon: "🔘"
    },
    {
      category: "Rejillas de Fibra de Vidrio",
      description: "Resistencia química y peso ligero",
      products: [
        { name: "Rejillas moldeadas", specs: "Resistencia química superior" },
        { name: "Rejillas pultruidas", specs: "Alta resistencia mecánica" },
        { name: "Plataformas de trabajo", specs: "Peso 80% menor que acero" },
        { name: "Cubiertas de tanques", specs: "Resistencia a químicos" }
      ],
      applications: ["Plantas químicas", "Tratamiento de aguas", "Offshore", "Ambientes corrosivos"],
      icon: "🟡"
    },
    {
      category: "Rejillas de Aluminio",
      description: "Ligereza y resistencia a la corrosión",
      products: [
        { name: "Rejillas de ventilación", specs: "Para fachadas y climatización" },
        { name: "Pisos técnicos", specs: "Para centros de datos" },
        { name: "Elementos arquitectónicos", specs: "Acabados decorativos" },
        { name: "Rejillas marinas", specs: "Aleaciones especiales" }
      ],
      applications: ["Arquitectura", "HVAC", "Marina", "Centros de datos"],
      icon: "⚪"
    },
    {
      category: "Barandales de Seguridad",
      description: "Sistemas de protección bajo normas internacionales",
      products: [
        { name: "Barandales estándar", specs: "1.1m altura, normas OSHA" },
        { name: "Barandales para escaleras", specs: "Con pasamanos ergonómicos" },
        { name: "Sistemas modulares", specs: "Fácil instalación y mantenimiento" },
        { name: "Puertas de seguridad", specs: "Con sistemas de cierre" }
      ],
      applications: ["Plataformas industriales", "Escaleras", "Pasarelas", "Áreas de trabajo"],
      icon: "🚧"
    }
  ];

  const certifications = [
    {
      standard: "ASTM A-36",
      description: "Acero estructural estándar",
      icon: "📋"
    },
    {
      standard: "ASTM A-569",
      description: "Acero al carbón laminado en caliente",
      icon: "📋"
    },
    {
      standard: "ASTM A-240",
      description: "Acero inoxidable para recipientes a presión",
      icon: "📋"
    },
    {
      standard: "OSHA Compliance",
      description: "Cumplimiento de normas de seguridad",
      icon: "🛡️"
    }
  ];

  return (
    <main className="pt-20">
      {/* Page Header */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <span 
                className="caption text-accent bg-background/80 px-4 py-2 rounded-full border border-border/30"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                DISTRIBUIDOR AUTORIZADO
              </span>
            </div>
            <h1 
              className="text-4xl lg:text-6xl xl:text-7xl leading-tight tracking-tight text-foreground mb-6"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
            >
              Soluciones
              <span 
                className="block text-accent"
                style={{ fontStyle: 'italic', fontWeight: 400 }}
              >
                IRVING®
              </span>
            </h1>
            <p 
              className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Distribuidores autorizados de la marca líder en rejillas y barandales de seguridad. 
              Productos fabricados bajo normas internacionales de calidad y seguridad.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Section */}
      <SectionTransition>
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="bg-accent/5 rounded-3xl p-12 border border-accent/20 text-center">
                <div className="text-6xl mb-6">🏭</div>
                <h2 
                  className="text-3xl lg:text-4xl font-bold text-foreground mb-6"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                >
                  Marca IRVING® - Líder Mundial
                </h2>
                <p 
                  className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                >
                  Con más de 50 años de experiencia, IRVING® es reconocida mundialmente por la calidad 
                  y confiabilidad de sus productos para aplicaciones industriales críticas.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div 
                      className="text-2xl font-bold text-accent mb-2"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                    >
                      50+ Años
                    </div>
                    <p 
                      className="text-muted-foreground"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                    >
                      De experiencia
                    </p>
                  </div>
                  <div className="text-center">
                    <div 
                      className="text-2xl font-bold text-accent mb-2"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                    >
                      ISO 9001
                    </div>
                    <p 
                      className="text-muted-foreground"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                    >
                      Certificación de calidad
                    </p>
                  </div>
                  <div className="text-center">
                    <div 
                      className="text-2xl font-bold text-accent mb-2"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                    >
                      Global
                    </div>
                    <p 
                      className="text-muted-foreground"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                    >
                      Presencia mundial
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionTransition>

      {/* Products Section */}
      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl lg:text-5xl font-bold mb-6 text-foreground"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
              >
                Líneas de Productos
              </h2>
              <p 
                className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                Amplia gama de rejillas y barandales para satisfacer las necesidades 
                más exigentes de la industria moderna.
              </p>
            </div>

            <div className="space-y-12">
              {productLines.map((line, index) => (
                <div 
                  key={index}
                  className="bg-background border border-border/30 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start space-x-6">
                    <div className="text-5xl">{line.icon}</div>
                    <div className="flex-1">
                      <h3 
                        className="text-2xl lg:text-3xl font-bold text-foreground mb-3"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                      >
                        {line.category}
                      </h3>
                      <p 
                        className="text-muted-foreground mb-6"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                      >
                        {line.description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {line.products.map((product, productIndex) => (
                          <div key={productIndex} className="border border-border/20 rounded-lg p-4">
                            <h4 
                              className="font-semibold text-foreground mb-2"
                              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                            >
                              {product.name}
                            </h4>
                            <p 
                              className="text-sm text-muted-foreground"
                              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                            >
                              {product.specs}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div>
                        <h4 
                          className="font-semibold text-foreground mb-3"
                          style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                        >
                          Aplicaciones Principales:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {line.applications.map((app, appIndex) => (
                            <span 
                              key={appIndex}
                              className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm border border-accent/20"
                              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications Image */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1581093458791-9d42e55db2f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZ3JhdGluZ3MlMjBzYWZldHklMjByYWlsaW5nc3xlbnwxfHx8fDE3NTczMTMyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Industrial gratings and safety railings installation"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-center">
                <h3 
                  className="text-2xl lg:text-3xl font-bold text-white mb-4"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                >
                  Instalaciones Industriales Seguras
                </h3>
                <p 
                  className="text-white/90"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                >
                  Productos IRVING® instalados en las industrias más exigentes del mundo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl lg:text-5xl font-bold mb-6 text-foreground"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
              >
                Certificaciones y Normas
              </h2>
              <p 
                className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                Todos los productos IRVING® cumplen con las normas internacionales 
                más estrictas de calidad y seguridad.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-background border border-border/30 rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl mb-4">{cert.icon}</div>
                  <h3 
                    className="text-lg font-bold text-foreground mb-2"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                  >
                    {cert.standard}
                  </h3>
                  <p 
                    className="text-sm text-muted-foreground"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                  >
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <h2 
              className="text-3xl lg:text-5xl font-bold mb-12 text-foreground"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
            >
              Servicios Especializados
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Asesoría Técnica",
                  description: "Selección del producto correcto para cada aplicación",
                  icon: "🎯"
                },
                {
                  title: "Fabricación a Medida",
                  description: "Productos personalizados según especificaciones",
                  icon: "⚙️"
                },
                {
                  title: "Soporte Post-Venta",
                  description: "Asistencia técnica y garantía completa",
                  icon: "🔧"
                }
              ].map((service, index) => (
                <div 
                  key={index}
                  className="bg-background border border-border/30 rounded-2xl p-8"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 
                    className="text-xl font-bold text-foreground mb-3"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                  >
                    {service.title}
                  </h3>
                  <p 
                    className="text-muted-foreground"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                  >
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}