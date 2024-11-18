const Footer = () => {
    type List = {
        title: string;
        to: string;
    };

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
            title: "Nosotros",
            to: "/about",
        },
    ];

    return (
        <footer className="bg-neutral-950 text-white py-8 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="mb-4 sm:mb-0">
                        <h2 className="text-2xl font-bold">Manosos SPA</h2>
                    </div>

                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
                        {list.map((item: List) => {
                            return (
                                <>
                                    <a
                                        href={item.to}
                                        className="hover:text-red-400 transition-colors font-poppins text-base"
                                    >
                                        {item.title}
                                    </a>
                                </>
                            );
                        })}
                    </div>

                    <div className="flex space-x-6">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-yellow-400"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-yellow-400"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-yellow-400"
                        >
                            <i className="fab fa-instagram"></i>
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
