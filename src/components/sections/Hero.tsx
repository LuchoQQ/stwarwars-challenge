const Hero = () => {
    return (
        <div>
            <div
                id="hero"
                className="relative overflow-hidden bg-cover bg-center h-screen flex items-center justify-center"
                style={{
                    backgroundImage: `
                        linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)),
                        url('/bg.png')
                    `,
                }}
            >
                <div className="absolute inset-0  bg-opacity-50"></div>
                <div className="container mx-auto px-20 z-10 w-screen h-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">

                        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
                            <img src="/starwarslogo.webp" width={1000} />
                            {/* <p className="text-center font-poppins text-zinc-400 mt-10">Aprendé todo sobre tu saga favorita de películas</p> */}
                        </div>
                        
                        <div className="flex justify-center lg:justify-center">
                            <img
                                src="/darth.png"
                                width={400}
                                height={600}
                                className="rounded-lg shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Hero;
