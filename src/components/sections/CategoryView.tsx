import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    Table,
    Layout,
} from "lucide-react";
import ItemDetailsModal from "../ItemDetailsModal";
import { Input } from "../ui/input";
import ItemCard from "../ItemCard";
import { Button } from "../ui/button";
import Loader from "../Loader";
import TableView from "../TableView";

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
    const [search, setSearch] = React.useState("");
    const [currentPage, setCurrentPage] = React.useState(1);
    const [debouncedSearch, setDebouncedSearch] = React.useState("");
    const itemsPerPage = 10;
    const [tableView, setTableView] = React.useState(true);

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

    const openModal = (item: any) => {
        setSelectedItem(item);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedItem(null);
    };

    let categoryName = () =>  {
        switch(category) {
            case "people":
                return "personajes";
            case "planets":
                return "planetas"
            case "starships":
                return "naves"
        }
    }

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
                                            onOpenModal={() =>
                                                openModal(item)
                                            }
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
                            {data?.count > 0 && (
                                <div className="mt-6 flex flex-col items-center space-y-4">
                                    <div className="flex items-center space-x-2">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => handlePageChange(1)}
                                            disabled={currentPage === 1}
                                            aria-label="Primera página"
                                        >
                                            <ChevronsLeft className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() =>
                                                handlePageChange(
                                                    currentPage - 1
                                                )
                                            }
                                            disabled={currentPage === 1}
                                            aria-label="Página anterior"
                                        >
                                            <ChevronLeft className="h-4 w-4" />
                                        </Button>
                                        <span className="mx-4 text-sm">
                                            Página{" "}
                                            <span className="font-medium">
                                                {currentPage}
                                            </span>{" "}
                                            de{" "}
                                            <span className="font-medium">
                                                {totalPages}
                                            </span>
                                        </span>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() =>
                                                handlePageChange(
                                                    currentPage + 1
                                                )
                                            }
                                            disabled={
                                                currentPage === totalPages
                                            }
                                            aria-label="Página siguiente"
                                        >
                                            <ChevronRight className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() =>
                                                handlePageChange(totalPages)
                                            }
                                            disabled={
                                                currentPage === totalPages
                                            }
                                            aria-label="Última página"
                                        >
                                            <ChevronsRight className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Mostrando{" "}
                                        {(currentPage - 1) * itemsPerPage + 1}-{" "}
                                        {Math.min(
                                            currentPage * itemsPerPage,
                                            data?.count || 0
                                        )}{" "}
                                        de {data?.count} elementos
                                        {debouncedSearch && (
                                            <span className="ml-2">
                                                (resultados filtrados)
                                            </span>
                                        )}
                                    </div>
                                </div>
                            )}
                        </>
                    )
                )}
            </section>
        </>
    );
};

export default CategoryView;
