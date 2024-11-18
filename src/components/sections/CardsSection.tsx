import Card from "../Card";
import "../../index.css";

export const CardsSection = () => {
    const characters = [
        {
            name: "PERSONAJES",
            image: "/cards/troopers.png",
            url: "/info/people",
        },
        {
            name: "PLANETAS",
            image: "/cards/planets.jpeg",
            url: "/info/planets",
        },
        {
            name: "NAVES",
            image: "/cards/starships.webp",
            url: "/info/starships",
        },
    ];
    return (
        <div
            id="characters"
            className="container mx-auto px-4 py-16 w-9/12 mt-16 min-h-[70vh]"
        >
            <h2 className="text-center text-4xl mb-10 text-transparent tracking-[1rem] [-webkit-text-stroke:1px_red] font-starwars">
                MAS DE STARWARS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-24">
                {characters.map((character, index) => (
                    <Card
                        title={character.name}
                        imageSrc={character.image}
                        key={index}
                        target={character.url}
                    />
                ))}
            </div>
        </div>
    );
};
