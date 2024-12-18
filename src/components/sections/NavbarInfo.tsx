import { Menu } from "lucide-react";
import NavbarItems from "../NavbarItems";

interface NavbarInfoProps {
  toggleSidebar: () => void;
}

const NavbarInfo: React.FC<NavbarInfoProps> = ({ toggleSidebar }) => {
  return (
    <div className="flex p-5 drop-shadow-lg bg-zinc-950 items-center">
      <button
        className="lg:hidden text-white mr-4"
        onClick={toggleSidebar}
        aria-label="Abrir menú"
      >
        <Menu size={24} />
      </button>

      <img src="/starwarswhite.webp" width={100} alt="Star Wars Logo" />
      
      <ul className="hidden lg:flex space-x-8 text-lg opacity-60 ml-auto pr-10">
       <NavbarItems section="info"/>
      </ul>
    </div>
  );
};

export default NavbarInfo;