import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 bg-[#151515] tracking-[.25em] ">
            <div className="text-center">
                <div className="mb-6 sm:mb-8">
                    <img
                        src="/starwars404.webp"
                        alt="Star Wars 404"
                        className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[1000px] mx-auto"
                    />
                </div>
                <Link
                    to="/"
                    className="inline-block bg-red-500 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-lg hover:bg-red-600 transition-colors"
                >
                    Volver al inicio
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
