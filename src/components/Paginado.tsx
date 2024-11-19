import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

const Paginado = ({data, handlePageChange, currentPage, totalPages, itemsPerPage, debouncedSearch}) => {
    return (
        <>
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
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            aria-label="Página anterior"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <span className="mx-4 text-sm">
                            Página{" "}
                            <span className="font-medium">{currentPage}</span>{" "}
                            de <span className="font-medium">{totalPages}</span>
                        </span>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            aria-label="Página siguiente"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handlePageChange(totalPages)}
                            disabled={currentPage === totalPages}
                            aria-label="Última página"
                        >
                            <ChevronsRight className="h-4 w-4" />
                        </Button>
                    </div>
                    <div className="text-sm text-gray-600">
                        Mostrando {(currentPage - 1) * itemsPerPage + 1}-{" "}
                        {Math.min(currentPage * itemsPerPage, data?.count || 0)}{" "}
                        de {data?.count} elementos
                        {debouncedSearch && (
                            <span className="ml-2">(resultados filtrados)</span>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Paginado;
