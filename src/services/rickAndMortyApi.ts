import axios from "axios"
import type { ApiResponse, Character, Episode } from "../types"

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
})

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

export const getCharacterById = async (id: number) => {
  const response = await api.get<Character>(`/character/${id}`)
  return response.data
}

export const getEpisodesByIds = async (ids: number[]) => {
  if (ids.length === 0) return []
  const response = await api.get<Episode | Episode[]>(
    `/episode/${ids.join(",")}`
  )
  return Array.isArray(response.data)
    ? response.data
    : [response.data]
}
