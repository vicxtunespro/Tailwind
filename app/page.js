import HeroSection from "@/components/hero";
import PriceSection from "@/components/price-card";
import SkillSection from "@/components/skill-section";
import Testimonial from "@/components/testmonial-card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen dark:bg-slate-600 bg-slate-100 overflow-hidden">
      <HeroSection/>
      <div class=" main-content px-8 overflow-hidden">
        <SkillSection></SkillSection>
        <Testimonial/>
        <PriceSection/>
      </div>
    </main>
  );
}
