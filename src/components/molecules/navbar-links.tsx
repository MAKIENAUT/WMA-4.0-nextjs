"use client";
import { ChevronDown } from "lucide-react";
import { Button } from "../atoms/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../atoms/ui/dropdown-menu";
import { NavbarProps } from "../organisms/navbar";
import Link from "next/link";
import { useSuspenseQuery } from "@tanstack/react-query";
import { userQueryOptions } from "@/lib/queries";
import { Suspense } from "react";

export default function NavbarLinks({ data }: NavbarProps) {
  const { data: user } = useSuspenseQuery(userQueryOptions);
  return (
    <ul className="hidden md:inline-flex md:gap-4">
      {data.map((datum) => (
        <li key={datum.title}>
          <Button asChild variant="link">
            <Link href={datum.url}>{datum.title}</Link>
          </Button>
        </li>
      ))}
      <Suspense fallback={<div>loading...</div>}>
        {user.error ? (
          <li>
            <Button variant="link" asChild>
              <Link href="/login">Sign in</Link>
            </Button>
          </li>
        ) : (
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="font-medium">
                  {user.name} <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="bottom">
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        )}
      </Suspense>
    </ul>
  );
}
