import { Button } from "../atoms/ui/button";

export default function NavbarLinks() {
  return (
    <ul className="hidden md:inline-flex md:gap-4">
      {MENU_ITEMS.map((item) => (
        <Button key={item.title} asChild variant="link">
          <a href={item.url}>{item.title}</a>
        </Button>
      ))}
    </ul>
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
