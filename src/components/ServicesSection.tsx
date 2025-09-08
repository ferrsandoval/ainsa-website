export function ServicesSection() {
  const services = [
    {
      title: "Calidad",
      description: "Productos de la mejor calidad y certificados. Fabricados en molinos altamente reconocidos a nivel mundial, todos nuestros materiales cuentan con sus certificados de calidad y origen.",
      link: "Nuestros Certificados",
      category: "Garantía"
    },
    {
      title: "Servicio",
      description: "Contamos con los mejores tiempos de entrega y una calidad excepcional en nuestro servicio al cliente. Todo nuestro personal está certificado como técnico especializado en acero inoxidable.",
      link: "Conoce al Equipo", 
      category: "Excelencia"
    },
    {
      title: "Amplio Stock",
      description: "Ofrecemos la mayor variedad de productos en acero inoxidable en la región, respaldados por un amplio stock para asegurar la entrega oportuna para sus proyectos.",
      link: "Ver Inventario",
      category: "Disponibilidad"
    },
    {
      title: "Asesoría Técnica",
      description: "AINSA se compromete con la promoción, capacitación y asesoramiento para incrementar las aplicaciones de acero inoxidable en las industrias de la región.",
      link: "Consulta Técnica",
      category: "Especialización"
    }
  ];

  return (
    <section id="servicios" className="bg-background py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Grid de servicios - estilo Oliv */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {services.map((service, index) => (
              <div key={index} className="group">
                
                {/* Categoría */}
                <div className="mb-6">
                  <span 
                    className="caption text-muted-foreground"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                  >
                    {service.category}
                  </span>
                </div>
                
                {/* Título */}
                <h3 
                  className="text-2xl lg:text-3xl font-semibold mb-6 text-foreground leading-tight"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                >
                  {service.title}
                </h3>
                
                {/* Descripción */}
                <p 
                  className="text-muted-foreground leading-relaxed mb-8 text-base"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                >
                  {service.description}
                </p>
                
                {/* Link */}
                <a 
                  href="#" 
                  className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors duration-300 group-hover:translate-x-1 transform transition-transform"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                >
                  {service.link}
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}