const PeopleDetails = ({ item }: { item: any }) => {
    return (
        <div className="flex flex-col gap-4">
            <p><strong>Altura:</strong> {item.height} cm</p>
            <p><strong>Peso:</strong> {item.mass} kg</p>
            <p><strong>Color de cabello:</strong> {item.hair_color}</p>
            <p><strong>Color de piel:</strong> {item.skin_color}</p>
            <p><strong>Color de ojos:</strong> {item.eye_color}</p>
            <p><strong>Año de nacimiento:</strong> {item.birth_year}</p>
            <p><strong>Género:</strong> {item.gender}</p>
        </div>
    );
};

export default PeopleDetails;