import { createContext, useContext, useEffect, useState } from "react"

import type { Character } from "../types"
import type { FavoritesContextType } from "./types/FavoritesContext.types"


/**
 * Contexto de favoritos de personajes.
 */
const FavoritesContext = createContext<FavoritesContextType | null>(null)

const STORAGE_KEY = "favorites"

/**
 * Proveedor de contexto para favoritos. Envuelve la app y expone favoritos y funciones para manipularlos.
 * @param children Elementos hijos
 */
export const FavoritesProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [favorites, setFavorites] = useState<Character[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed)) {
          return parsed
        }
      }
    } catch {}
    return []
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
  }, [favorites])

  const isFavorite = (id: number) =>
    favorites.some((c) => c.id === id)

  const toggleFavorite = (character: Character) => {
    setFavorites((prev) =>
      isFavorite(character.id)
        ? prev.filter((c) => c.id !== character.id)
        : [...prev, character]
    )
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, isFavorite, toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

/**
 * Hook para acceder al contexto de favoritos.
 * @returns {FavoritesContextType} Acceso a favoritos y funciones
 * @throws Error si se usa fuera de FavoritesProvider
 */
export const useFavorites = () => {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error("useFavorites must be used within FavoritesProvider")
  }
  return context
}
