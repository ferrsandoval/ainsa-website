import { SectionTransition, StaggerContainer, StaggerItem } from "../components/PageTransition";
import { CTASection } from "../components/CTASection";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface PanelesACPPageProps {
  onNavigate: (page: string) => void;
}

export function PanelesACPPage({ onNavigate }: PanelesACPPageProps) {
  const acabadosData = [
    {
      type: "Acabados Sólidos",
      description: "Colores uniformes con alta durabilidad",
      colors: ["Blanco", "Negro", "Gris", "Azul", "Rojo", "Verde"],
      applications: ["Fachadas corporativas", "Interiores modernos", "Señalización"]
    },
    {
      type: "Acabados Metálicos",
      description: "Efecto metálico brillante y elegante",
      colors: ["Plata", "Oro", "Cobre", "Bronce", "Titanio", "Champagne"],
      applications: ["Arquitectura premium", "Centros comerciales", "Hoteles"]
    },
    {
      type: "Acabados Tipo Madera",
      description: "Textura natural de madera sin mantenimiento",
      colors: ["Roble", "Cerezo", "Nogal", "Pino", "Caoba", "Bambú"],
      applications: ["Revestimientos cálidos", "Interiores residenciales", "Oficinas"]
    }
  ];

  const applications = [
    {
      category: "Fachadas",
      description: "Revestimiento exterior de edificios",
      benefits: ["Resistencia a intemperie", "Bajo mantenimiento", "Variedad de diseños"],
      icon: "🏢"
    },
    {
      category: "Señalización",
      description: "Rótulos y elementos publicitarios",
      benefits: ["Fácil impresión", "Superficie plana", "Durabilidad exterior"],
      icon: "📋"
    },
    {
      category: "Interiores",
      description: "Revestimientos y elementos decorativos",
      benefits: ["Fácil instalación", "Variedad de acabados", "Resistencia al fuego"],
      icon: "🏠"
    },
    {
      category: "Arquitectónico",
      description: "Elementos estructurales y decorativos",
      benefits: ["Ligereza", "Versatilidad de formas", "Acabados premium"],
      icon: "🏛️"
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
              Paneles de Aluminio
              <span 
                className="block text-ainsa-red"
                style={{ fontStyle: 'italic', fontWeight: 400 }}
              >
                Compuesto (ACP)
              </span>
            </h1>
            <p 
              className="text-lg lg:text-xl text-ainsa-gray leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Diseño, resistencia y estética en un solo material. Ideales para fachadas, 
              señalización, interiores y revestimientos arquitectónicos.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <SectionTransition>
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHVtaW51bSUyMGNvbXBvc2l0ZSUyMHBhbmVscyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NTczMTMyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Aluminum composite panels in modern architecture"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>
      </SectionTransition>

      {/* Finishes Section */}
      <section className="py-16 lg:py-24 bg-ainsa-gray/10 dark:bg-ainsa-gray/20/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl lg:text-5xl font-bold mb-6 text-ainsa-black dark:text-ainsa-white"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
              >
                Acabados Disponibles
              </h2>
              <p 
                className="text-lg lg:text-xl text-ainsa-gray leading-relaxed max-w-3xl mx-auto"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                Amplia variedad de acabados para satisfacer cualquier proyecto arquitectónico 
                y de diseño, desde corporativo hasta residencial.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {acabadosData.map((acabado, index) => (
                <div 
                  key={index}
                  className="bg-ainsa-white dark:bg-ainsa-black border border-ainsa-gray/30 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <h3 
                    className="text-2xl font-bold text-ainsa-black dark:text-ainsa-white mb-4"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                  >
                    {acabado.type}
                  </h3>
                  <p 
                    className="text-ainsa-gray mb-6"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                  >
                    {acabado.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 
                      className="font-semibold text-ainsa-black dark:text-ainsa-white mb-3"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                    >
                      Colores Principales:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {acabado.colors.map((color, colorIndex) => (
                        <span 
                          key={colorIndex}
                          className="bg-ainsa-red/10 text-ainsa-red px-3 py-1 rounded-full text-sm border border-ainsa-red/20"
                          style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 
                      className="font-semibold text-ainsa-black dark:text-ainsa-white mb-3"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                    >
                      Aplicaciones:
                    </h4>
                    <ul className="space-y-2">
                      {acabado.applications.map((app, appIndex) => (
                        <li 
                          key={appIndex}
                          className="flex items-start space-x-2 text-ainsa-gray"
                          style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                        >
                          <span className="text-ainsa-red mt-1">•</span>
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl lg:text-5xl font-bold mb-6 text-ainsa-black dark:text-ainsa-white"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
              >
                Aplicaciones
              </h2>
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
                        {application.category}
                      </h3>
                      <p 
                        className="text-ainsa-gray mb-4"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                      >
                        {application.description}
                      </p>
                      <ul className="space-y-2">
                        {application.benefits.map((benefit, benefitIndex) => (
                          <li 
                            key={benefitIndex}
                            className="flex items-start space-x-2 text-ainsa-gray"
                            style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                          >
                            <span className="text-ainsa-red mt-1">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-16 lg:py-24 bg-ainsa-gray/10 dark:bg-ainsa-gray/20/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <h2 
              className="text-3xl lg:text-5xl font-bold mb-12 text-ainsa-black dark:text-ainsa-white"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
            >
              Especificaciones Técnicas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { spec: "Espesor", value: "3mm, 4mm, 6mm", icon: "📏" },
                { spec: "Formato", value: "1220x2440mm", icon: "📐" },
                { spec: "Núcleo", value: "Polietileno", icon: "🧱" },
                { spec: "Garantía", value: "15-20 años", icon: "🛡️" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-ainsa-white dark:bg-ainsa-black border border-ainsa-gray/30 rounded-2xl p-6"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 
                    className="text-lg font-bold text-ainsa-black dark:text-ainsa-white mb-2"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                  >
                    {item.spec}
                  </h3>
                  <p 
                    className="text-ainsa-red font-semibold"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                  >
                    {item.value}
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