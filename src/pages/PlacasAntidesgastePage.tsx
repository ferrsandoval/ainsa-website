import { SectionTransition, StaggerContainer, StaggerItem } from "../components/PageTransition";
import { CTASection } from "../components/CTASection";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface PlacasAntidesgastePageProps {
  onNavigate: (page: string) => void;
}

export function PlacasAntidesgastePage({ onNavigate }: PlacasAntidesgastePageProps) {
  const placasData = [
    {
      grade: "AR400",
      hardness: "360-440 HBW",
      description: "Resistencia media para aplicaciones generales",
      applications: ["Tolvas de carga", "Chutes", "Forros de camiones", "Cribas"],
      characteristics: ["Buena soldabilidad", "Fácil conformado", "Costo-efectivo", "Disponibilidad inmediata"]
    },
    {
      grade: "AR500",
      hardness: "460-540 HBW",
      description: "Alta resistencia para condiciones severas",
      applications: ["Trituradoras", "Molinos", "Equipos mineros", "Blindajes"],
      characteristics: ["Excelente resistencia al desgaste", "Alta durabilidad", "Resistencia al impacto", "Larga vida útil"]
    },
    {
      grade: "AR600",
      hardness: "570-625 HBW",
      description: "Máxima resistencia para aplicaciones extremas",
      applications: ["Martillos trituradores", "Blindajes balísticos", "Componentes críticos", "Maquinaria pesada"],
      characteristics: ["Dureza excepcional", "Resistencia extrema", "Aplicaciones críticas", "Performance superior"]
    },
    {
      grade: "HARDOX 400/450/500",
      hardness: "370-540 HBW",
      description: "Aceros suecos de calidad premium",
      applications: ["Palas cargadoras", "Cuchillas", "Contenedores", "Volquetes"],
      characteristics: ["Calidad garantizada", "Composición controlada", "Soldabilidad superior", "Tolerancias precisas"]
    }
  ];

  const applications = [
    {
      industry: "Minería",
      equipment: ["Trituradoras", "Molinos", "Cribas", "Tolvas"],
      description: "Resistencia extrema para operaciones mineras",
      icon: "⛏️"
    },
    {
      industry: "Construcción",
      equipment: ["Palas cargadoras", "Excavadoras", "Bulldozers", "Volquetes"],
      description: "Durabilidad para maquinaria pesada",
      icon: "🚜"
    },
    {
      industry: "Reciclaje",
      equipment: ["Trituradoras", "Cizallas", "Transportadores", "Separadores"],
      description: "Resistencia al desgaste abrasivo",
      icon: "♻️"
    },
    {
      industry: "Cementeras",
      equipment: ["Molinos", "Mezcladoras", "Transportadores", "Silos"],
      description: "Resistencia a materiales abrasivos",
      icon: "🏭"
    }
  ];

  const specifications = [
    {
      characteristic: "Espesores",
      range: "3mm - 100+ mm",
      description: "Amplia gama de espesores disponibles",
      icon: "📏"
    },
    {
      characteristic: "Formatos",
      range: "1220x2440, 1500x3000, 2000x6000",
      description: "Formatos estándar y cortes especiales",
      icon: "📐"
    },
    {
      characteristic: "Soldabilidad",
      range: "Excelente a buena",
      description: "Según grado y espesor",
      icon: "🔥"
    },
    {
      characteristic: "Conformado",
      range: "En frío limitado",
      description: "Recomendable precalentamiento",
      icon: "🔨"
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
              Placas Antidesgaste
              <span 
                className="block text-ainsa-red"
                style={{ fontStyle: 'italic', fontWeight: 400 }}
              >
                y Ultra Resistentes
              </span>
            </h1>
            <p 
              className="text-lg lg:text-xl text-ainsa-gray leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Desarrolladas para soportar condiciones extremas en minería, construcción y maquinaria pesada. 
              Máxima resistencia al desgaste y al impacto.
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
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWFyJTIwcmVzaXN0YW50JTIwc3RlZWwlMjBwbGF0ZXMlMjBtaW5pbmd8ZW58MXx8fHwxNzU3MzEzMjE3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Wear resistant steel plates for mining and heavy machinery"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>
      </SectionTransition>

      {/* Grades Section */}
      <section className="py-16 lg:py-24 bg-ainsa-gray/10 dark:bg-ainsa-gray/20/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl lg:text-5xl font-bold mb-6 text-ainsa-black dark:text-ainsa-white"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
              >
                Grados Disponibles
              </h2>
              <p 
                className="text-lg lg:text-xl text-ainsa-gray leading-relaxed max-w-3xl mx-auto"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                Cada grado está diseñado para un nivel específico de resistencia al desgaste, 
                desde aplicaciones generales hasta condiciones extremas.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {placasData.map((placa, index) => (
                <div 
                  key={index}
                  className="bg-ainsa-white dark:bg-ainsa-black border border-ainsa-gray/30 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 
                        className="text-2xl lg:text-3xl font-bold text-ainsa-black dark:text-ainsa-white"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                      >
                        {placa.grade}
                      </h3>
                      <span 
                        className="bg-ainsa-red/10 text-ainsa-red px-3 py-1 rounded-full text-sm border border-ainsa-red/20"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                      >
                        {placa.hardness}
                      </span>
                    </div>
                    <p 
                      className="text-ainsa-gray"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                    >
                      {placa.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 
                      className="font-semibold text-ainsa-black dark:text-ainsa-white mb-3"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                    >
                      Características:
                    </h4>
                    <ul className="space-y-2">
                      {placa.characteristics.map((char, charIndex) => (
                        <li 
                          key={charIndex}
                          className="flex items-start space-x-2 text-ainsa-gray"
                          style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                        >
                          <span className="text-ainsa-red mt-1">•</span>
                          <span>{char}</span>
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
                      {placa.applications.map((app, appIndex) => (
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

      {/* Applications by Industry */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl lg:text-5xl font-bold mb-6 text-ainsa-black dark:text-ainsa-white"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
              >
                Aplicaciones por Industria
              </h2>
              <p 
                className="text-lg lg:text-xl text-ainsa-gray leading-relaxed max-w-3xl mx-auto"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                Las placas antidesgaste están diseñadas para soportar las condiciones más exigentes 
                en diferentes sectores industriales.
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
                        {application.industry}
                      </h3>
                      <p 
                        className="text-ainsa-gray mb-4"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                      >
                        {application.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {application.equipment.map((equipment, equipIndex) => (
                          <span 
                            key={equipIndex}
                            className="bg-ainsa-red/10 text-ainsa-red px-3 py-1 rounded-full text-sm border border-ainsa-red/20"
                            style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                          >
                            {equipment}
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
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl lg:text-5xl font-bold mb-6 text-ainsa-black dark:text-ainsa-white"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
              >
                Especificaciones Técnicas
              </h2>
              <p 
                className="text-lg lg:text-xl text-ainsa-gray leading-relaxed max-w-3xl mx-auto"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                Información técnica detallada para la selección correcta del material 
                según los requerimientos de cada aplicación.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specifications.map((spec, index) => (
                <div 
                  key={index}
                  className="bg-ainsa-white dark:bg-ainsa-black border border-ainsa-gray/30 rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl mb-4">{spec.icon}</div>
                  <h3 
                    className="text-lg font-bold text-ainsa-black dark:text-ainsa-white mb-2"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                  >
                    {spec.characteristic}
                  </h3>
                  <p 
                    className="text-ainsa-red font-semibold mb-2"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                  >
                    {spec.range}
                  </p>
                  <p 
                    className="text-sm text-ainsa-gray"
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

      {/* Benefits Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <h2 
              className="text-3xl lg:text-5xl font-bold mb-12 text-ainsa-black dark:text-ainsa-white"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
            >
              Beneficios Clave
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Reducción de Costos",
                  description: "Mayor vida útil reduce costos de mantenimiento y reemplazo",
                  icon: "💰"
                },
                {
                  title: "Menor Tiempo de Inactividad",
                  description: "Durabilidad superior minimiza paradas por mantenimiento",
                  icon: "⏱️"
                },
                {
                  title: "Performance Superior",
                  description: "Resistencia excepcional en condiciones extremas de trabajo",
                  icon: "🏆"
                }
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-ainsa-white dark:bg-ainsa-black border border-ainsa-gray/30 rounded-2xl p-8"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 
                    className="text-xl font-bold text-ainsa-black dark:text-ainsa-white mb-3"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                  >
                    {benefit.title}
                  </h3>
                  <p 
                    className="text-ainsa-gray"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                  >
                    {benefit.description}
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