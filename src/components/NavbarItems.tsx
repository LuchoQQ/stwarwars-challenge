type List = {
    title: string;
    to: string;
};

interface NavbarItemsProps {
    section: "hero" | "footer" | "info";
}

const NavbarItems: React.FC<NavbarItemsProps> = ({ section }) => {
    const list: List[] = [
        {
            title: "INICIO",
            to: "/",
        },
        {
            title: "INFO",
            to: "/info",
        },
        {
            title: "NOSOTROS",
            to: "/about",
        },
    ];

    return (
        <div
            className={`${
                section === "hero"
                    ? "hidden sm:flex" // Oculto en mobile, visible en tablet/desktop
                    : "flex flex-col sm:flex-row" // Vertical en mobile, horizontal en tablet/desktop
            } space-y-4 sm:space-y-0 sm:space-x-8`}
        >
            {list.map((item: List) => (
                <a
                    key={item.to}
                    href={item.to}
                    className={`transition-colors font-poppins text-gray-400 ${
                        section === "info"
                            ? "text-white hover:text-red-400"
                            : "text-black hover:text-red-400"
                    }`}
                >
                    {item.title}
                </a>
            ))}
        </div>
    );
};

export default NavbarItems;
