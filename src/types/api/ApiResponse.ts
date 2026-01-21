import type { ApiInfo } from "./ApiInfo"

/**
 * Respuesta genérica de la API de Rick and Morty.
 * @template T Tipo de los resultados
 * @property info Información de paginación
 * @property results Array de resultados
 */
export interface ApiResponse<T> {
  info: ApiInfo
  results: T[]
}
