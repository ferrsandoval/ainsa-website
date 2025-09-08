export function ProductsSection() {
  const products = [
    "Láminas de Acero Inoxidable",
    "Tubería y Perfiles Estructurales", 
    "Accesorios y Conexiones",
    "Barras y Varillas",
    "Flejes y Alambre",
    "Metales Especiales"
  ];

  return (
    <section id="productos" className="bg-muted/30 py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20">
            <span 
              className="caption text-muted-foreground mb-6 block"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              NUESTROS PRODUCTOS
            </span>
            <h2 
              className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-foreground mb-8"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
            >
              Materiales de
              <span className="block">Calidad Superior</span>
            </h2>
            <p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Suministramos una amplia gama de materiales de acero inoxidable y metales especiales para todas sus necesidades industriales.
            </p>
          </div>
          
          {/* Products grid - estilo Oliv simple */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-20">
            {products.map((product, index) => (
              <div
                key={index} 
                className="group p-8 bg-background hover:bg-card border border-border/50 hover:border-border transition-all duration-300 rounded-xl"
              >
                <h3 
                  className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300"
                  style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
                >
                  {product}
                </h3>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href="#contacto" 
                    className="text-sm font-medium text-primary"
                    style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
                  >
                    Solicitar información →
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA section */}
          <div className="text-center bg-foreground text-background p-16 rounded-2xl">
            <h3 
              className="text-3xl lg:text-4xl font-bold mb-6"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
            >
              ¿Necesitas un material específico?
            </h3>
            <p 
              className="text-lg opacity-90 mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Contamos con una amplia red de proveedores para conseguir materiales especiales y grados específicos.
            </p>
            <button 
              className="bg-background text-foreground px-8 py-4 rounded-lg font-medium hover:bg-background/90 transition-colors duration-300"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Solicitar Cotización
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}