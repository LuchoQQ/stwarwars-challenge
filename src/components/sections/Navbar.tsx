import "@fontsource/poppins/600.css";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavbarItems from "../NavbarItems";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <nav className="absolute top-0 left-0 w-full z-20 bg-transparent">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <img
                    src="/starwarswhite.webp"
                    width={100}
                    className="opacity-60"
                    alt="Logo"
                />

                {/* Desktop Menu */}
               {/*  <ul className="hidden md:flex space-x-8 text-lg opacity-60">
                    <li>
                        <a
                            href="/"
                            className="hover:text-yellow-400 transition-colors font-poppins text-base"
                        >
                            INICIO
                        </a>
                    </li>
                    <li>
                        <a
                            href="/info"
                            className="hover:text-yellow-400 transition-colors font-poppins text-base"
                        >
                            INFO
                        </a>
                    </li>
                    <li>
                        <a
                            href="/about"
                            className="hover:text-yellow-400 transition-colors font-poppins text-base"
                        >
                            ABOUT US
                        </a>
                    </li>
                </ul> */}
                <NavbarItems section="hero"/>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-black bg-opacity-80">
                    <div className="flex flex-col items-center space-y-4 text-lg py-4 opacity-60">
                        <NavbarItems section="footer"/>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
