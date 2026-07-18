import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { AnalyticsSection } from "@/components/landing/AnalyticsSection";
import { ExamsSection } from "@/components/landing/ExamsSection";
import { YoutubeSection } from "@/components/landing/YoutubeSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#ffffff_0%,_#fff8f2_100%)] text-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AnalyticsSection />
        <ExamsSection />
        <YoutubeSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
