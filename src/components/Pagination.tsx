
import { useSearchParams } from "react-router-dom"
import type { PaginationProps } from "./types/Pagination.types"

/**
 * Componente de paginación. Permite navegar entre páginas de resultados.
 * @param hasNext Hay página siguiente
 * @param hasPrev Hay página anterior
 * @returns JSX.Element
 */
const Pagination = ({ hasNext, hasPrev }: PaginationProps) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const page = Number(searchParams.get("page")) || 1

  const goToPage = (newPage: number) => {
    searchParams.set("page", String(newPage))
    setSearchParams(searchParams)
  }

  return (
    <div className="flex justify-center gap-4 mt-6">
      <button
        onClick={() => goToPage(page - 1)}
        disabled={!hasPrev}
        className="px-4 py-2 border rounded disabled:opacity-50"
      >
        Prev
      </button>

      <span className="px-4 py-2">Página {page}</span>

      <button
        onClick={() => goToPage(page + 1)}
        disabled={!hasNext}
        className="px-4 py-2 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
