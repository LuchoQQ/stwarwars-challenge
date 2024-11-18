const Footer = () => {
    return (
        <footer className="bg-neutral-950 text-white py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="mb-4 sm:mb-0">
                        <h2 className="text-2xl font-bold">Manosos SPA</h2>
                    </div>

                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
                        <a href="#home" className="hover:text-yellow-400">
                            Home
                        </a>
                        <a href="#about" className="hover:text-yellow-400">
                            About
                        </a>
                        <a href="#contact" className="hover:text-yellow-400">
                            Contact
                        </a>
                        <a href="#privacy" className="hover:text-yellow-400">
                            Privacy
                        </a>
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
