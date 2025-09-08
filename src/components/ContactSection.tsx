import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function ContactSection() {
  return (
    <section id="contacto" className="py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span 
            className="caption text-muted-foreground mb-6 block bg-muted px-6 py-3 rounded-full inline-block"
            style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
          >
            CONTACTO
          </span>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-8 text-foreground"
            style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
          >
            Envíanos un
            <span 
              className="block" 
              style={{ fontStyle: 'italic', fontWeight: 400 }}
            >
              Mensaje
            </span>
          </h2>
          <p 
            className="text-lg lg:text-xl text-muted-foreground leading-relaxed"
            style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
          >
            Estamos aquí para ayudarte con tus necesidades de acero inoxidable y metales industriales. 
            Contáctanos para una cotización personalizada.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Contact Form */}
          <div className="lg:col-span-8">
            <div className="bg-card border border-border/50 rounded-3xl p-10 lg:p-12 shadow-lg">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label 
                      className="block text-sm mb-3 font-medium text-foreground"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                    >
                      Nombre
                    </label>
                    <Input 
                      className="h-14 bg-input-background border border-border/30 rounded-xl text-base"
                      placeholder="Tu nombre completo" 
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                    />
                  </div>
                  <div>
                    <label 
                      className="block text-sm mb-3 font-medium text-foreground"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                    >
                      Empresa
                    </label>
                    <Input 
                      className="h-14 bg-input-background border border-border/30 rounded-xl text-base"
                      placeholder="Nombre de la empresa" 
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label 
                      className="block text-sm mb-3 font-medium text-foreground"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                    >
                      Email
                    </label>
                    <Input 
                      className="h-14 bg-input-background border border-border/30 rounded-xl text-base"
                      type="email" 
                      placeholder="correo@empresa.com" 
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                    />
                  </div>
                  <div>
                    <label 
                      className="block text-sm mb-3 font-medium text-foreground"
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                    >
                      Teléfono
                    </label>
                    <Input 
                      className="h-14 bg-input-background border border-border/30 rounded-xl text-base"
                      placeholder="+52 (55) 1234-5678" 
                      style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                    />
                  </div>
                </div>
                
                <div>
                  <label 
                    className="block text-sm mb-3 font-medium text-foreground"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                  >
                    Producto de Interés
                  </label>
                  <Input 
                    className="h-14 bg-input-background border border-border/30 rounded-xl text-base"
                    placeholder="Ej: Lámina 304, Tubería 316L, etc." 
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                  />
                </div>
                
                <div>
                  <label 
                    className="block text-sm mb-3 font-medium text-foreground"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                  >
                    Mensaje
                  </label>
                  <Textarea 
                    className="bg-input-background border border-border/30 min-h-32 rounded-xl text-base"
                    placeholder="Describe tus requerimientos específicos, cantidades, dimensiones, etc."
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                  />
                </div>
                
                <Button 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 h-auto text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                >
                  Enviar Solicitud
                </Button>
              </form>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-card border border-border/50 rounded-3xl p-8 shadow-lg">
              <h4 
                className="text-2xl font-bold mb-8 text-foreground"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
              >
                Información de Contacto
              </h4>
              <div className="space-y-8 text-muted-foreground">
                <div>
                  <p 
                    className="caption text-accent mb-3"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                  >
                    DIRECCIÓN
                  </p>
                  <p 
                    className="text-foreground leading-relaxed"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                  >
                    Tlaxcala 328, Col. San Benito<br />Hermosillo, Sonora<br />México
                  </p>
                </div>
                
                <div>
                  <p 
                    className="caption text-accent mb-3"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                  >
                    TELÉFONO
                  </p>
                  <p 
                    className="text-foreground"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                  >
                    (662) 438 5634<br />(662) 170 2822<br />(662) 496 8802
                  </p>
                </div>
                
                <div>
                  <p 
                    className="caption text-accent mb-3"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                  >
                    EMAIL
                  </p>
                  <p 
                    className="text-foreground"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                  >
                    ventas@inoxidablesainsa.mx
                  </p>
                </div>
                
                <div>
                  <p 
                    className="caption text-accent mb-3"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                  >
                    HORARIOS
                  </p>
                  <p 
                    className="text-foreground leading-relaxed"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                  >
                    Lunes - Viernes<br />08:30 a.m. – 06:00 p.m.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Additional Info */}
            <div className="bg-accent/10 border border-accent/20 p-8 rounded-3xl">
              <h4 
                className="text-xl font-bold mb-4 text-foreground"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
              >
                ¿Necesitas Asesoría Técnica?
              </h4>
              <p 
                className="text-muted-foreground mb-6 leading-relaxed"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                Nuestros ingenieros especializados pueden ayudarte a seleccionar 
                el material más adecuado para tu aplicación específica.
              </p>
              <button 
                className="text-accent hover:text-accent/80 font-medium transition-colors"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                Hablar con un Experto →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}