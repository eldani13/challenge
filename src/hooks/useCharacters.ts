import { useQuery } from "@tanstack/react-query"
import { getCharacters } from "../services/rickAndMortyApi"
import type { ApiResponse, Character } from "../types"

/**
 * Hook para obtener y cachear la lista de personajes según filtros y paginación.
 * @param params Parámetros de búsqueda: page, name, status, species
 * @returns useQuery<ApiResponse<Character>>
 */
export const useCharacters = (params: {
  page: number
  name?: string
  status?: string
  species?: string
}) => {
  return useQuery<ApiResponse<Character>>({
    queryKey: ["characters", params],
    queryFn: () => getCharacters(params),
    placeholderData: (previousData) => previousData,
  })
}
