import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ServicesOverviewSectionProps {
  onNavigate: (page: string) => void;
}

export function ServicesOverviewSection({ onNavigate }: ServicesOverviewSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1683884020624-f12f0f113cac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMHBpcGVzJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NTcyMzUyMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Steel pipes industrial"
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
              NUESTROS SERVICIOS
            </span>
          </div>
          
          {/* Main heading */}
          <div className="text-center mb-20">
            <h2 
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tight mb-8 text-foreground"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
            >
              Soluciones Industriales
              <span 
                className="block" 
                style={{ fontStyle: 'italic', fontWeight: 400 }}
              >
                de Acero Inoxidable
              </span>
            </h2>
            
            <p 
              className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Desde el suministro de materias primas hasta servicios especializados de corte, maquinado y distribución para la industria.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Distribución",
                description: "Suministro de acero inoxidable y metales especiales",
                icon: "🚚"
              },
              {
                title: "Corte Especializado",
                description: "Servicios de corte a medida para proyectos específicos",
                icon: "⚙️"
              },
              {
                title: "Maquinado",
                description: "Procesos de maquinado y acabado industrial",
                icon: "🔧"
              },
              {
                title: "Asesoría Técnica",
                description: "Consultoría especializada en materiales",
                icon: "💡"
              },
              {
                title: "Logística",
                description: "Entrega oportuna y manejo especializado",
                icon: "📦"
              },
              {
                title: "Calidad",
                description: "Certificaciones ISO y control de calidad",
                icon: "✅"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-background/80 dark:bg-background/60 backdrop-blur-sm border border-border/30 rounded-2xl p-8 hover:bg-background/90 dark:hover:bg-background/70 transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 
                  className="text-2xl font-bold mb-4 text-foreground"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                >
                  {service.title}
                </h3>
                <p 
                  className="text-muted-foreground leading-relaxed"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              onClick={() => onNavigate('servicios')}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 h-auto font-medium text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Ver Todos los Servicios
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}