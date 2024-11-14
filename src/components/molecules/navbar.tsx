"use client";
import Link from "next/link";
import Image from "next/image";
import { SidebarTrigger, useSidebar } from "../atoms/ui/sidebar";
import WMASidebar from "../atoms/wma-sidebar";
import { Button } from "../atoms/ui/button";

export default function Navbar() {
  const { isMobile } = useSidebar();
  return (
    <>
      <nav className="fixed top-0 flex w-screen items-center justify-between p-2 sm:px-8 sm:py-4 lg:max-h-20 xl:px-20">
        <Link href="/">
          <Image
            src="/wma-logo.png"
            width={1000}
            height={1000}
            className="h-10 w-auto lg:h-12"
            alt="WMA logo"
          />
        </Link>
        <ul className="hidden md:inline-flex md:gap-4">
          {MENU_ITEMS.map((item) => (
            <Button key={item.title} asChild variant="link">
              <a href={item.url}>{item.title}</a>
            </Button>
          ))}
        </ul>
        {isMobile && <SidebarTrigger />}
      </nav>
      {isMobile && <WMASidebar />}
    </>
  );
}

const MENU_ITEMS = [
  {
    title: "News",
    url: "/news",
  },
  {
    title: "About Us",
    url: "/about-us",
  },
  {
    title: "Services",
    url: "/services",
  },
];
