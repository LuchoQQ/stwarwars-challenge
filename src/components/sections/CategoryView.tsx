import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import {
    Table,
    Layout,
} from "lucide-react";
import ItemDetailsModal from "../ItemDetailsModal";
import { Input } from "../ui/input";
import ItemCard from "../ItemCard";
import { Button } from "../ui/button";
import Loader from "../Loader";
import TableView from "../TableView";
import Paginado from "../Paginado";
import { useNavigate, useParams } from "react-router-dom";

interface CategoryViewProps {
    category: string;
}

interface ApiResponse<T> {
    count: number;
    results: T[];
}

const fetchItems = async (
    category: string,
    page: number,
    search: string
): Promise<ApiResponse<any>> => {
    const searchParam = search ? `&search=${search}` : "";
    const response = await fetch(
        `https://swapi.dev/api/${category}/?page=${page}${searchParam}`
    );
    if (!response.ok) {
        throw new Error("Error al cargar los datos");
    }
    return response.json();
};

const CategoryView: React.FC<CategoryViewProps> = ({ category }) => {
    const { id } = useParams<{ id: string }>(); // Obtener el ID de la URL
    const navigate = useNavigate();

    const [search, setSearch] = React.useState("");
    const [currentPage, setCurrentPage] = React.useState(1);
    const [debouncedSearch, setDebouncedSearch] = React.useState("");
    const itemsPerPage = 10;
    const [tableView, setTableView] = React.useState(false);

    useEffect(() => {
        setCurrentPage(1);
        setSearch("");
        setDebouncedSearch("");
    }, [category]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search);
            setCurrentPage(1);
        }, 300);

        return () => clearTimeout(timer);
    }, [search]);

    useEffect(() => {
        if (id) {
            const fetchSelectedItem = async () => {
                try {
                    const response = await fetch(
                        `https://swapi.dev/api/${category}/${id}/`
                    );
                    if (!response.ok) {
                        throw new Error("Error al cargar los datos del ítem.");
                    }
                    const data = await response.json();
                    setSelectedItem(data);
                    setShowModal(true);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchSelectedItem();
        }
    }, [id, category]);

    const { data, error, isLoading, isError } = useQuery({
        queryKey: ["items", category, currentPage, debouncedSearch],
        queryFn: () => fetchItems(category, currentPage, debouncedSearch),
    });

    const totalPages = Math.ceil((data?.count || 0) / itemsPerPage);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    const [showModal, setShowModal] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState(null);

    const closeModal = () => {
        setShowModal(false);
        setSelectedItem(null);
        navigate(`/info/${category}`); // Volver a la lista sin el ID en la URL
    };

    let categoryName = () => {
        switch (category) {
            case "people":
                return "personajes";
            case "planets":
                return "planetas";
            case "starships":
                return "naves";
        }
    };

    return (
        <>
            <ItemDetailsModal
                isOpen={showModal}
                onClose={closeModal}
                item={selectedItem}
                category={category}
            />
            <section className="mt-14 sm:mt-0 p-4 bg-white drop-shadow-sm rounded-sm">
                <div className="flex  items-center mb-4">
                    <h2 className="text-2xl font-bold capitalize mr-14 tracking-[.1em]">
                        {categoryName()}
                    </h2>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setTableView(!tableView)}
                        aria-label="Alternar vista"
                    >
                        {tableView ? (
                            <Layout className="h-4 w-4" />
                        ) : (
                            <Table className="h-4 w-4" />
                        )}
                    </Button>
                </div>
                <Input
                    type="text"
                    placeholder="Buscar por nombre..."
                    value={search}
                    onChange={handleSearchChange}
                    className="mb-4"
                />
                {isLoading ? (
                    <Loader />
                ) : isError ? (
                    <p className="text-red-500">{(error as Error).message}</p>
                ) : (
                    data && (
                        <>
                            {tableView ? (
                                <TableView
                                    category={category}
                                    data={data?.results}
                                />
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {data?.results.map((item: any) => (
                                        <ItemCard
                                            key={item.url}
                                            item={item}
                                            category={category}
                                        />
                                    ))}
                                </div>
                            )}
                            {data?.count === 0 && debouncedSearch && (
                                <p className="text-center text-gray-500">
                                    No se encontraron resultados para "
                                    {debouncedSearch}"
                                </p>
                            )}
                            <Paginado
                                data={data}
                                handlePageChange={handlePageChange}
                                currentPage={currentPage}
                                totalPages={totalPages}
                                itemsPerPage={itemsPerPage}
                                debouncedSearch={debouncedSearch}
                            />
                        </>
                    )
                )}
            </section>
        </>
    );
};

export default CategoryView;
