import { SectionTransition, StaggerContainer, StaggerItem } from "../components/PageTransition";
import { CTASection } from "../components/CTASection";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface ConsumiblesAbrasivosPageProps {
  onNavigate: (page: string) => void;
}

export function ConsumiblesAbrasivosPage({ onNavigate }: ConsumiblesAbrasivosPageProps) {
  const productCategories = [
    {
      category: "Soldadura y Electrodos",
      description: "Consumibles de alta calidad para soldadura",
      products: [
        { name: "Electrodos revestidos", specs: "E6010, E6011, E7018, E308L" },
        { name: "Alambre MIG/MAG", specs: "ER70S-6, ER308L, ER316L" },
        { name: "Varilla TIG", specs: "ER70S-2, ER308L, ER316L, ER4043" },
        { name: "Fundentes", specs: "Para soldadura por arco sumergido" }
      ],
      applications: ["Estructuras metálicas", "Tuberías", "Tanques", "Reparaciones"],
      icon: "🔥"
    },
    {
      category: "Discos de Corte",
      description: "Discos para corte de metales ferrosos y no ferrosos",
      products: [
        { name: "Discos delgados", specs: "115mm, 125mm, 230mm (1-3mm)" },
        { name: "Discos reforzados", specs: "Fibra de vidrio, uso intensivo" },
        { name: "Corte inoxidable", specs: "Libres de hierro y azufre" },
        { name: "Corte diamante", specs: "Para concreto y materiales duros" }
      ],
      applications: ["Corte de láminas", "Perfiles", "Tuberías", "Demolición"],
      icon: "⚙️"
    },
    {
      category: "Discos Flap",
      description: "Para desbaste y acabado superficial",
      products: [
        { name: "Grano grueso", specs: "40, 60, 80 (desbaste)" },
        { name: "Grano fino", specs: "100, 120, 220 (acabado)" },
        { name: "Flap inoxidable", specs: "Libres de contaminación férrica" },
        { name: "Flap zirconio", specs: "Alta durabilidad y agresividad" }
      ],
      applications: ["Desbaste de soldadura", "Preparación de superficie", "Acabados", "Pulido"],
      icon: "💿"
    },
    {
      category: "Cepillos y Lijas",
      description: "Herramientas para limpieza y acabado",
      products: [
        { name: "Cepillos copa", specs: "Alambre ondulado y trenzado" },
        { name: "Cepillos circulares", specs: "Para amoladoras angulares" },
        { name: "Lijas en rollo", specs: "Granos 40 a 400" },
        { name: "Discos de lija", specs: "PSA y Velcro, diversos granos" }
      ],
      applications: ["Limpieza de óxido", "Preparación de pintura", "Pulido", "Texturizado"],
      icon: "🧽"
    }
  ];

  const applications = [
    {
      sector: "Fabricación Metálica",
      description: "Soldadura, corte y acabado de estructuras",
      tools: ["Electrodos", "Discos corte", "Flap discs"],
      icon: "🏭"
    },
    {
      sector: "Mantenimiento Industrial",
      description: "Reparación y mantenimiento de equipos",
      tools: ["Cepillos", "Lijas", "Electrodos"],
      icon: "🔧"
    },
    {
      sector: "Construcción",
      description: "Obras civiles y estructuras metálicas",
      tools: ["Discos diamante", "Electrodos", "Cepillos"],
      icon: "🏗️"
    },
    {
      sector: "Talleres Mecánicos",
      description: "Reparación automotriz e industrial",
      tools: ["Discos corte", "Lijas", "Flap discs"],
      icon: "🚗"
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
              Consumibles
              <span 
                className="block text-accent"
                style={{ fontStyle: 'italic', fontWeight: 400 }}
              >
                y Abrasivos
              </span>
            </h1>
            <p 
              className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Complementos de calidad para mantenimiento y producción. Electrodos, soldadura, 
              discos de corte, cepillos, lijas y herramientas abrasivas profesionales.
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
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxkaW5nJTIwZWxlY3Ryb2RlcyUyMGdyaW5kaW5nJTIwZGlzY3N8ZW58MXx8fHwxNzU3MzEzMjE3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Welding electrodes and grinding discs"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
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
                Categorías de Productos
              </h2>
              <p 
                className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                Amplio inventario de consumibles y herramientas abrasivas para 
                todas las necesidades de fabricación, mantenimiento y reparación.
              </p>
            </div>

            <div className="space-y-12">
              {productCategories.map((category, index) => (
                <div 
                  key={index}
                  className="bg-background border border-border/30 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start space-x-6">
                    <div className="text-5xl">{category.icon}</div>
                    <div className="flex-1">
                      <h3 
                        className="text-2xl lg:text-3xl font-bold text-foreground mb-3"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                      >
                        {category.category}
                      </h3>
                      <p 
                        className="text-muted-foreground mb-6"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                      >
                        {category.description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {category.products.map((product, productIndex) => (
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
                          {category.applications.map((app, appIndex) => (
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

      {/* Applications by Sector */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl lg:text-5xl font-bold mb-6 text-foreground"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
              >
                Sectores de Aplicación
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <div 
                  key={index}
                  className="bg-background border border-border/30 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{application.icon}</div>
                  <h3 
                    className="text-lg font-bold text-foreground mb-2"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                  >
                    {application.sector}
                  </h3>
                  <p 
                    className="text-sm text-muted-foreground mb-4"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                  >
                    {application.description}
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {application.tools.map((tool, toolIndex) => (
                      <span 
                        key={toolIndex}
                        className="bg-muted/50 text-foreground px-2 py-1 rounded text-xs border border-border/30"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <h2 
              className="text-3xl lg:text-5xl font-bold mb-12 text-foreground"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
            >
              Calidad Garantizada
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Marcas Reconocidas",
                  description: "Productos de fabricantes líderes mundiales",
                  icon: "🏆"
                },
                {
                  title: "Certificaciones",
                  description: "AWS, ISO 9001, normas internacionales",
                  icon: "📋"
                },
                {
                  title: "Control de Calidad",
                  description: "Pruebas y verificaciones constantes",
                  icon: "🔬"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-background border border-border/30 rounded-2xl p-8"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 
                    className="text-xl font-bold text-foreground mb-3"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                  >
                    {item.title}
                  </h3>
                  <p 
                    className="text-muted-foreground"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                  >
                    {item.description}
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