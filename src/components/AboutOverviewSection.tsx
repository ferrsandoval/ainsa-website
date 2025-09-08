import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface AboutOverviewSectionProps {
  onNavigate: (page: string) => void;
}

export function AboutOverviewSection({ onNavigate }: AboutOverviewSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1719210722633-2756cda18bcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwdGVhbSUyMHdvcmtwbGFjZXxlbnwxfHx8fDE3NTczMDc2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Industrial team workplace"
          className="w-full h-full object-cover"
        />
        
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90 dark:from-background/95 dark:via-background/80 dark:to-background/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60 dark:from-background/80 dark:via-transparent dark:to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32 lg:py-40">
        <div className="max-w-6xl mx-auto">
          
          {/* Eyebrow text */}
          <div className="text-center mb-12">
            <span 
              className="caption text-muted-foreground bg-background/80 dark:bg-background/60 px-6 py-3 rounded-full backdrop-blur-sm border border-border/30"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              ¿QUIÉNES SOMOS?
            </span>
          </div>
          
          {/* Main heading */}
          <div className="text-center mb-20">
            <h2 
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tight mb-8 text-foreground"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
            >
              Empresa Mexicana
              <span 
                className="block" 
                style={{ fontStyle: 'italic', fontWeight: 400 }}
              >
                de Acero Inoxidable
              </span>
            </h2>
            
            <p 
              className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Somos una empresa nacida en México al noroeste de la república en el estado de Sonora, 
              distribuidora de materiales, tubería, conexiones y accesorios para uso sanitario, 
              industrial y ornamental en acero inoxidable.
            </p>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                value: "Calidad",
                description: "Materiales certificados que superan los estándares internacionales",
                icon: "🎯"
              },
              {
                value: "Experiencia",
                description: "Décadas de conocimiento especializado en acero inoxidable",
                icon: "🏆"
              },
              {
                value: "Innovación",
                description: "Soluciones tecnológicas avanzadas para cada proyecto",
                icon: "💡"
              },
              {
                value: "Confianza",
                description: "Relaciones duraderas basadas en resultados consistentes",
                icon: "🤝"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-background/80 dark:bg-background/60 backdrop-blur-sm border border-border/30 rounded-2xl p-8 hover:bg-background/90 dark:hover:bg-background/70 transition-all duration-300 hover:scale-105 group text-center"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 
                  className="text-2xl font-bold mb-4 text-foreground"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                >
                  {item.value}
                </h3>
                <p 
                  className="text-muted-foreground leading-relaxed"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Story section */}
          <div className="bg-background/90 dark:bg-background/70 backdrop-blur-sm border border-border/30 rounded-3xl p-12 lg:p-16 mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h3 
                className="text-3xl lg:text-4xl font-bold mb-8 text-foreground"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
              >
                Nuestra Historia
              </h3>
              <p 
                className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                Comprometidos con nuestros clientes AINSA busca ofrecer la mejor calidad en acero inoxidable, 
                así como otorgar el mejor servicio de la región buscando ser líderes en la distribución 
                de inoxidables en el noroeste.
              </p>
              <p 
                className="text-lg lg:text-xl text-muted-foreground leading-relaxed"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                AINSA se compromete con la promoción, capacitación y asesoramiento para incrementar 
                las aplicaciones de acero inoxidable en las industrias de la región, gracias a nuestra 
                amplia gama de productos, complementos y su disponibilidad.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              onClick={() => onNavigate('nosotros')}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 h-auto font-medium text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Conoce Más Sobre Nosotros
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}