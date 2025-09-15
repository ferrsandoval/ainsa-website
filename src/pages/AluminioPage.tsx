import { SectionTransition, StaggerContainer, StaggerItem } from "../components/PageTransition";
import { CTASection } from "../components/CTASection";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface AluminioPageProps {
  onNavigate: (page: string) => void;
}

export function AluminioPage({ onNavigate }: AluminioPageProps) {
  const aluminioData = [
    {
      category: "Láminas Especializadas",
      description: "Láminas lisas, antiderrapantes y perforadas",
      specifications: ["Aleaciones 1100, 3003, 5052", "Espesores desde 0.5mm hasta 25mm", "Acabados naturales y anodizados"],
      applications: ["Construcción", "Transporte", "Arquitectura", "Señalización"]
    },
    {
      category: "Placas de Alto Rendimiento",
      description: "Placas diamantadas y Fortalum",
      specifications: ["Alta resistencia mecánica", "Superficie antideslizante", "Resistencia a la corrosión"],
      applications: ["Plataformas industriales", "Escalones", "Pisos de vehículos", "Estructuras marinas"]
    },
    {
      category: "Tubería de Precisión",
      description: "Tubos redondos, cuadrados y rectangulares (6061, 6063)",
      specifications: ["Aleaciones estructurales", "Tolerancias precisas", "Acabados extruidos"],
      applications: ["Estructuras ligeras", "Marcos", "Sistemas de ventilación", "Mobiliario"]
    },
    {
      category: "Perfiles Estructurales",
      description: "Ángulos, canales y soleras",
      specifications: ["Múltiples configuraciones", "Aleaciones de alta resistencia", "Cortes a medida"],
      applications: ["Construcción ligera", "Marcos de ventanas", "Estructuras expuestas", "Elementos decorativos"]
    }
  ];

  const applications = [
    {
      sector: "Construcción",
      description: "Fachadas, ventanas, estructuras ligeras",
      icon: "🏗️"
    },
    {
      sector: "Transporte",
      description: "Carrocerías, tanques, componentes",
      icon: "🚛"
    },
    {
      sector: "Arquitectura",
      description: "Elementos decorativos, revestimientos",
      icon: "🏛️"
    },
    {
      sector: "Industrial",
      description: "Equipos, maquinaria, estructuras",
      icon: "🏭"
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
              Aluminio
              <span 
                className="block text-ainsa-red"
                style={{ fontStyle: 'italic', fontWeight: 400 }}
              >
                Industrial
              </span>
            </h1>
            <p 
              className="text-lg lg:text-xl text-ainsa-gray leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Ligereza y versatilidad para múltiples aplicaciones. Ofrecemos productos de aluminio 
              de alta calidad para la industria de la construcción, transporte y manufactura.
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
                  src="https://images.unsplash.com/photo-1613241541494-f7acea6e92a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHVtaW51bSUyMHNoZWV0cyUyMG1ldGFsfGVufDF8fHx8MTc1NzMxMzIxN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Aluminum sheets and profiles"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>
      </SectionTransition>

      {/* Products Section */}
      <section className="py-16 lg:py-24 bg-ainsa-gray/10 dark:bg-ainsa-gray/20/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl lg:text-5xl font-bold mb-6 text-ainsa-black dark:text-ainsa-white"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
              >
                Productos de Aluminio
              </h2>
              <p 
                className="text-lg lg:text-xl text-ainsa-gray leading-relaxed max-w-3xl mx-auto"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                Amplio inventario en aleaciones de alta calidad con certificaciones internacionales 
                para proyectos industriales y arquitectónicos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aluminioData.map((producto, index) => (
                <div 
                  key={index}
                  className="bg-ainsa-white dark:bg-ainsa-black border border-ainsa-gray/30 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="mb-6">
                    <h3 
                      className="text-2xl lg:text-3xl font-bold text-ainsa-black dark:text-ainsa-white mb-3"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                    >
                      {producto.category}
                    </h3>
                    <p 
                      className="text-ainsa-gray"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                    >
                      {producto.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 
                      className="font-semibold text-ainsa-black dark:text-ainsa-white mb-3"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                    >
                      Especificaciones:
                    </h4>
                    <ul className="space-y-2">
                      {producto.specifications.map((spec, specIndex) => (
                        <li 
                          key={specIndex}
                          className="flex items-start space-x-2 text-ainsa-gray"
                          style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                        >
                          <span className="text-ainsa-red mt-1">•</span>
                          <span>{spec}</span>
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
                      {producto.applications.map((app, appIndex) => (
                        <span 
                          key={appIndex}
                          className="bg-accent/10 text-ainsa-red px-3 py-1 rounded-full text-sm border border-accent/20"
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

      {/* Applications Section */}
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
                El aluminio es la solución ideal para proyectos que requieren resistencia, 
                ligereza y excelente relación costo-beneficio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <div 
                  key={index}
                  className="bg-ainsa-white dark:bg-ainsa-black border border-ainsa-gray/30 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="text-4xl mb-4">{application.icon}</div>
                  <h3 
                    className="text-lg font-semibold text-ainsa-black dark:text-ainsa-white mb-2"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                  >
                    {application.sector}
                  </h3>
                  <p 
                    className="text-sm text-ainsa-gray"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                  >
                    {application.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 lg:py-24 bg-ainsa-gray/10 dark:bg-ainsa-gray/20/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <h2 
              className="text-3xl lg:text-5xl font-bold mb-12 text-ainsa-black dark:text-ainsa-white"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
            >
              Ventajas del Aluminio
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Ligereza",
                  description: "Peso 3 veces menor que el acero",
                  icon: "⚖️"
                },
                {
                  title: "Resistencia a la Corrosión",
                  description: "Excelente durabilidad en exteriores",
                  icon: "🛡️"
                },
                {
                  title: "Reciclabilidad",
                  description: "100% reciclable sin pérdida de propiedades",
                  icon: "♻️"
                }
              ].map((advantage, index) => (
                <div 
                  key={index}
                  className="bg-ainsa-white dark:bg-ainsa-black border border-ainsa-gray/30 rounded-2xl p-8"
                >
                  <div className="text-4xl mb-4">{advantage.icon}</div>
                  <h3 
                    className="text-xl font-bold text-ainsa-black dark:text-ainsa-white mb-3"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                  >
                    {advantage.title}
                  </h3>
                  <p 
                    className="text-ainsa-gray"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                  >
                    {advantage.description}
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