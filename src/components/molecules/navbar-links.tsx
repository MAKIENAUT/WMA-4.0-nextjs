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

export default function NavbarLinks({ datas }: NavbarProps) {
  return (
    <ul className="hidden md:inline-flex md:gap-4">
      {datas.map((data) => (
        <li key={data.title}>
          <Button asChild variant="link">
            <Link href={data.url}>{data.title}</Link>
          </Button>
        </li>
      ))}
      <li>
        <Button variant="link">
          <Link href="/login">Sign in</Link>
        </Button>
      </li>
      <li className="hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="font-medium">
              Account <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom">
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </li>
    </ul>
  );
}
