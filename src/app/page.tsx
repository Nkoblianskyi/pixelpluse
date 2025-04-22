import ChooseUsSection from "@/components/ChooseUsSection";
import CrewSection from "@/components/CrewSection";
import CtaFinalSection from "@/components/CtaFinalSection";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TechServicesSection from "@/components/TechServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustedSection from "@/components/TrustedSection";


export default function Home() {
  return (
    <div className="min-h-screen pt-2 sm:pt-32 px-6 sm:px-20 font-[family-name:var(--font-geist-sans)]">
      <Hero/>
      <Services/>
      <TechServicesSection/>
      <TrustedSection/>
      <TestimonialsSection/>
      <ChooseUsSection/>
      <CrewSection/>
      <CtaFinalSection/>
    </div>
  );
}
