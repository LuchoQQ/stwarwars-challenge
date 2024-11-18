import axios from "axios";

// Mapeo de endpoints
const API_ENDPOINTS = {
    people: "https://swapi.dev/api/people/",
    planets: "https://swapi.dev/api/planets/",
    films: "https://swapi.dev/api/films/",
    species: "https://swapi.dev/api/species/",
    vehicles: "https://swapi.dev/api/vehicles/",
    starships: "https://swapi.dev/api/starships/",
};

// Manejador simplificado
const apiHandler = async (endpointKey: keyof typeof API_ENDPOINTS, params?: Record<string, any>) => {
    try {
        const endpoint = API_ENDPOINTS[endpointKey];
        if (!endpoint) {
            throw new Error(`El endpoint '${endpointKey}' no está definido.`);
        }

        const response = await axios.get(endpoint, { params });
        return response.data;
    } catch (error) {
        console.error(`Error en la llamada a '${endpointKey}':`, error);
        throw error;
    }
};

export default apiHandler;
