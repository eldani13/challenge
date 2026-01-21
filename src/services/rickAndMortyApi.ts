
import type { ApiResponse, Character, Episode } from "../types"
import { api } from "./api"

/**
 * Se obtiene una lista de personajes de la API con filtros y paginación.
 * @param params Parámetros de búsqueda: page, name, status, species
 * @returns ApiResponse<Character>
 */
export const getCharacters = async (params?: {
  page?: number
  name?: string
  status?: string
  species?: string
}) => {
  const response = await api.get<ApiResponse<Character>>("/character", {
    params,
  })
  return response.data
}

/**
 * Se obtiene el detalle de un personaje por su ID.
 * @param id ID del personaje
 * @returns Character
 */
export const getCharacterById = async (id: number) => {
  const response = await api.get<Character>(`/character/${id}`)
  return response.data
}

/**
 * Se obtiene uno o varios episodios por sus IDs.
 * @param ids Array de IDs de episodios
 * @returns Episode[]
 */
export const getEpisodesByIds = async (ids: number[]) => {
  if (ids.length === 0) return []
  const response = await api.get<Episode | Episode[]>(
    `/episode/${ids.join(",")}`
  )
  return Array.isArray(response.data)
    ? response.data
    : [response.data]
}
