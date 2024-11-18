const StarshipDetails = ({ item }: { item: any }) => {
    return (
        <div className="flex flex-col gap-4">
            <p><strong>Modelo:</strong> {item.model}</p>
            <p><strong>Fabricante:</strong> {item.manufacturer}</p>
            <p><strong>Costo:</strong> {item.cost_in_credits} créditos</p>
            <p><strong>Longitud:</strong> {item.length} metros</p>
            <p><strong>Velocidad máxima:</strong> {item.max_atmosphering_speed}</p>
            <p><strong>Tripulación:</strong> {item.crew}</p>
            <p><strong>Capacidad de pasajeros:</strong> {item.passengers}</p>
            <p><strong>Capacidad de carga:</strong> {item.cargo_capacity} kg</p>
        </div>
    );
};

export default StarshipDetails;
