import { CTASection } from "../components/CTASection";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface AleacionesEspecialesPageProps {
  onNavigate: (page: string) => void;
}

export function AleacionesEspecialesPage({ onNavigate }: AleacionesEspecialesPageProps) {
  const aleacionesData = [
    {
      material: "Inconel®",
      grades: ["600", "625", "718", "X-750"],
      description: "Superaleaciones base níquel para alta temperatura",
      applications: ["Turbinas de gas", "Industria aeroespacial", "Reactores nucleares", "Intercambiadores de calor"],
      properties: ["Resistencia a 1000°C+", "Excelente resistencia a la corrosión", "Alta resistencia mecánica"]
    },
    {
      material: "Monel®",
      grades: ["400", "K-500"],
      description: "Aleación níquel-cobre para ambientes corrosivos",
      applications: ["Industria marina", "Equipos químicos", "Válvulas y bombas", "Intercambiadores"],
      properties: ["Resistencia al agua de mar", "No magnético", "Excelente soldabilidad"]
    },
    {
      material: "Hastelloy®",
      grades: ["C-276", "C-22", "B-3"],
      description: "Aleaciones para condiciones extremas",
      applications: ["Industria química", "Procesamiento de gases ácidos", "Hornos industriales"],
      properties: ["Resistencia a ácidos", "Estabilidad térmica", "Resistencia a la oxidación"]
    },
    {
      material: "Duplex",
      grades: ["2205", "2507"],
      description: "Aceros inoxidables austenítico-ferríticos",
      applications: ["Industria petroquímica", "Offshore", "Desalinización", "Intercambiadores"],
      properties: ["Alta resistencia mecánica", "Excelente resistencia a la corrosión", "Resistencia al agrietamiento"]
    },
    {
      material: "Super Duplex",
      grades: ["2507", "Zeron 100"],
      description: "Aceros inoxidables de alto rendimiento",
      applications: ["Industria offshore", "Equipos de desalinización", "Industria química severa"],
      properties: ["Máxima resistencia a la corrosión", "Alta resistencia mecánica", "Resistencia al H2S"]
    },
    {
      material: "Titanio",
      grades: ["Grado 1", "Grado 2", "Grado 5"],
      description: "Metal ligero de alto rendimiento",
      applications: ["Industria aeroespacial", "Biomédica", "Química", "Marina"],
      properties: ["Máxima resistencia/peso", "Biocompatibilidad", "Resistencia a la corrosión marina"]
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
                MATERIALES ESPECIALIZADOS
              </span>
            </div>
            <h1 
              className="text-4xl lg:text-6xl xl:text-7xl leading-tight tracking-tight text-foreground mb-6"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
            >
              Aleaciones
              <span 
                className="block text-accent"
                style={{ fontStyle: 'italic', fontWeight: 400 }}
              >
                Especiales
              </span>
            </h1>
            <p 
              className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Superaleaciones y materiales avanzados para aplicaciones críticas que requieren 
              el máximo rendimiento en condiciones extremas de temperatura, presión y corrosión.
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
                src="https://images.unsplash.com/photo-1558618666-1a1e513a7a1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGFsbG95JTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NTczMTEwNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Metal alloy industrial"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl lg:text-5xl font-bold mb-6 text-foreground"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
              >
                Materiales Disponibles
              </h2>
              <p 
                className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                Selección especializada de superaleaciones y materiales avanzados para 
                las aplicaciones más demandantes de la industria moderna.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {aleacionesData.map((aleacion, index) => (
                <div 
                  key={index}
                  className="bg-background border border-border/30 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 
                        className="text-2xl lg:text-3xl font-bold text-foreground"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                      >
                        {aleacion.material}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {aleacion.grades.map((grade, gradeIndex) => (
                          <span 
                            key={gradeIndex}
                            className="bg-accent/10 text-accent px-2 py-1 rounded text-xs border border-accent/20"
                            style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                          >
                            {grade}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p 
                      className="text-muted-foreground"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                    >
                      {aleacion.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 
                      className="font-semibold text-foreground mb-3"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                    >
                      Propiedades Destacadas:
                    </h4>
                    <ul className="space-y-2">
                      {aleacion.properties.map((property, propIndex) => (
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
                      Aplicaciones Críticas:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {aleacion.applications.map((app, appIndex) => (
                        <span 
                          key={appIndex}
                          className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
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

      {/* Technical Support */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-background border border-border/30 rounded-3xl p-12 lg:p-16 text-center">
              <h2 
                className="text-3xl lg:text-4xl font-bold mb-6 text-foreground"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
              >
                Asesoría Técnica Especializada
              </h2>
              <p 
                className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                Nuestro equipo de ingenieros especialistas te ayuda a seleccionar la aleación correcta 
                para tu aplicación específica, considerando factores como temperatura, corrosión, 
                resistencia mecánica y compatibilidad química.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "🧪",
                    title: "Análisis Químico",
                    description: "Certificados de composición química completos"
                  },
                  {
                    icon: "🔬",
                    title: "Propiedades Mecánicas",
                    description: "Pruebas de tensión, dureza y resistencia"
                  },
                  {
                    icon: "📊",
                    title: "Reportes Técnicos",
                    description: "Documentación completa de trazabilidad"
                  }
                ].map((service, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 
                      className="font-semibold text-foreground mb-2"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                    >
                      {service.title}
                    </h3>
                    <p 
                      className="text-muted-foreground text-sm"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                    >
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}