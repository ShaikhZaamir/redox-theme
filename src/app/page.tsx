import Hero from "@/components/home/Hero";
import ParallaxImage from "@/components/home/ParallaxImage";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import Approach from "@/components/home/Approach";
import Decisions from "@/components/home/Decisions";
import FactBanner from "@/components/home/FactBanner";
import ClientLogos from "@/components/home/ClientLogos";
import WorkCTA from "@/components/home/WorkCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111] text-white">
      <Hero />
      <ParallaxImage />
      <Services />
      <Portfolio />
      <Approach />
      <Decisions />
      <FactBanner />
      <ClientLogos />
      <WorkCTA />
      <Footer />
    </main>
  );
}