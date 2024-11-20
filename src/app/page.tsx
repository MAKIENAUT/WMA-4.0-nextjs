import HeroSection from "@/components/organisms/hero-section";
import PromiseSection from "@/components/organisms/promise-section";
import StatementSection from "@/components/organisms/statement-section";
import ServiceTemplate from "@/components/templates/ServiceTemplate";

export default function Home() {
  return (
    <main className="mt-[56px] sm:mt-[72px] md:mt-[80px]">
      <HeroSection />
      <StatementSection />
      <ServiceTemplate />
      <PromiseSection />
    </main>
  );
}
