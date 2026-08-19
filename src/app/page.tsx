import Hero from "@/components/home/Hero";
import ParallaxImage from "@/components/home/ParallaxImage";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111] text-white">
      <Hero />
      <ParallaxImage />
      <Services />
      <Portfolio />
    </main>
  );
}