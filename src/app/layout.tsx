import type { Metadata } from "next";
import "./globals.css";
import { dm_sans } from "@/lib/fonts";
import { SidebarProvider } from "@/components/atoms/ui/sidebar";
import Footer from "@/components/organisms/footer";
import NavbarTemplate from "@/components/templates/navbar-template";

export const metadata: Metadata = {
  title: "West Migration Agency",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dm_sans.className} overflow-x-hidden bg-background antialiased`}
      >
        <SidebarProvider defaultOpen={false}>
          <NavbarTemplate />
          <main className="mt-[56px] sm:mt-[72px] md:mt-[80px]">
            {children}
            <Footer />
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
