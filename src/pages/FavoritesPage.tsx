import { Link } from "react-router-dom"
import { useFavorites } from "../context/FavoritesContext"

const FavoritesPage = () => {
  const { favorites, toggleFavorite } = useFavorites()

  if (favorites.length === 0) {
    return (
      <div className="p-8 text-center">
        <p className="mb-4">No tienes personajes favoritos</p>
        <Link
          to="/characters"
          className="inline-block px-4 py-2 border rounded"
        >
          Explorar personajes
        </Link>
      </div>
    )
  }

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {favorites.map((character) => (
        <div
          key={character.id}
          className="bg-zinc-800/80 border border-zinc-700 rounded-2xl shadow-lg p-5 flex gap-5 items-center"
        >
          <img
            src={character.image}
            alt={character.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-zinc-900 shadow"
          />
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="font-bold text-lg text-blue-400 mb-1 truncate" title={character.name}>{character.name}</h2>
            <span className="inline-block px-2 py-1 text-xs rounded bg-zinc-900 text-zinc-200 mb-2 w-fit">{character.species}</span>
            <button
              onClick={() => toggleFavorite(character)}
              className="mt-2 px-4 py-1 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-zinc-900 font-semibold text-sm shadow transition-all duration-150"
            >
              Quitar de favoritos
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FavoritesPage
