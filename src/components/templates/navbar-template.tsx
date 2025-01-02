import Navbar from "../organisms/navbar";
import { menu_items } from "@/data/navbar-menu";

export default function NavbarTemplate() {
  return <Navbar data={menu_items} />;
}
