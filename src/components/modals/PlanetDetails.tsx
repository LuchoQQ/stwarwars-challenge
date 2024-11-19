import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PlanetDetails = ({ item }: { item: any }) => {
    const [residents, setResidents] = useState<any[]>([]);

    useEffect(() => {
        const fetchResidents = async () => {
            const residentsData = await Promise.all(
                item.residents.map(async (url: string) => {
                    const response = await fetch(url);
                    if (response.ok) {
                        return response.json();
                    }
                    return null;
                })
            );
            setResidents(residentsData.filter(Boolean)); 
        };

        if (item.residents.length > 0) {
            fetchResidents();
        }
    }, [item.residents]);

    return (
        <div className="flex flex-col gap-4">
            <p><strong>Período de rotación:</strong> {item.rotation_period} horas</p>
            <p><strong>Período orbital:</strong> {item.orbital_period} días</p>
            <p><strong>Diámetro:</strong> {item.diameter} km</p>
            <p><strong>Clima:</strong> {item.climate}</p>
            <p><strong>Terreno:</strong> {item.terrain}</p>
            <p><strong>Agua superficial:</strong> {item.surface_water}%</p>
            <p><strong>Población:</strong> {item.population}</p>

            <div>
                <h3 className="font-semibold mt-4">Residentes:</h3>
                {residents.length > 0 ? (
                    <ul>
                        {residents.map((resident: any) => (
                            <li key={resident.url}>
                                <Link
                                    to={`${import.meta.env.HOST || ''}/info/people/${resident.url.split('/')[5]}`} 
                                    className="text-blue-500 hover:underline"
                                >
                                    <p><strong>{resident.name}</strong></p>
                                </Link>
                                <p><i>{resident.gender}</i> | {resident.birth_year}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No se encontraron residentes.</p>
                )}
            </div>
        </div>
    );
};

export default PlanetDetails;
