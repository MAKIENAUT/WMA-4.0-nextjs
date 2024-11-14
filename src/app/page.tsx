import { SidebarProvider } from "@/components/atoms/ui/sidebar";
import Navbar from "@/components/molecules/navbar";

export default function Home() {
  return (
    <SidebarProvider defaultOpen={false}>
      <Navbar />
    </SidebarProvider>
  );
}
