import HeroSection from "@/components/hero";
import PriceSection from "@/components/price-card";
import SkillSection from "@/components/skill-section";
import Testimonial from "@/components/testmonial-section";
import GraphicArticle from "@/components/article";

export default function Home() {
  return (
    <main className="w-full min-h-screen dark:bg-slate-800 bg-slate-100 overflow-hidden">
      <HeroSection/>
      <div className=" main-content px-8 overflow-hidden">
        <SkillSection></SkillSection>
        <GraphicArticle/>
        <Testimonial/>
        <PriceSection/>
      </div>
    </main>
  );
}
