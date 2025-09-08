import { HeroSection } from "../components/HeroSection";
import { LogosSection } from "../components/LogosSection";
import { ServicesOverviewSection } from "../components/ServicesOverviewSection";
import { ProductsOverviewSection } from "../components/ProductsOverviewSection";
import { AboutOverviewSection } from "../components/AboutOverviewSection";
import { CTASection } from "../components/CTASection";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <main>
      <HeroSection />
      <LogosSection />
      <ServicesOverviewSection onNavigate={onNavigate} />
      <ProductsOverviewSection onNavigate={onNavigate} />
      <AboutOverviewSection onNavigate={onNavigate} />
      <CTASection />
    </main>
  );
}