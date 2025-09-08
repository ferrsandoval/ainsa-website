import { CTASection } from "../components/CTASection";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";

interface AcerosInoxidablesPageProps {
  onNavigate: (page: string) => void;
}

export function AcerosInoxidablesPage({ onNavigate }: AcerosInoxidablesPageProps) {
  const acerosData = [
    {
      grade: "304/304L",
      description: "Acero inoxidable austenítico más utilizado",
      applications: ["Equipos de cocina", "Tanques de almacenamiento", "Tuberías", "Arquitectura"],
      properties: ["Excelente resistencia a la corrosión", "Fácil conformado", "Soldabilidad superior"]
    },
    {
      grade: "316/316L",
      description: "Acero inoxidable con mayor resistencia a la corrosión",
      applications: ["Industria química", "Marina", "Farmacéutica", "Alimentaria"],
      properties: ["Resistencia superior en ambientes salinos", "Bajo contenido de carbono", "Excelente para soldadura"]
    },
    {
      grade: "321",
      description: "Acero inoxidable estabilizado con titanio",
      applications: ["Sistemas de escape", "Intercambiadores de calor", "Industria aeroespacial"],
      properties: ["Resistencia a altas temperaturas", "Estabilidad estructural", "Resistencia a la corrosión intergranular"]
    },
    {
      grade: "310",
      description: "Acero inoxidable para altas temperaturas",
      applications: ["Hornos industriales", "Intercambiadores de calor", "Equipos de tratamiento térmico"],
      properties: ["Excelente resistencia a la oxidación", "Servicio hasta 1000°C", "Alta resistencia a la fluencia"]
    },
    {
      grade: "409",
      description: "Acero inoxidable ferrítico económico",
      applications: ["Sistemas de escape automotriz", "Aplicaciones decorativas", "Electrodomésticos"],
      properties: ["Económico", "Buena resistencia a la corrosión atmosférica", "Fácil conformado"]
    },
    {
      grade: "430",
      description: "Acero inoxidable ferrítico de uso general",
      applications: ["Electrodomésticos", "Decoración", "Utensilios domésticos", "Industria automotriz"],
      properties: ["No magnético en estado recocido", "Buena resistencia a la corrosión", "Acabado brillante"]
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
                LÍNEA DE PRODUCTOS
              </span>
            </div>
            <h1 
              className="text-4xl lg:text-6xl xl:text-7xl leading-tight tracking-tight text-foreground mb-6"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
            >
              Aceros Inoxidables
              <span 
                className="block text-accent"
                style={{ fontStyle: 'italic', fontWeight: 400 }}
              >
                Austeníticos y Ferríticos
              </span>
            </h1>
            <p 
              className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              La más amplia selección de aceros inoxidables estándar para aplicaciones industriales, 
              comerciales y arquitectónicas con certificaciones internacionales.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFpbmxlc3MlMjBzdGVlbCUyMHNoZWV0c3xlbnwxfHx8fDE3NTczMTEwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Stainless steel sheets"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Grades Section */}
      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl lg:text-5xl font-bold mb-6 text-foreground"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
              >
                Grados Disponibles
              </h2>
              <p 
                className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                Cada grado está diseñado para aplicaciones específicas con propiedades únicas 
                que garantizan el mejor rendimiento en tu proyecto.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {acerosData.map((acero, index) => (
                <div 
                  key={index}
                  className="bg-background border border-border/30 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="mb-6">
                    <h3 
                      className="text-2xl lg:text-3xl font-bold text-foreground mb-3"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                    >
                      {acero.grade}
                    </h3>
                    <p 
                      className="text-muted-foreground"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                    >
                      {acero.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 
                      className="font-semibold text-foreground mb-3"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                    >
                      Propiedades Clave:
                    </h4>
                    <ul className="space-y-2">
                      {acero.properties.map((property, propIndex) => (
                        <li 
                          key={propIndex}
                          className="flex items-start space-x-2 text-muted-foreground"
                          style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                        >
                          <span className="text-accent mt-1">•</span>
                          <span>{property}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 
                      className="font-semibold text-foreground mb-3"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                    >
                      Aplicaciones Principales:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {acero.applications.map((app, appIndex) => (
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
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Available Formats */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl lg:text-5xl font-bold mb-6 text-foreground"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
              >
                Formatos Disponibles
              </h2>
              <p 
                className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                Disponemos de inventario permanente en múltiples presentaciones 
                para satisfacer las necesidades específicas de cada proyecto industrial.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { format: "Placas", sizes: "Desde 3mm hasta 100mm" },
                { format: "Láminas", sizes: "Calibres 10 a 26" },
                { format: "Tubos", sizes: "1/2\" hasta 12\" diámetro" },
                { format: "Barras", sizes: "Redondas, cuadradas, hexagonales" },
                { format: "Perfiles", sizes: "Ángulos, canales, vigas" },
                { format: "Accesorios", sizes: "Bridas, codos, reducciones" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-background border border-border/30 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <h3 
                    className="text-lg font-semibold text-foreground mb-2"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                  >
                    {item.format}
                  </h3>
                  <p 
                    className="text-sm text-muted-foreground"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                  >
                    {item.sizes}
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