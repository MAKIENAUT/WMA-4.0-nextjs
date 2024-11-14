import Link from "next/link";
import Image from "next/image";
import { SidebarTrigger } from "../atoms/ui/sidebar";
import WMASidebar from "../atoms/wma-sidebar";
import NavbarLinks from "../molecules/navbar-links";

export default function Navbar() {
  return (
    <>
      <nav className="fixed top-0 flex w-screen items-center justify-between p-2 sm:px-8 sm:py-4 lg:max-h-20 xl:px-20">
        <Link href="/">
          <Image
            src="/wma-logo.png"
            width={1000}
            height={1000}
            className="max-h-10 w-auto md:max-h-12"
            alt="WMA logo"
          />
        </Link>
        <NavbarLinks />
        <SidebarTrigger />
      </nav>
      <WMASidebar />
    </>
  );
}
