/**
 * Modelo de episodio de la API de Rick and Morty.
 * @property id ID único
 * @property name Nombre del episodio
 * @property episode Código del episodio (SxxExx)
 */
export interface Episode {
  id: number
  name: string
  episode: string
}
