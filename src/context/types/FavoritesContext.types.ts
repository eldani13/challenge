/**
 * Tipo del contexto de favoritos.
 * @property favorites Lista de personajes favoritos
 * @property isFavorite Verifica si un personaje es favorito
 * @property toggleFavorite Agrega o quita un personaje de favoritos
 */
export interface FavoritesContextType {
  favorites: import("../../types").Character[]
  isFavorite: (id: number) => boolean
  toggleFavorite: (character: import("../../types").Character) => void
}
