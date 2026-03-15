import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientLogoScroll from "@/components/ClientLogoScroll";
import RevenueGrowthSection from "@/components/RevenueGrowthSection";
import PsychotechSection from "@/components/PsychotechSection";
import ServicesSection from "@/components/ServicesSection";
import CurrentProjectSection from "@/components/CurrentProjectSection";
import ContentLabSection from "@/components/ContentLabSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark">
      <Navbar />
      <HeroSection />
      <ClientLogoScroll />
      <RevenueGrowthSection />
      <PsychotechSection />
      <ServicesSection />
      <CurrentProjectSection />
      <ContentLabSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
