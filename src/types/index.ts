export interface ApiInfo {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

export interface ApiResponse<T> {
  info: ApiInfo
  results: T[]
}

export type CharacterStatus = "Alive" | "Dead" | "unknown"

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

export interface Episode {
  id: number
  name: string
  episode: string
}
