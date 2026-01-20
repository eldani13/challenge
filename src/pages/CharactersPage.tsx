import { useSearchParams, Link } from "react-router-dom"
import { useCharacters } from "../hooks/useCharacters"
import Pagination from "../components/Pagination"
import SearchBar from "../components/SearchBar"
import Filters from "../components/Filters"

const CharactersPage = () => {
  const [searchParams] = useSearchParams()

  const page = Number(searchParams.get("page")) || 1
  const name = searchParams.get("name") || undefined
  const status = searchParams.get("status") || undefined
  const species = searchParams.get("species") || undefined

  const { data, isLoading, isError } = useCharacters({
    page,
    name,
    status,
    species,
  })

  if (isLoading) return <p>Cargando...</p>
  if (isError) return <p>Error al cargar personajes</p>
  if (!data || data.results.length === 0) return <p>No hay resultados</p>

  return (
    <>
      <SearchBar />
      <Filters />

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {data.results.map((character) => (
          <Link
            key={character.id}
            to={`/characters/${character.id}`}
            className="w-full max-w-sm"
          >
            <div className="bg-zinc-800/80 border border-zinc-700 rounded-2xl shadow-lg p-5 flex gap-5 items-center hover:scale-[1.03] hover:shadow-2xl hover:border-blue-400 transition-all duration-200 cursor-pointer">
              <img
                src={character.image}
                alt={character.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-zinc-900 shadow"
              />
              <div className="flex flex-col justify-center">
                <h2 className="font-bold text-xl text-blue-400 mb-1 truncate max-w-[140px]" title={character.name}>
                  {character.name}
                </h2>
                <span className="inline-block px-2 py-1 text-xs rounded bg-zinc-900 text-zinc-200 mb-1 w-fit">{character.species}</span>
                <span className={`inline-block px-2 py-1 text-xs rounded w-fit ${character.status === 'Alive' ? 'bg-green-700 text-green-200' : character.status === 'Dead' ? 'bg-red-700 text-red-200' : 'bg-zinc-700 text-zinc-200'}`}>{character.status}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Pagination
          hasNext={Boolean(data.info.next)}
          hasPrev={Boolean(data.info.prev)}
        />
      </div>
    </>
  )
}

export default CharactersPage
