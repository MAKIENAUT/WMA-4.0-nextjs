import Navbar from "../organisms/navbar";
import menuItems from "@/data/navbar-menu.json";

export default function NavbarTemplate() {
  return <Navbar data={menuItems.menu_items} />;
}
