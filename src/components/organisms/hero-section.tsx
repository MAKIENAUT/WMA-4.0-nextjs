import HeaderGroup from "../molecules/header-group";
import HeaderImage from "../molecules/header-image";
import HeaderText from "../molecules/header-text";

export default function HeroSection() {
  return (
    <header className="overflow-hidden bg-wma-darkTeal">
      <HeaderGroup>
        <HeaderText />
        <HeaderImage />
      </HeaderGroup>
    </header>
  );
}
