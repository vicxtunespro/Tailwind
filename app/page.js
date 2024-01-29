import HeroSection from "@/components/hero";
import SkillSection from "@/components/skill-section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen min-h-screen dark:bg-slate-800">
      <HeroSection/>
      <SkillSection></SkillSection>
    </main>
  );
}
