import Link from "next/link";
import Image from "next/image";
import { SidebarTrigger } from "../atoms/ui/sidebar";
import WMASidebar from "../atoms/wma-sidebar";
import NavbarLinks from "../molecules/navbar-links";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { userQueryOptions } from "@/lib/queries";
import { getQueryClient } from "@/features/react-query/components/get-query-client";

export type NavbarProps = {
  data: {
    title: string;
    url: string;
  }[];
};

export default function Navbar({ data }: NavbarProps) {
  const queryClient = getQueryClient();
  queryClient.prefetchQuery(userQueryOptions);
  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <nav className="fixed top-0 z-50 flex w-screen items-center justify-between bg-white p-2 sm:px-8 sm:py-4 lg:max-h-20 xl:px-20">
          <Link href="/">
            <Image
              src="/wma-logo.png"
              width={1000}
              height={1000}
              className="max-h-10 w-auto md:max-h-12"
              alt="WMA logo"
            />
          </Link>
          <NavbarLinks data={data} />
          <SidebarTrigger />
        </nav>
        <WMASidebar data={data} />
      </HydrationBoundary>
    </>
  );
}
