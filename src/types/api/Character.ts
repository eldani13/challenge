import type { CharacterStatus } from "./CharacterStatus"

/**
 * Modelo de personaje de la API de Rick and Morty.
 * @property id ID único
 * @property name Nombre
 * @property status Estado (Alive, Dead, unknown)
 * @property species Especie
 * @property gender Género
 * @property image URL de imagen
 * @property origin Origen
 * @property location Ubicación actual
 * @property episode Array de URLs de episodios
 */
export interface Character {
  id: number
  name: string
  status: CharacterStatus
  species: string
  gender: string
  image: string
  origin: {
    name: string
  }
  location: {
    name: string
  }
  episode: string[]
}
