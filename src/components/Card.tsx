"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface CardProps {
    title: string;
    imageSrc: string;
    target: string;
}

export default function Card({ title, imageSrc, target }: CardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <motion.div
                className="max-w-sm mx-auto  rounded-xl shadow-md overflow-hidden"
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Link to={target}>
                    {/* Imagen en la parte superior */}
                    <motion.img
                        src={imageSrc}
                        alt={title}
                        className="w-full h-48 object-cover"
                        initial={{ scale: 1 }}
                        animate={{ scale: isHovered ? 1.05 : 1 }}
                        transition={{ duration: 0.3 }}
                    />
                    <h2 className="text-center font-poppins mt-4">{title}</h2>
                </Link>
            </motion.div>
        </>
    );
}
