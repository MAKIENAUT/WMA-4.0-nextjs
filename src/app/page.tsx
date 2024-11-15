import { SidebarProvider } from "@/components/atoms/ui/sidebar";
import Footer from "@/components/organisms/footer";
import Navbar from "@/components/organisms/navbar";

export default function Home() {
  return (
    <SidebarProvider defaultOpen={false}>
      <Navbar />
      <Footer />
    </SidebarProvider>
  );
}
