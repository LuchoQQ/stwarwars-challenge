import React from "react";
import { Button } from "./ui/button";

interface ItemCardProps {
    item: any;
    category: string;
    onOpenModal: () => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, onOpenModal }) => {
    return (
        <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <Button onClick={onOpenModal}>Ver detalles</Button>
        </div>
    );
};

export default ItemCard;
