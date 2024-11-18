const PlanetDetails = ({ item }: { item: any }) => {
    return (
        <div className="flex flex-col gap-4">
            <p><strong>Período de rotación:</strong> {item.rotation_period} horas</p>
            <p><strong>Período orbital:</strong> {item.orbital_period} días</p>
            <p><strong>Diámetro:</strong> {item.diameter} km</p>
            <p><strong>Clima:</strong> {item.climate}</p>
            <p><strong>Terreno:</strong> {item.terrain}</p>
            <p><strong>Agua superficial:</strong> {item.surface_water}%</p>
            <p><strong>Población:</strong> {item.population}</p>
        </div>
    );
};

export default PlanetDetails;
