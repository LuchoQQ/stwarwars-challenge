import ImageCarousel from "../ImageCarousel";

const CarouselSection = () => {
    return (
        <section className="mb-16 min-h-[70vh]">
            <h2 className="text-center text-4xl mb-24 text-transparent tracking-[.3rem] [-webkit-text-stroke:1px_red] font-starwars">
                Reviví las películas
            </h2>
            <ImageCarousel />
        </section>
    );
};

export default CarouselSection;
