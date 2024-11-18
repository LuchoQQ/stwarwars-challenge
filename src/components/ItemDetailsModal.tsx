import React from "react";
import { Dialog, DialogContent, DialogOverlay } from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import PeopleDetails from "./modals/PeopleDetails";
import PlanetDetails from "./modals/PlanetDetails";
import StarshipDetails from "./modals/StarshipDetails";

interface ItemDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    item: any;
    category: string;
}

const ItemDetailsModal: React.FC<ItemDetailsModalProps> = ({
    isOpen,
    onClose,
    item,
    category,
}) => {
    if (!isOpen || !item) return null;

    const renderDetails = () => {
        switch (category) {
            case "people":
                return <PeopleDetails item={item} />;
            case "planets":
                return <PlanetDetails item={item} />;
            case "starships":
                return <StarshipDetails item={item} />;
            default:
                return <p>Detalles no disponibles para esta categoría.</p>;
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogOverlay className="fixed inset-0 bg-black bg-opacity-50 z-40" />
            <DialogContent
                className="fixed z-50 bg-white rounded-lg shadow-lg 
                ml-auto mr-auto mt-auto mb-auto
                max-w-[500px] max-h-[80%] overflow-y-auto 
                sm:w-[40%]
                sm:max-w-full sm:max-h-full sm:rounded-none 
                inset-0 lg:inset-auto lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
            >
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold capitalize">{item.name}</h2>
                        <Button
                            variant="ghost"
                            onClick={onClose}
                            aria-label="Cerrar"
                        >
                            <X size={24} />
                        </Button>
                    </div>
                    <div className="space-y-4">{renderDetails()}</div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ItemDetailsModal;
