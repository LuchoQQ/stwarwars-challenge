import React from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

interface ItemCardProps {
    item: any;
    category: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, category }) => {
    const navigate = useNavigate();

    const handleOpenModal = () => {
        // Extrae el ID del ítem desde su URL o alguna propiedad disponible
        const id = item.url.split("/").filter(Boolean).pop(); 
        navigate(`/info/${category}/${id}`);
    };

    return (
        <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <Button onClick={handleOpenModal}>Ver detalles</Button>
        </div>
    );
};

export default ItemCard;
