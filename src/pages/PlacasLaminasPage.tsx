import { CTASection } from "../components/CTASection";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface PlacasLaminasPageProps {
  onNavigate: (page: string) => void;
}

export function PlacasLaminasPage({ onNavigate }: PlacasLaminasPageProps) {
  const especificaciones = [
    {
      categoria: "Placas Gruesas",
      rango: "3mm - 100mm",
      medidas: "1.5m x 3m, 2m x 4m, 2m x 6m",
      aplicaciones: ["Tanques de almacenamiento", "Estructuras pesadas", "Equipos de proceso"],
      acabados: ["2B", "BA", "No. 4", "#8"]
    },
    {
      categoria: "Láminas Medianas", 
      rango: "0.6mm - 3mm",
      medidas: "1.22m x 2.44m, 1.5m x 3m",
      aplicaciones: ["Paneles arquitectónicos", "Equipos de cocina", "Decoración"],
      acabados: ["2B", "BA", "No. 4", "HL"]
    },
    {
      categoria: "Láminas Delgadas",
      rango: "0.3mm - 0.6mm", 
      medidas: "1.22m x 2.44m",
      aplicaciones: ["Componentes electrónicos", "Recipientes pequeños", "Aplicaciones decorativas"],
      acabados: ["2B", "BA", "No. 8"]
    }
  ];

  const acabados = [
    {
      tipo: "2B",
      descripcion: "Acabado laminado en frío y recocido",
      aplicaciones: "Uso general industrial y comercial",
      caracteristicas: "Superficie mate, fácil limpieza"
    },
    {
      tipo: "BA",
      descripcion: "Acabado brillante recocido",
      aplicaciones: "Aplicaciones decorativas y arquitectónicas",
      caracteristicas: "Superficie altamente reflectiva"
    },
    {
      tipo: "No. 4",
      descripcion: "Acabado pulido direccional",
      aplicaciones: "Equipos de cocina, electrodomésticos",
      caracteristicas: "Superficie satinada uniforme"
    },
    {
      tipo: "HL (Hair Line)",
      descripción: "Acabado rayado continuo",
      aplicaciones: "Paneles arquitectónicos, ascensores",
      caracteristicas: "Líneas continuas y uniformes"
    },
    {
      tipo: "No. 8",
      descripcion: "Acabado espejo",
      aplicaciones: "Decoración, aplicaciones de alta estética",
      caracteristicas: "Reflectividad tipo espejo"
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
                PRODUCTOS LAMINADOS
              </span>
            </div>
            <h1 
              className="text-4xl lg:text-6xl xl:text-7xl leading-tight tracking-tight text-ainsa-black dark:text-ainsa-white mb-6"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
            >
              Placas y Láminas
              <span 
                className="block text-ainsa-red"
                style={{ fontStyle: 'italic', fontWeight: 400 }}
              >
                de Acero Inoxidable
              </span>
            </h1>
            <p 
              className="text-lg lg:text-xl text-ainsa-gray leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              La más amplia selección de placas y láminas en diferentes espesores, medidas y acabados superficiales 
              para proyectos industriales, comerciales y arquitectónicos.
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
                alt="Stainless steel sheets stacked"
                className="w-full h-96 lg:h-[500px] object-cover"
                applyDarkFilter={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
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
                Disponibles en múltiples espesores y medidas estándar, 
                con posibilidad de corte a medida según los requerimientos del proyecto.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {especificaciones.map((spec, index) => (
                <div 
                  key={index}
                  className="bg-ainsa-white dark:bg-ainsa-black border border-ainsa-gray/30 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="mb-6">
                    <h3 
                      className="text-2xl font-bold text-ainsa-black dark:text-ainsa-white mb-2"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                    >
                      {spec.categoria}
                    </h3>
                    <div className="bg-ainsa-red/10 text-ainsa-red px-3 py-1 rounded-full text-sm inline-block">
                      {spec.rango}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 
                        className="font-semibold text-ainsa-black dark:text-ainsa-white mb-2"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                      >
                        Medidas Estándar:
                      </h4>
                      <p 
                        className="text-ainsa-gray text-sm"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                      >
                        {spec.medidas}
                      </p>
                    </div>

                    <div>
                      <h4 
                        className="font-semibold text-ainsa-black dark:text-ainsa-white mb-2"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                      >
                        Aplicaciones:
                      </h4>
                      <ul className="space-y-1">
                        {spec.aplicaciones.map((app, appIndex) => (
                          <li 
                            key={appIndex}
                            className="flex items-start space-x-2 text-ainsa-gray text-sm"
                            style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                          >
                            <span className="text-ainsa-red mt-1">•</span>
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 
                        className="font-semibold text-ainsa-black dark:text-ainsa-white mb-2"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                      >
                        Acabados:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {spec.acabados.map((acabado, acabadoIndex) => (
                          <span 
                            key={acabadoIndex}
                            className="bg-ainsa-gray/10 dark:bg-ainsa-gray/20 text-ainsa-gray px-2 py-1 rounded text-xs"
                            style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                          >
                            {acabado}
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

      {/* Surface Finishes Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl lg:text-5xl font-bold mb-6 text-ainsa-black dark:text-ainsa-white"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
              >
                Acabados Superficiales
              </h2>
              <p 
                className="text-lg lg:text-xl text-ainsa-gray leading-relaxed max-w-3xl mx-auto"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                Cada acabado está diseñado para aplicaciones específicas, 
                desde uso industrial hasta aplicaciones decorativas de alta estética.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {acabados.map((acabado, index) => (
                <div 
                  key={index}
                  className="bg-ainsa-white dark:bg-ainsa-black border border-ainsa-gray/30 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-ainsa-red text-ainsa-red-foreground px-4 py-2 rounded-lg font-bold mr-4">
                      {acabado.tipo}
                    </div>
                    <h3 
                      className="text-xl font-semibold text-ainsa-black dark:text-ainsa-white"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                    >
                      {acabado.descripcion}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 
                        className="font-medium text-ainsa-black dark:text-ainsa-white mb-1"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 500 }}
                      >
                        Aplicaciones:
                      </h4>
                      <p 
                        className="text-ainsa-gray text-sm"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                      >
                        {acabado.aplicaciones}
                      </p>
                    </div>

                    <div>
                      <h4 
                        className="font-medium text-ainsa-black dark:text-ainsa-white mb-1"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 500 }}
                      >
                        Características:
                      </h4>
                      <p 
                        className="text-ainsa-gray text-sm"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                      >
                        {acabado.caracteristicas}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-ainsa-gray/10 dark:bg-ainsa-gray/20/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-ainsa-white dark:bg-ainsa-black border border-ainsa-gray/30 rounded-3xl p-12 lg:p-16 text-center">
              <h2 
                className="text-3xl lg:text-4xl font-bold mb-6 text-ainsa-black dark:text-ainsa-white"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
              >
                Servicios Adicionales
              </h2>
              <p 
                className="text-lg lg:text-xl text-ainsa-gray leading-relaxed mb-8"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                Complementamos nuestro inventario con servicios especializados 
                para entregar el producto exacto que necesitas.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "✂️",
                    title: "Corte a Medida",
                    description: "Guillotina, plasma, láser según requerimientos"
                  },
                  {
                    icon: "📦",
                    title: "Embalaje Especializado",
                    description: "Protección adecuada para transporte seguro"
                  },
                  {
                    icon: "🚚",
                    title: "Entrega Programada",
                    description: "Logística coordinada según cronograma de obra"
                  }
                ].map((service, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 
                      className="font-semibold text-ainsa-black dark:text-ainsa-white mb-2"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                    >
                      {service.title}
                    </h3>
                    <p 
                      className="text-ainsa-gray text-sm"
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