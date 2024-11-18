import React from "react";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";

interface SidebarItem {
    title: string;
    path: string;
    icon?: React.ReactNode;
}

interface SidebarProps {
    items: SidebarItem[];
    isOpen: boolean;
    toggleSidebar: () => void;
}

const SidebarLayout: React.FC<SidebarProps> = ({
    items,
    isOpen,
    toggleSidebar,
}) => {
    const location = useLocation();

    return (
        <>
            {/* Fondo oscuro al abrir el menú en móvil */}
            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
                    onClick={toggleSidebar}
                ></div>
            )}

            <nav
                className={`fixed top-0 left-0 w-64 min-h-screen p-4 bg-white drop-shadow-lg transition-transform duration-300 ease-in-out z-20
          ${
              isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:static`}
            >
                {/* Botón de cierre en vista móvil */}
                <button
                    className="lg:hidden absolute top-4 right-4 text-black"
                    onClick={toggleSidebar}
                    aria-label="Cerrar menú"
                >
                    <X size={24} />
                </button>

                <div className="block sm:hidden">
                    <h3 className="mt-12 mb-2 text-gray-400">Navegar a...</h3>
                    <hr />
                    <ul className="flex flex-col gap-4 mt-2">
                        <li>
                            <a
                                href="/"
                                className="hover:text-yellow-400 transition-colors font-poppins text-black"
                            >
                                INICIO
                            </a>
                        </li>
                        <li>
                            <a
                                href="/info"
                                className="hover:text-yellow-400 transition-colors font-poppins text-black"
                            >
                                INFO
                            </a>
                        </li>
                        <li>
                            <a
                                href="/about"
                                className="hover:text-yellow-400 transition-colors font-poppins text-black"
                            >
                                ABOUT US
                            </a>
                        </li>
                    </ul>
                </div>

                <h3 className="mt-12 mb-2 text-gray-400">Saber más</h3>
                <hr />
                <ul className="flex flex-col gap-3 mt-2">
                    {items.map((item) => (
                        <li key={item.path} className="mb-2">
                            <Link
                                to={item.path}
                                className={`flex items-center  rounded-lg transition-colors duration-200 ${
                                    location.pathname === item.path
                                        ? "text-red-800 hover:text-red-600"
                                        : "text-black hover:text-red-800"
                                }`}
                                onClick={toggleSidebar}
                            >
                                {item.icon && (
                                    <span className="mr-3">{item.icon}</span>
                                )}
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default SidebarLayout;
