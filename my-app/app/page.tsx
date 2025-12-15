import AboutSection from "@/components/parts/about";
import HeroSection from "@/components/parts/hero";
import Nav from "@/components/parts/nav";
import ServicesSection from "@/components/parts/services";
import Footer from "@/components/parts/footer";
import ClientReviewsSection from "@/components/parts/review";
import BlogInsightsSection from "@/components/parts/wellbeing";

export default function page() {
  return (
    <div>
      <Nav/>
      <HeroSection/>
      <ServicesSection/>
      <AboutSection/>
      <BlogInsightsSection />
      <ClientReviewsSection/>
      <Footer/>
    
      </div>
  )
}
