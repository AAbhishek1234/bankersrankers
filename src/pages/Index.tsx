import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <StatsSection />
      <AboutSection />
      <CoursesSection />
      <TestimonialsSection />
      <div className="h-16 bg-background" /> {/* Spacer for CTA overlap */}
      <Footer />
    </main>
  );
};

export default Index;
