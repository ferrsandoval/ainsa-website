import { SectionTransition, StaggerContainer, StaggerItem } from "../components/PageTransition";
import { CTASection } from "../components/CTASection";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface MetalesNoFerrososPageProps {
  onNavigate: (page: string) => void;
}

export function MetalesNoFerrososPage({ onNavigate }: MetalesNoFerrososPageProps) {
  const metalesData = [
    {
      metal: "Cobre 110",
      description: "Alta conductividad eléctrica y térmica",
      products: ["Barras redondas", "Láminas", "Placas", "Tubos"],
      properties: ["99.9% de pureza", "Excelente conductividad", "Resistencia a la corrosión", "Fácil soldadura"],
      applications: ["Instalaciones eléctricas", "Intercambiadores de calor", "Plomería", "Componentes electrónicos"]
    },
    {
      metal: "Latón 260 y 360",
      description: "Aleación de cobre y zinc de alta resistencia",
      products: ["Ángulos", "Barras redondas", "Barras cuadradas", "Barras hexagonales"],
      properties: ["Alta maleabilidad", "Resistencia a la corrosión", "Acabado brillante", "Fácil mecanizado"],
      applications: ["Conectores eléctricos", "Válvulas", "Ornamentación", "Componentes marinos"]
    },
    {
      metal: "Bronce",
      description: "Aleación de cobre y estaño para aplicaciones especiales",
      products: ["Barras", "Placas", "Tubos", "Fundiciones"],
      properties: ["Alta resistencia al desgaste", "Resistencia marina", "Propiedades tribológicas", "Durabilidad excepcional"],
      applications: ["Cojinetes", "Engranajes", "Propelas marinas", "Estatuaria"]
    },
    {
      metal: "Plomo y Zinc",
      description: "Metales especiales para aplicaciones industriales",
      products: ["Láminas de plomo", "Barras de zinc", "Placas", "Perfiles especiales"],
      properties: ["Resistencia química", "Blindaje contra radiación", "Protección catódica", "Maleabilidad"],
      applications: ["Blindaje médico", "Baterías", "Galvanizado", "Protección contra radiación"]
    }
  ];

  const applications = [
    {
      sector: "Eléctrico y Electrónico",
      description: "Conductores, conectores, componentes",
      metals: ["Cobre", "Latón"],
      icon: "⚡"
    },
    {
      sector: "Marino e Industrial",
      description: "Componentes resistentes a la corrosión",
      metals: ["Bronce", "Latón"],
      icon: "⚓"
    },
    {
      sector: "Químico y Petroquímico",
      description: "Equipos resistentes a químicos",
      metals: ["Cobre", "Bronce"],
      icon: "🧪"
    },
    {
      sector: "Médico y Nuclear",
      description: "Blindaje y protección",
      metals: ["Plomo", "Zinc"],
      icon: "🏥"
    }
  ];

  return (
    <main className="pt-20">
      {/* Page Header */}
      <section className="py-16 lg:py-24 bg-ainsa-gray/10 dark:bg-ainsa-gray/20/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <span 
                className="caption text-ainsa-red bg-ainsa-white dark:bg-ainsa-black/80 px-4 py-2 rounded-full border border-ainsa-gray/30"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                LÍNEA DE PRODUCTOS
              </span>
            </div>
            <h1 
              className="text-4xl lg:text-6xl xl:text-7xl leading-tight tracking-tight text-ainsa-black dark:text-ainsa-white mb-6"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
            >
              Metales
              <span 
                className="block text-ainsa-red"
                style={{ fontStyle: 'italic', fontWeight: 400 }}
              >
                No Ferrosos
              </span>
            </h1>
            <p 
              className="text-lg lg:text-xl text-ainsa-gray leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Soluciones especiales para ingeniería y manufactura. Cobre, latón, bronce, plomo y zinc 
              de alta pureza para aplicaciones industriales específicas.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <SectionTransition>
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3BwZXIlMjBicmFzcyUyMG1ldGFsJTIwYmFyc3xlbnwxfHx8fDE3NTczMTMyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Non-ferrous metals: copper, brass, bronze bars"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>
      </SectionTransition>

      {/* Metals Section */}
      <section className="py-16 lg:py-24 bg-ainsa-gray/10 dark:bg-ainsa-gray/20/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl lg:text-5xl font-bold mb-6 text-ainsa-black dark:text-ainsa-white"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
              >
                Metales Disponibles
              </h2>
              <p 
                className="text-lg lg:text-xl text-ainsa-gray leading-relaxed max-w-3xl mx-auto"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                Cada metal no ferroso tiene propiedades únicas que los hacen ideales 
                para aplicaciones industriales específicas y especializadas.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {metalesData.map((metal, index) => (
                <div 
                  key={index}
                  className="bg-ainsa-white dark:bg-ainsa-black border border-ainsa-gray/30 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="mb-6">
                    <h3 
                      className="text-2xl lg:text-3xl font-bold text-ainsa-black dark:text-ainsa-white mb-3"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                    >
                      {metal.metal}
                    </h3>
                    <p 
                      className="text-ainsa-gray mb-4"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                    >
                      {metal.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 
                      className="font-semibold text-ainsa-black dark:text-ainsa-white mb-3"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                    >
                      Productos Disponibles:
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {metal.products.map((product, productIndex) => (
                        <span 
                          key={productIndex}
                          className="bg-accent/10 text-ainsa-red px-3 py-1 rounded-full text-sm border border-accent/20"
                          style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 
                      className="font-semibold text-ainsa-black dark:text-ainsa-white mb-3"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                    >
                      Propiedades Clave:
                    </h4>
                    <ul className="space-y-2">
                      {metal.properties.map((property, propIndex) => (
                        <li 
                          key={propIndex}
                          className="flex items-start space-x-2 text-ainsa-gray"
                          style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                        >
                          <span className="text-ainsa-red mt-1">•</span>
                          <span>{property}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 
                      className="font-semibold text-ainsa-black dark:text-ainsa-white mb-3"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                    >
                      Aplicaciones Principales:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {metal.applications.map((app, appIndex) => (
                        <span 
                          key={appIndex}
                          className="bg-ainsa-gray/10 dark:bg-ainsa-gray/20/50 text-ainsa-black dark:text-ainsa-white px-3 py-1 rounded-full text-sm border border-ainsa-gray/30"
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

      {/* Applications by Sector */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl lg:text-5xl font-bold mb-6 text-ainsa-black dark:text-ainsa-white"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
              >
                Sectores de Aplicación
              </h2>
              <p 
                className="text-lg lg:text-xl text-ainsa-gray leading-relaxed max-w-3xl mx-auto"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                Los metales no ferrosos son esenciales en industrias que requieren 
                propiedades específicas como conductividad, resistencia a la corrosión o blindaje.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {applications.map((application, index) => (
                <div 
                  key={index}
                  className="bg-ainsa-white dark:bg-ainsa-black border border-ainsa-gray/30 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{application.icon}</div>
                    <div className="flex-1">
                      <h3 
                        className="text-xl font-bold text-ainsa-black dark:text-ainsa-white mb-2"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                      >
                        {application.sector}
                      </h3>
                      <p 
                        className="text-ainsa-gray mb-4"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                      >
                        {application.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {application.metals.map((metal, metalIndex) => (
                          <span 
                            key={metalIndex}
                            className="bg-accent/10 text-ainsa-red px-3 py-1 rounded-full text-sm border border-accent/20"
                            style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                          >
                            {metal}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 lg:py-24 bg-ainsa-gray/10 dark:bg-ainsa-gray/20/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <h2 
              className="text-3xl lg:text-5xl font-bold mb-12 text-ainsa-black dark:text-ainsa-white"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
            >
              Especificaciones Técnicas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Pureza Garantizada",
                  description: "Certificados de calidad internacionales",
                  icon: "🔬"
                },
                {
                  title: "Normas Internacionales",
                  description: "ASTM, DIN, ISO cumplimiento total",
                  icon: "📋"
                },
                {
                  title: "Trazabilidad Completa",
                  description: "Origen y composición verificados",
                  icon: "📊"
                }
              ].map((spec, index) => (
                <div 
                  key={index}
                  className="bg-ainsa-white dark:bg-ainsa-black border border-ainsa-gray/30 rounded-2xl p-8"
                >
                  <div className="text-4xl mb-4">{spec.icon}</div>
                  <h3 
                    className="text-xl font-bold text-ainsa-black dark:text-ainsa-white mb-3"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                  >
                    {spec.title}
                  </h3>
                  <p 
                    className="text-ainsa-gray"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                  >
                    {spec.description}
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