import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { debounce } from "../utils/debounce"

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialValue = searchParams.get("name") || ""
  const [value, setValue] = useState(initialValue)

  const debouncedSearch = useMemo(
    () =>
      debounce((text: string) => {
        if (text) {
          searchParams.set("name", text)
          searchParams.set("page", "1")
        } else {
          searchParams.delete("name")
        }
        setSearchParams(searchParams)
      }, 400),
    []
  )

  useEffect(() => {
    debouncedSearch(value)
  }, [value])

  return (
    <div className="relative w-full mb-4">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none">
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7 7 0 1 0 7 7a7 7 0 0 0 9.65 9.65z"/></svg>
      </span>
      <input
        type="text"
        placeholder="Buscar personaje..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full pl-10 pr-4 py-2 rounded-xl bg-zinc-900/80 border border-zinc-700 shadow focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none text-zinc-100 placeholder-zinc-400 transition-all duration-150"
      />
    </div>
  )
}

export default SearchBar
