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
        <motion.div
            className="w-full sm:w-[280px] rounded-xl shadow-md overflow-hidden"
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link to={target} className="block">
                <div className="h-[200px] overflow-hidden">
                    <motion.img
                        src={imageSrc}
                        alt={title}
                        className="w-full h-full object-contain"
                        initial={{ scale: 1 }}
                        animate={{ scale: isHovered ? 1.05 : 1 }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
                <h2 className="text-center font-poppins mt-4 pb-4">{title}</h2>
            </Link>
        </motion.div>
    );
}