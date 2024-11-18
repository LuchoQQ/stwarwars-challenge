import { Facebook, Instagram, Twitter } from "lucide-react";
import NavbarItems from "../NavbarItems";

const Footer = () => {
    return (
        <footer className="bg-neutral-950 text-white py-8 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="mb-4 sm:mb-0">
                        <h2 className="text-2xl font-bold">Manosos SPA</h2>
                    </div>

                    <NavbarItems section="footer" />

                    <div className="flex space-x-6">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-red-400 transition-colors"
                        >
                            <Facebook size={24} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-red-400 transition-colors"
                        >
                            <Twitter size={24} />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-red-400 transition-colors"
                        >
                            <Instagram size={24} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 text-center text-sm">
                    <p>&copy; 2024 Star Wars Info. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
