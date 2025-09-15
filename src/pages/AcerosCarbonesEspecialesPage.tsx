import { SectionTransition, StaggerContainer, StaggerItem } from "../components/PageTransition";
import { CTASection } from "../components/CTASection";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface AcerosCarbonesEspecialesPageProps {
  onNavigate: (page: string) => void;
}

export function AcerosCarbonesEspecialesPage({ onNavigate }: AcerosCarbonesEspecialesPageProps) {
  const acerosData = [
    {
      category: "Láminas de Acero al Carbón",
      description: "HR, CR, A36 y 1008 para estructuras y manufactura",
      specifications: ["Espesores desde 1mm hasta 100mm", "Formatos estándar 4x8, 5x10", "Acabados laminados en caliente y frío"],
      applications: ["Estructuras metálicas", "Tanques de almacenamiento", "Carrocerías", "Bases de maquinaria"],
      grades: ["A36", "A572", "HR", "CR", "1008"]
    },
    {
      category: "Tubería Industrial",
      description: "Cédulas 10, 40, 80, 160 y XXS para alta presión",
      specifications: ["Diámetros de ½\" hasta 48\"", "Normas ASTM A53, A106", "Sin costura y con costura"],
      applications: ["Sistemas de vapor", "Petroquímica", "Calderas", "Estructuras tubulares"],
      grades: ["A53", "A106", "A333", "A335"]
    },
    {
      category: "Aceros para Herramientas",
      description: "O1, A2, D2, H13, P20 para maquinaria de precisión",
      specifications: ["Tratamientos térmicos especiales", "Tolerancias precisas", "Acabados rectificados"],
      applications: ["Moldes de inyección", "Troqueles", "Punzones", "Herramientas de corte"],
      grades: ["O1", "A2", "D2", "H13", "P20", "S7"]
    },
    {
      category: "Aleaciones Especiales",
      description: "4140, 4340, 9840, 8620 para aplicaciones críticas",
      specifications: ["Alta resistencia y tenacidad", "Tratamientos térmicos", "Certificaciones de calidad"],
      applications: ["Ejes de transmisión", "Engranajes", "Componentes automotrices", "Maquinaria pesada"],
      grades: ["4140", "4340", "9840", "8620", "4130"]
    }
  ];

  const applications = [
    {
      sector: "Construcción",
      description: "Estructuras, edificios, puentes",
      materials: ["A36", "A572", "HR"],
      icon: "🏗️"
    },
    {
      sector: "Petroquímica",
      description: "Tuberías, reactores, tanques",
      materials: ["A106", "A333", "A53"],
      icon: "🛢️"
    },
    {
      sector: "Manufactura",
      description: "Moldes, herramientas, troqueles",
      materials: ["O1", "A2", "D2", "H13"],
      icon: "🔧"
    },
    {
      sector: "Automotriz",
      description: "Ejes, engranajes, componentes",
      materials: ["4140", "4340", "8620"],
      icon: "🚗"
    }
  ];

  const treatments = [
    {
      name: "Normalizado",
      description: "Refinamiento de grano y homogeneización",
      icon: "🔥"
    },
    {
      name: "Temple y Revenido",
      description: "Máxima dureza y resistencia",
      icon: "⚒️"
    },
    {
      name: "Recocido",
      description: "Máxima maquinabilidad",
      icon: "🧊"
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
              Acero al Carbón
              <span 
                className="block text-ainsa-red"
                style={{ fontStyle: 'italic', fontWeight: 400 }}
              >
                y Especiales
              </span>
            </h1>
            <p 
              className="text-lg lg:text-xl text-ainsa-gray leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Fortaleza y confiabilidad para proyectos exigentes. Aceros estructurales, 
              para herramientas y aleaciones especiales de alta performance.
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
                  src="https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJib24lMjBzdGVlbCUyMHBpcGVzJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NTczMTMyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Carbon steel pipes and structural steel"
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
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl lg:text-5xl font-bold mb-6 text-ainsa-black dark:text-ainsa-white"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
              >
                Productos Disponibles
              </h2>
              <p 
                className="text-lg lg:text-xl text-ainsa-gray leading-relaxed max-w-3xl mx-auto"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                Desde aceros estructurales básicos hasta aleaciones especiales para aplicaciones críticas 
                en la industria automotriz, petroquímica y manufactura.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {acerosData.map((acero, index) => (
                <div 
                  key={index}
                  className="bg-ainsa-white dark:bg-ainsa-black border border-ainsa-gray/30 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="mb-6">
                    <h3 
                      className="text-2xl lg:text-3xl font-bold text-ainsa-black dark:text-ainsa-white mb-3"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                    >
                      {acero.category}
                    </h3>
                    <p 
                      className="text-ainsa-gray mb-4"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                    >
                      {acero.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 
                      className="font-semibold text-ainsa-black dark:text-ainsa-white mb-3"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                    >
                      Grados Disponibles:
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {acero.grades.map((grade, gradeIndex) => (
                        <span 
                          key={gradeIndex}
                          className="bg-ainsa-red/10 text-ainsa-red px-3 py-1 rounded-full text-sm border border-ainsa-red/20"
                          style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                        >
                          {grade}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 
                      className="font-semibold text-ainsa-black dark:text-ainsa-white mb-3"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                    >
                      Especificaciones:
                    </h4>
                    <ul className="space-y-2">
                      {acero.specifications.map((spec, specIndex) => (
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
                      {acero.applications.map((app, appIndex) => (
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <div 
                  key={index}
                  className="bg-ainsa-white dark:bg-ainsa-black border border-ainsa-gray/30 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{application.icon}</div>
                  <h3 
                    className="text-lg font-bold text-ainsa-black dark:text-ainsa-white mb-2"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                  >
                    {application.sector}
                  </h3>
                  <p 
                    className="text-sm text-ainsa-gray mb-4"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                  >
                    {application.description}
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {application.materials.map((material, materialIndex) => (
                      <span 
                        key={materialIndex}
                        className="bg-ainsa-red/10 text-ainsa-red px-2 py-1 rounded text-xs border border-ainsa-red/20"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Heat Treatments */}
      <section className="py-16 lg:py-24 bg-ainsa-gray/10 dark:bg-ainsa-gray/20/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl lg:text-5xl font-bold mb-6 text-ainsa-black dark:text-ainsa-white"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
              >
                Tratamientos Térmicos
              </h2>
              <p 
                className="text-lg lg:text-xl text-ainsa-gray leading-relaxed max-w-3xl mx-auto"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                Ofrecemos aceros con tratamientos térmicos especializados para optimizar 
                las propiedades mecánicas según la aplicación específica.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {treatments.map((treatment, index) => (
                <div 
                  key={index}
                  className="bg-ainsa-white dark:bg-ainsa-black border border-ainsa-gray/30 rounded-2xl p-8 text-center"
                >
                  <div className="text-4xl mb-4">{treatment.icon}</div>
                  <h3 
                    className="text-xl font-bold text-ainsa-black dark:text-ainsa-white mb-3"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                  >
                    {treatment.name}
                  </h3>
                  <p 
                    className="text-ainsa-gray"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                  >
                    {treatment.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <h2 
              className="text-3xl lg:text-5xl font-bold mb-12 text-ainsa-black dark:text-ainsa-white"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
            >
              Estándares de Calidad
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { standard: "ASTM", description: "Normas americanas" },
                { standard: "AISI/SAE", description: "Designaciones estándar" },
                { standard: "DIN", description: "Normas alemanas" },
                { standard: "JIS", description: "Normas japonesas" }
              ].map((standard, index) => (
                <div 
                  key={index}
                  className="bg-ainsa-white dark:bg-ainsa-black border border-ainsa-gray/30 rounded-2xl p-6"
                >
                  <h3 
                    className="text-lg font-bold text-ainsa-black dark:text-ainsa-white mb-2"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                  >
                    {standard.standard}
                  </h3>
                  <p 
                    className="text-sm text-ainsa-gray"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                  >
                    {standard.description}
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