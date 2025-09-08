import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CTASectionProps {
  onNavigate?: (page: string) => void;
}

export function CTASection({ onNavigate }: CTASectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1696861273647-92dfe8bb697c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBoYW5kc2hha2V8ZW58MXx8fHwxNTczMDc2ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Modern office handshake"
          className="w-full h-full object-cover"
        />
        
        {/* Dark overlay for CTA section */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95 dark:from-background/98 dark:via-background/90 dark:to-background/98" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80 dark:from-background/90 dark:via-transparent dark:to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32 lg:py-40">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Eyebrow text */}
          <div className="mb-12">
            <span 
              className="caption text-muted-foreground bg-background/80 dark:bg-background/60 px-6 py-3 rounded-full backdrop-blur-sm border border-border/30"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              COMENZEMOS A TRABAJAR JUNTOS
            </span>
          </div>
          
          {/* Main heading */}
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tight mb-8 text-foreground"
            style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
          >
            Contáctanos y cotiza
            <span 
              className="block" 
              style={{ fontStyle: 'italic', fontWeight: 400 }}
            >
              tu próximo proyecto
            </span>
          </h2>
          
          {/* Subtitle */}
          <div className="mb-16 max-w-3xl mx-auto">
            <p 
              className="text-xl lg:text-2xl text-muted-foreground leading-relaxed"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Desde la consultoría inicial hasta la entrega final, nuestro equipo de expertos 
              está listo para convertir tu visión en realidad con materiales de la más alta calidad.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
            {[
              {
                title: "Consultoría Gratuita",
                description: "Evaluación técnica sin compromiso",
                icon: "💬"
              },
              {
                title: "Cotización 24h",
                description: "Respuesta rápida y precisa",
                icon: "⚡"
              },
              {
                title: "Entrega Garantizada",
                description: "Cumplimiento de tiempos acordados",
                icon: "🚚"
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="bg-background/80 dark:bg-background/60 backdrop-blur-sm border border-border/30 rounded-2xl p-6 hover:bg-background/90 dark:hover:bg-background/70 transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 
                  className="text-lg font-bold mb-2 text-foreground"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                >
                  {benefit.title}
                </h3>
                <p 
                  className="text-muted-foreground text-sm"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 h-auto font-medium text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              onClick={() => onNavigate?.('contacto')}
            >
              Solicitar Cotización
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-foreground hover:bg-foreground hover:text-background px-10 py-6 h-auto font-medium text-lg rounded-xl transition-all duration-300 hover:scale-105"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=526624968802&text=Hola,%20me%20gustaría%20programar%20una%20reunión%20para%20discutir%20mis%20necesidades%20de%20materiales%20industriales.&type=phone_number&app_absent=0', '_blank')}
            >
              Programar Reunión
            </Button>
          </div>

          {/* Contact info */}
          <div className="mt-16 pt-12 border-t border-border/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div 
                  className="text-2xl font-bold text-foreground mb-2"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                >
                  📞 Teléfono
                </div>
                <p 
                  className="text-muted-foreground"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                >
                  662-438-5634
                </p>
              </div>
              <div className="text-center">
                <div 
                  className="text-2xl font-bold text-foreground mb-2"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                >
                  ✉️ Email
                </div>
                <p 
                  className="text-muted-foreground"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                >
                  ventas@inoxidablesainsa.mx
                </p>
              </div>
              <div className="text-center">
                <div 
                  className="text-2xl font-bold text-foreground mb-2"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                >
                  📍 Ubicación
                </div>
                <p 
                  className="text-muted-foreground"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                >
                  Hermosillo, Sonora
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}