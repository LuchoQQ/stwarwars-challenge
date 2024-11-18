import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const StarBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    // Type the 'container' parameter with the 'Container' type
    const particlesLoaded = useCallback(async (container: any) => {
        console.log(container);
    }, []);

    return (
        <div className="fixed inset-0 z-0">
            {init && (
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={{
                        background: {
                            color: {
                                value: "transparent",
                            },
                        },
                        fpsLimit: 120,

                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: false,
                                opacity: 0.5,
                                width: 1,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: true,
                                speed: 0.5,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                },
                                value: 100,
                            },
                            opacity: {
                                animation: {
                                    enable: true,
                                    speed: 0.5,
                                },
                                value: { min: 0.1, max: 0.5 },
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 3 },
                            },
                            twinkle: {
                                particles: {
                                    enable: true,
                                    frequency: 0.05,
                                    opacity: 1
                                }
                            }
                        },
                        detectRetina: true,
                    }}
                />
            )}
        </div>
    );
};

export default StarBackground;
