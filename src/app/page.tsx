import { SidebarProvider } from "@/components/atoms/ui/sidebar";
import Footer from "@/components/organisms/footer";
import HeroSection from "@/components/organisms/hero-section";
import Navbar from "@/components/organisms/navbar";

export default function Home() {
  return (
    <SidebarProvider defaultOpen={false}>
      <Navbar />
      <main className="mt-[56px] sm:mt-[72px] md:mt-[80px]">
        <HeroSection />
      </main>
      <Footer />
    </SidebarProvider>
  );
}
