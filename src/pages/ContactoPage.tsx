import { ContactSection } from "../components/ContactSection";

interface ContactoPageProps {
  onNavigate: (page: string) => void;
}

export function ContactoPage({ onNavigate }: ContactoPageProps) {
  return (
    <main className="pt-20">
      {/* Page Header */}
      <section className="py-16 lg:py-24 bg-ainsa-gray/10 dark:bg-ainsa-gray/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <span 
                className="caption text-ainsa-red bg-ainsa-white dark:bg-ainsa-black/80 px-4 py-2 rounded-full border border-ainsa-gray/30"
                style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
              >
                COMUNÍCATE CON NOSOTROS
              </span>
            </div>
            <h1 
              className="text-4xl lg:text-6xl xl:text-7xl leading-tight tracking-tight text-ainsa-black dark:text-ainsa-white mb-6"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 700 }}
            >
              Contáctanos y cotiza
              <span 
                className="block text-ainsa-red"
                style={{ fontStyle: 'italic', fontWeight: 400 }}
              >
                tu próximo proyecto
              </span>
            </h1>
            <p 
              className="text-lg lg:text-xl text-ainsa-gray leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: '"sui-generis", sans-serif', fontWeight: 400 }}
            >
              Estamos ubicados en Hermosillo, Sonora. Contáctanos para recibir asesoría especializada 
              y una cotización personalizada para tu proyecto.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}