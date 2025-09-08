import { AboutSection } from "../components/AboutSection";
import { MissionVisionSection } from "../components/MissionVisionSection";
import { CTASection } from "../components/CTASection";

interface NosotrosPageProps {
  onNavigate: (page: string) => void;
}

export function NosotrosPage({ onNavigate }: NosotrosPageProps) {
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
                ¿QUIÉNES SOMOS?
              </span>
            </div>
            <h1 
              className="text-4xl lg:text-6xl xl:text-7xl leading-tight tracking-tight text-foreground mb-6"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
            >
              AINSA Acero Inoxidable
              <span 
                className="block text-accent"
                style={{ fontStyle: 'italic', fontWeight: 400 }}
              >
                del Noroeste
              </span>
            </h1>
            <p 
              className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Especialistas en proveeduría de acero inoxidable, aluminio y metales industriales. 
              Desde nuestros inicios en Hermosillo, Sonora, nos hemos consolidado como aliados estratégicos para la industria.
            </p>
          </div>
        </div>
      </section>

      <AboutSection />
      <MissionVisionSection />
      <CTASection />
    </main>
  );
}