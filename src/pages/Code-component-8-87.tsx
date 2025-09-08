import { ProductsSection } from "../components/ProductsSection";
import { CTASection } from "../components/CTASection";

interface ProductosPageProps {
  onNavigate: (page: string) => void;
}

export function ProductosPage({ onNavigate }: ProductosPageProps) {
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
                CATÁLOGO DE PRODUCTOS
              </span>
            </div>
            <h1 
              className="text-4xl lg:text-6xl xl:text-7xl leading-tight tracking-tight text-foreground mb-6"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
            >
              Materias Primas de 
              <span 
                className="block text-accent"
                style={{ fontStyle: 'italic', fontWeight: 400 }}
              >
                Máxima Calidad
              </span>
            </h1>
            <p 
              className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Amplio inventario de acero inoxidable en diferentes grados, formas y dimensiones. 
              Productos certificados que cumplen con los más altos estándares internacionales.
            </p>
          </div>
        </div>
      </section>

      <ProductsSection />
      <CTASection />
    </main>
  );
}