const industrialWarehouse = "https://images.unsplash.com/photo-1626470159396-8a6b361ab3a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtZXRhbCUyMGNvbnN0cnVjdGlvbiUyMGluZHVzdHJpYWwlMjB3YXJlaG91c2V8ZW58MXx8fHwxNzU3MzA1MzY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function AboutSection() {
  return (
    <section id="nosotros" className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center mb-32">
          {/* Image */}
          <div className="lg:col-span-5">
            <img 
              src={industrialWarehouse}
              alt="Industrial warehouse facility" 
              className="w-full aspect-square object-cover rounded-3xl"
            />
          </div>
          
          {/* Content */}
          <div className="lg:col-span-7">
            <span className="text-sm tracking-wider text-muted-foreground uppercase mb-4 block">
              ACERCA DE AINSA
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
              Aliados Estratégicos para la Industria
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              En AINSA Acero Inoxidable del Noroeste somos especialistas en proveeduría de acero inoxidable, aluminio y metales industriales.
              Desde nuestros inicios en Hermosillo, Sonora, nos hemos consolidado como aliados estratégicos para la industria, ofreciendo:
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Materiales de la más alta calidad con certificados de origen.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Atención personalizada y asesoría técnica especializada.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Inventario amplio y entregas en tiempo récord.
                </p>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-medium">
              Nuestro compromiso es ser más que un proveedor: somos el socio confiable que impulsa la competitividad de tu empresa.
            </p>
            
            <div className="flex items-center space-x-4 mb-12">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <span className="text-white">A</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">FUNDADOR & CEO</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="text-center">
            <div className="text-5xl md:text-6xl mb-4">25+</div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider">Años de Experiencia</p>
            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
              Más de 25 años distribuyendo acero inoxidable 
              de la más alta calidad en el noroeste de México.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl md:text-6xl mb-4">500+</div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider">Proyectos Completados</p>
            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
              Hemos apoyado más de 500 proyectos industriales 
              con materiales de calidad certificada.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl md:text-6xl mb-4">ISO 9001</div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider">Certificación de Calidad</p>
            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
              Todos nuestros materiales cuentan con certificados 
              de calidad y origen de molinos reconocidos mundialmente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}