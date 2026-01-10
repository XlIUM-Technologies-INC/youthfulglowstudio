import AboutSection from "@/components/parts/about";
import HeroSection from "@/components/parts/hero";
import RootLayout from "@/components/layouts/RootLayout";
import ServicesSection from "@/components/parts/services";
import BlogInsightsSection from "@/components/parts/wellbeing";

export default function HomePage() {
  return (
    <RootLayout>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
    </RootLayout>
  );
}
