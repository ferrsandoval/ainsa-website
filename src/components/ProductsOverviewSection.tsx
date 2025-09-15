import React from "react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductsOverviewSectionProps {
  onNavigate: (page: string) => void;
}

export function ProductsOverviewSection({ onNavigate }: ProductsOverviewSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1748002388689-c62b45d5c28b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZyUyMGZhY2lsaXR5fGVufDF8fHx8MTc1NzMwNzUzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Industrial manufacturing facility"
          className="w-full h-full object-cover"
          applyDarkFilter={true}
        />
        
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-ainsa-white/90 via-ainsa-white/70 to-ainsa-white/90 dark:from-ainsa-black/95 dark:via-ainsa-black/80 dark:to-ainsa-black/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-ainsa-white/60 via-transparent to-ainsa-white/60 dark:from-ainsa-black/80 dark:via-transparent dark:to-ainsa-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32 lg:py-40">
        <div className="max-w-6xl mx-auto">
          
          {/* Eyebrow text */}
          <div className="text-center mb-12">
            <span 
              className="caption text-ainsa-gray bg-ainsa-white/80 dark:bg-ainsa-black/60 px-6 py-3 rounded-full backdrop-blur-sm border border-ainsa-gray/30"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              NUESTROS PRODUCTOS
            </span>
          </div>
          
          {/* Main heading */}
          <div className="text-center mb-20">
            <h2 
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tight mb-8 text-ainsa-black dark:text-ainsa-white"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
            >
              La Mayor Variedad de
              <span 
                className="block" 
                style={{ fontStyle: 'italic', fontWeight: 400 }}
              >
                Acero Inoxidable
              </span>
            </h2>
            
            <p 
              className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Ofrecemos la mayor variedad de productos en acero inoxidable en la región, respaldados por un amplio stock para asegurar la entrega oportuna para sus proyectos.
            </p>
          </div>

          {/* Featured products */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {[
              {
                category: "Aceros Inoxidables",
                items: ["304/304L", "316/316L", "321", "310", "409", "430"],
                highlight: "Grados más solicitados"
              },
              {
                category: "Aleaciones Especiales",
                items: ["Inconel", "Monel", "Hastelloy", "Duplex", "Super Duplex", "Titanio"],
                highlight: "Aplicaciones críticas"
              }
            ].map((group, index) => (
              <div 
                key={index}
                className="bg-background/90 dark:bg-background/70 backdrop-blur-sm border border-border/30 rounded-3xl p-10 hover:bg-background/95 dark:hover:bg-background/80 transition-all duration-300 hover:scale-105 group"
              >
                <div className="mb-6">
                  <span 
                    className="caption text-accent bg-accent/10 px-4 py-2 rounded-full"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                  >
                    {group.highlight}
                  </span>
                </div>
                
                <h3 
                  className="text-3xl lg:text-4xl font-bold mb-8 text-foreground"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                >
                  {group.category}
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {group.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="bg-background/60 dark:bg-background/40 backdrop-blur-sm border border-border/20 rounded-xl p-4 hover:bg-background/80 dark:hover:bg-background/60 transition-all duration-300"
                    >
                      <span 
                        className="font-medium text-foreground"
                        style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Presentation formats */}
          <div className="text-center mb-16">
            <h3 
              className="text-3xl lg:text-4xl font-bold mb-12 text-foreground"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
            >
              Disponible en Múltiples Presentaciones
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                "Láminas",
                "Placas", 
                "Ángulos",
                "Soleras",
                "Tubería Ornamental",
                "Acabados"
              ].map((format, index) => (
                <div 
                  key={index}
                  className="bg-background/80 dark:bg-background/60 backdrop-blur-sm border border-border/30 rounded-2xl p-6 hover:bg-background/90 dark:hover:bg-background/70 transition-all duration-300 hover:scale-105 group"
                >
                  <div 
                    className="text-lg font-medium text-foreground"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                  >
                    {format}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              onClick={() => onNavigate('productos')}
              className="bg-ainsa-red hover:bg-ainsa-red/90 text-ainsa-white px-10 py-6 h-auto font-medium text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Ver Catálogo Completo
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}