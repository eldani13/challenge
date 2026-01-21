/**
 * Información de paginación de la API de Rick and Morty.
 * @property count Total de resultados
 * @property pages Total de páginas
 * @property next URL de la siguiente página
 * @property prev URL de la página anterior
 */
export interface ApiInfo {
  count: number
  pages: number
  next: string | null
  prev: string | null
}
