import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/table";

type Props = {
    category: string;
    data: any;
};

type Structure = {
    columns: string[];
    rows: string[];
};

const structurePeople: Structure = {
    columns: ["Nombre", "Altura", "Peso", "Fecha de nacimiento", "Género"],
    rows: ["name", "height", "mass", "birth_year", "gender"],
};

const structurePlanets: Structure = {
    columns: [
        "Nombre",
        "Periodo de rotación",
        "Periodo orbital",
        "Diámetro",
        "Clima",
        "Gravedad",
        "Terreno",
        "Población",
    ],
    rows: [
        "name",
        "rotation_period",
        "orbital_period",
        "diameter",
        "climate",
        "gravity",
        "terrain",
        "population",
    ],
};

const structureStarships: Structure = {
    columns: ["Nombre", "Modelo", "Fabricante", "Costo", "Tripulación"],
    rows: ["name", "model", "manufacturer", "cost_in_credits", "crew"],
};

const TableView: React.FC<Props> = ({ category, data }) => {
    let structure: Structure = {
        columns: [],
        rows: [],
    };

    let tableTitle = "";

    switch (category) {
        case "people":
            structure = structurePeople;
            tableTitle = "Lista de personajes existentes";
            break;
        case "planets":
            structure = structurePlanets;
            tableTitle = "Lista de planetas existentes";
            break;
        case "starships":
            structure = structureStarships;
            tableTitle = "Lista de naves existentes";
            break;
        default:
            tableTitle = "Categoría no encontrada";
    }

    return (
        <Table>
            <TableCaption>{tableTitle}</TableCaption>
            <TableHeader>
                <TableRow>
                    {structure.columns.map((item, index) => (
                        <TableHead key={index} className="w-[100px]">
                            {item}
                        </TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((item: any, rowIndex: number) => (
                    <TableRow key={rowIndex}>
                        {structure.rows.map((row, cellIndex) => (
                            <TableCell key={cellIndex} className="font-medium">
                                {item[row]}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default TableView;
