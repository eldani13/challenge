import { useParams } from "react-router-dom"
import { useCharacter } from "../hooks/useCharacter"
import { useFavorites } from "../context/FavoritesContext"

const CharacterDetailPage = () => {
  const { id } = useParams()

  const characterId = Number(id)
  const { data, isLoading, isError } = useCharacter(characterId)
  const { isFavorite, toggleFavorite } = useFavorites()

  if (isLoading) return <p className="p-4">Cargando...</p>
  if (isError || !data) return <p className="p-4">Error al cargar personaje</p>

  const { character, episodes } = data

  return (
    <div className="p-6 max-w-3xl mx-auto bg-zinc-800/80 rounded-2xl shadow-xl">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <img
          src={character.image}
          alt={character.name}
          className="w-48 h-48 rounded-full object-cover border-4 border-zinc-900 shadow-lg"
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold text-blue-400 mb-2 truncate" title={character.name}>{character.name}</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`px-3 py-1 rounded text-xs font-semibold ${character.status === 'Alive' ? 'bg-green-700 text-green-200' : character.status === 'Dead' ? 'bg-red-700 text-red-200' : 'bg-zinc-700 text-zinc-200'}`}>{character.status}</span>
            <span className="px-3 py-1 rounded text-xs font-semibold bg-zinc-900 text-zinc-200">{character.species}</span>
            <span className="px-3 py-1 rounded text-xs font-semibold bg-zinc-900 text-zinc-200">{character.gender}</span>
          </div>
          <div className="mb-2 text-sm">
            <span className="font-semibold text-zinc-300">Origin:</span> {character.origin.name}
          </div>
          <div className="mb-2 text-sm">
            <span className="font-semibold text-zinc-300">Location:</span> {character.location.name}
          </div>

          <button
            onClick={() => toggleFavorite(character)}
            className={`mt-4 px-6 py-2 rounded-lg font-semibold shadow transition-all duration-150 focus:outline-none ${isFavorite(character.id) ? 'bg-yellow-400 hover:bg-yellow-500 text-zinc-900' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
          >
            {isFavorite(character.id)
              ? "Quitar de favoritos"
              : "Agregar a favoritos"}
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="font-bold text-lg mb-3 text-blue-300">Episodes</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {episodes.map((ep) => (
            <li key={ep.id} className="bg-zinc-900/80 rounded px-3 py-2 text-sm shadow">
              <span className="font-semibold text-blue-400 mr-2">{ep.episode}</span>
              <span className="text-zinc-200">{ep.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CharacterDetailPage
