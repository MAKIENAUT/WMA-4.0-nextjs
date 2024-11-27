import Navbar from "../organisms/navbar";

export default function NavbarTemplate() {
  return <Navbar datas={MENU_ITEMS} />;
}

const MENU_ITEMS = [
  {
    title: "Blogs",
    url: "/blogs",
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
