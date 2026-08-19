import Approach from "@/components/about/Approach";
import Clients from "@/components/about/Clients";
import Hero from "@/components/about/Hero";
import PortfolioCarousel from "@/components/about/PortfolioCarousel";
import WhoWeAre from "@/components/about/WhoWeAre";
import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#111111] text-white">
            <Hero />
            <PortfolioCarousel />
            <Approach />
            <WhoWeAre />
            <Clients />
            <Footer />
        </main>
    );
}