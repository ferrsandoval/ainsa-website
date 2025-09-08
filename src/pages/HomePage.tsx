import { SectionTransition } from "../components/PageTransition";
import { HeroSection } from "../components/HeroSection";
import { LogosSection } from "../components/LogosSection";
import { ProductsOverviewSection } from "../components/ProductsOverviewSection";
import { WhyChooseUsSection } from "../components/WhyChooseUsSection";
import { ValuesSection } from "../components/ValuesSection";
import { CTASection } from "../components/CTASection";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <main>
      <HeroSection onNavigate={onNavigate} />
      
      <SectionTransition delay={0.2}>
        <LogosSection />
      </SectionTransition>
      
      <SectionTransition delay={0.3}>
        <ProductsOverviewSection onNavigate={onNavigate} />
      </SectionTransition>
      
      <SectionTransition delay={0.4}>
        <WhyChooseUsSection onNavigate={onNavigate} />
      </SectionTransition>
      
      <SectionTransition delay={0.5}>
        <ValuesSection />
      </SectionTransition>
      
      <SectionTransition delay={0.6}>
        <CTASection onNavigate={onNavigate} />
      </SectionTransition>
    </main>
  );
}