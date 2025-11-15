import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import HowToBuySection from "@/components/how-to-buy-section";
import PresaleInfoSection from "@/components/presale-info-section";
import RoadmapSection from "@/components/roadmap-section";
import TokenomicsSection from "@/components/tokenomics-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PresaleInfoSection />
      <HowToBuySection />
      <TokenomicsSection/>
      <RoadmapSection />
      <FAQSection />
      <Footer />
    </>
  );
}
