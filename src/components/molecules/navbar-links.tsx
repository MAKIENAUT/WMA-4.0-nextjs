import { Button } from "../atoms/ui/button";
import { NavbarProps } from "../organisms/navbar";

export default function NavbarLinks({ datas }: NavbarProps) {
  return (
    <ul className="hidden md:inline-flex md:gap-4">
      {datas.map((data) => (
        <Button key={data.title} asChild variant="link">
          <a href={data.url}>{data.title}</a>
        </Button>
      ))}
    </ul>
  );
}
