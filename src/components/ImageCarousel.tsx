"use client";

import * as React from "react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

const images = [
    "/carousel/1.jpg",
    "/carousel/2.webp",
    "/carousel/3.jpg",
    "/carousel/4.jpg",
    "/carousel/5.jpg",
    "/carousel/6.webp",
    "/carousel/7.jpg",
    "/carousel/8.jpg",
];

export default function ImageCarousel() {
    return (
        <Carousel
            className="w-full max-w-5xl mx-auto"
            opts={{
                align: "center",
                loop: true,
            }}
        >
            <CarouselContent className="-ml-1 md:-ml-2">
                {images.map((src, index) => (
                    <CarouselItem
                        key={index}
                        className="pl-1 md:pl-2 md:basis-1/2 lg:basis-1/3"
                    >
                        <div className="p-0.5">
                            <Card className="border-0 rounded-none overflow-hidden">
                                <CardContent className="flex items-center justify-center p-0 relative">
                                    <img
                                        src={src}
                                        alt={`Slide ${index + 1}`}
                                        className="w-full h-full object-cover" // Ajustes clave
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
        </Carousel>
    );
}
