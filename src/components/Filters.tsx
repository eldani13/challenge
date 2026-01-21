import { useSearchParams } from "react-router-dom"

/**
 * Componente de filtros por estado y especie.
 * Actualiza los parámetros en la URL.
 * @returns JSX.Element
 */
const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const status = searchParams.get("status") || ""
  const species = searchParams.get("species") || ""

  const updateParam = (key: string, value: string) => {
    if (value) {
      searchParams.set(key, value)
    } else {
      searchParams.delete(key)
    }
    searchParams.set("page", "1")
    setSearchParams(searchParams)
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-4 w-full">
      <select
        value={status}
        onChange={(e) => updateParam("status", e.target.value)}
        className="px-4 py-2 rounded-xl bg-zinc-900/80 border border-zinc-700 shadow focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none text-zinc-100 transition-all duration-150"
      >
        <option value="">Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      <div className="relative w-48">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 20v-6m0 0V4m0 10H6m6 0h6"/></svg>
        </span>
        <input
          type="text"
          placeholder="Species"
          value={species}
          onChange={(e) => updateParam("species", e.target.value)}
          className="pl-10 pr-4 py-2 rounded-xl bg-zinc-900/80 border border-zinc-700 shadow focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none text-zinc-100 placeholder-zinc-400 transition-all duration-150 w-full"
        />
      </div>
    </div>
  )
}

export default Filters
