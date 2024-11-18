import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import CarouselSection from "../sections/CarouselSection";
import { CardsSection } from "../sections/CardsSection";
import StarBackground from "../sections/StarBackground";
import Footer from "../sections/Footer";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-black text-white relative">
            <div className="relative z-10">
                <Navbar />
                <Hero />
            </div>

            <StarBackground />

            <div className="relative z-10">
                <CarouselSection />
                <CardsSection />
            </div>

            <Footer />
        </div>
    );
};

export default HomePage;
