import HeroTemplate from "@/components/templates/HeroTemplate";
import PromiseSection from "@/components/organisms/promise-section";
import StatementSection from "@/components/organisms/statement-section";
import ServiceOverviewTemplate from "@/components/templates/ServiceOverviewTemplate";

export default function Home() {
  return (
    <main className="mt-[56px] sm:mt-[72px] md:mt-[80px]">
      <HeroTemplate route="home" />
      <StatementSection />
      <ServiceOverviewTemplate type="section" />
      <PromiseSection />
    </main>
  );
}
