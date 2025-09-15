import { CTASection } from "../components/CTASection";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface TubosPerfilesPageProps {
  onNavigate: (page: string) => void;
}

export function TubosPerfilesPage({ onNavigate }: TubosPerfilesPageProps) {
  const tubosData = [
    {
      tipo: "Tubos Redondos",
      descripcion: "Tubos sin costura y soldados",
      diametros: "1/2\" hasta 12\" (12.7mm - 304.8mm)",
      espesores: "0.6mm hasta 12.7mm",
      longitudes: "6m estándar, otras bajo pedido",
      aplicaciones: ["Intercambiadores de calor", "Sistemas de tuberías", "Estructuras", "Equipos de proceso"]
    },
    {
      tipo: "Tubos Cuadrados",
      descripcion: "Perfiles estructurales cuadrados",
      diametros: "10x10mm hasta 150x150mm",
      espesores: "0.8mm hasta 6mm",
      longitudes: "6m estándar",
      aplicaciones: ["Estructuras arquitectónicas", "Marcos", "Mobiliario", "Construcción"]
    },
    {
      tipo: "Tubos Rectangulares",
      descripcion: "Perfiles rectangulares para construcción",
      diametros: "20x10mm hasta 200x100mm",
      espesores: "0.8mm hasta 8mm", 
      longitudes: "6m estándar",
      aplicaciones: ["Marcos estructurales", "Construcción", "Mobiliario industrial", "Arquitectura"]
    }
  ];

  const perfilesData = [
    {
      tipo: "Ángulos",
      descripcion: "Perfiles en L para estructuras",
      medidas: "20x20mm hasta 200x200mm",
      espesores: "2mm hasta 20mm",
      aplicaciones: ["Estructuras metálicas", "Refuerzos", "Marcos", "Soportes"]
    },
    {
      tipo: "Canales",
      descripcion: "Perfiles en U para construcción",
      medidas: "40x20mm hasta 300x100mm",
      espesores: "3mm hasta 15mm",
      aplicaciones: ["Estructuras", "Rieles", "Marcos", "Soportes industriales"]
    },
    {
      tipo: "Vigas IPR",
      descripcion: "Vigas I para cargas pesadas",
      medidas: "80x42mm hasta 600x220mm",
      espesores: "4mm hasta 30mm",
      aplicaciones: ["Construcción pesada", "Puentes", "Estructuras industriales", "Edificios"]
    },
    {
      tipo: "Perfiles T",
      descripcion: "Perfiles en T para aplicaciones especiales",
      medidas: "20x20mm hasta 200x200mm",
      espesores: "2mm hasta 20mm",
      aplicaciones: ["Refuerzos estructurales", "Marcos especiales", "Soportes", "Aplicaciones marinas"]
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
                PRODUCTOS ESTRUCTURALES
              </span>
            </div>
            <h1 
              className="text-4xl lg:text-6xl xl:text-7xl leading-tight tracking-tight text-ainsa-black dark:text-ainsa-white mb-6"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
            >
              Tubos y Perfiles
              <span 
                className="block text-ainsa-red"
                style={{ fontStyle: 'italic', fontWeight: 400 }}
              >
                Estructurales
              </span>
            </h1>
            <p 
              className="text-lg lg:text-xl text-ainsa-gray leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Soluciones completas en tubería y perfilería de acero inoxidable para construcción, 
              industria y aplicaciones estructurales que requieren resistencia y durabilidad.
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
                src="https://images.unsplash.com/photo-1683884020624-f12f0f113cac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMHBpcGVzJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NTcyMzUyMjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Steel pipes industrial installation"
                className="w-full h-96 lg:h-[500px] object-cover"
                applyDarkFilter={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Tubes Section */}
      <section className="py-16 lg:py-24 bg-ainsa-gray/10 dark:bg-ainsa-gray/20/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl lg:text-5xl font-bold mb-6 text-ainsa-black dark:text-ainsa-white"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
              >
                Tubería de Acero Inoxidable
              </h2>
              <p 
                className="text-lg lg:text-xl text-ainsa-gray leading-relaxed max-w-3xl mx-auto"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                Amplio inventario de tubería en diferentes geometrías y especificaciones 
                para sistemas de fluidos, estructuras y aplicaciones industriales.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {tubosData.map((tubo, index) => (
                <div 
                  key={index}
                  className="bg-ainsa-white dark:bg-ainsa-black border border-ainsa-gray/30 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="mb-6">
                    <h3 
                      className="text-2xl font-bold text-ainsa-black dark:text-ainsa-white mb-3"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                    >
                      {tubo.tipo}
                    </h3>
                    <p 
                      className="text-ainsa-gray"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                    >
                      {tubo.descripcion}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 
                        className="font-semibold text-ainsa-black dark:text-ainsa-white mb-1"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                      >
                        Diámetros:
                      </h4>
                      <p 
                        className="text-ainsa-gray text-sm"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                      >
                        {tubo.diametros}
                      </p>
                    </div>

                    <div>
                      <h4 
                        className="font-semibold text-ainsa-black dark:text-ainsa-white mb-1"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                      >
                        Espesores:
                      </h4>
                      <p 
                        className="text-ainsa-gray text-sm"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                      >
                        {tubo.espesores}
                      </p>
                    </div>

                    <div>
                      <h4 
                        className="font-semibold text-ainsa-black dark:text-ainsa-white mb-1"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                      >
                        Longitudes:
                      </h4>
                      <p 
                        className="text-ainsa-gray text-sm"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                      >
                        {tubo.longitudes}
                      </p>
                    </div>

                    <div>
                      <h4 
                        className="font-semibold text-ainsa-black dark:text-ainsa-white mb-2"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                      >
                        Aplicaciones:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {tubo.aplicaciones.map((app, appIndex) => (
                          <span 
                            key={appIndex}
                            className="bg-ainsa-red/10 text-ainsa-red px-2 py-1 rounded text-xs border border-ainsa-red/20"
                            style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                          >
                            {app}
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

      {/* Profiles Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl lg:text-5xl font-bold mb-6 text-ainsa-black dark:text-ainsa-white"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
              >
                Perfiles Estructurales
              </h2>
              <p 
                className="text-lg lg:text-xl text-ainsa-gray leading-relaxed max-w-3xl mx-auto"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                Perfilería completa para construcción y aplicaciones estructurales, 
                disponible en múltiples configuraciones y dimensiones.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {perfilesData.map((perfil, index) => (
                <div 
                  key={index}
                  className="bg-ainsa-white dark:bg-ainsa-black border border-ainsa-gray/30 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="mb-6">
                    <h3 
                      className="text-2xl font-bold text-ainsa-black dark:text-ainsa-white mb-3"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                    >
                      {perfil.tipo}
                    </h3>
                    <p 
                      className="text-ainsa-gray"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                    >
                      {perfil.descripcion}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 
                        className="font-semibold text-ainsa-black dark:text-ainsa-white mb-1"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                      >
                        Medidas Disponibles:
                      </h4>
                      <p 
                        className="text-ainsa-gray text-sm"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                      >
                        {perfil.medidas}
                      </p>
                    </div>

                    <div>
                      <h4 
                        className="font-semibold text-ainsa-black dark:text-ainsa-white mb-1"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                      >
                        Espesores:
                      </h4>
                      <p 
                        className="text-ainsa-gray text-sm"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                      >
                        {perfil.espesores}
                      </p>
                    </div>

                    <div>
                      <h4 
                        className="font-semibold text-ainsa-black dark:text-ainsa-white mb-2"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 600 }}
                      >
                        Aplicaciones Principales:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {perfil.aplicaciones.map((app, appIndex) => (
                          <span 
                            key={appIndex}
                            className="bg-ainsa-gray/10 dark:bg-ainsa-gray/20 text-ainsa-gray px-2 py-1 rounded text-xs"
                            style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                          >
                            {app}
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

      {/* Standards Section */}
      <section className="py-16 lg:py-24 bg-ainsa-gray/10 dark:bg-ainsa-gray/20/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-ainsa-white dark:bg-ainsa-black border border-ainsa-gray/30 rounded-3xl p-12 lg:p-16 text-center">
              <h2 
                className="text-3xl lg:text-4xl font-bold mb-6 text-ainsa-black dark:text-ainsa-white"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
              >
                Normas y Certificaciones
              </h2>
              <p 
                className="text-lg lg:text-xl text-ainsa-gray leading-relaxed mb-8"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                Todos nuestros productos cumplen con las normas internacionales más exigentes 
                y cuentan con certificaciones de calidad completas.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    norma: "ASTM",
                    descripcion: "Estándares americanos para materiales"
                  },
                  {
                    norma: "AISI",
                    descripcion: "Instituto Americano del Hierro y Acero"
                  },
                  {
                    norma: "EN",
                    descripcion: "Normas europeas unificadas"
                  },
                  {
                    norma: "JIS",
                    descripcion: "Estándares industriales japoneses"
                  }
                ].map((standard, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-ainsa-red text-ainsa-red-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                      {standard.norma}
                    </div>
                    <p 
                      className="text-ainsa-gray text-sm"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                    >
                      {standard.descripcion}
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