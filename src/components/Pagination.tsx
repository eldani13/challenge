import { useSearchParams } from "react-router-dom"

interface Props {
  hasNext: boolean
  hasPrev: boolean
}

const Pagination = ({ hasNext, hasPrev }: Props) => {
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
