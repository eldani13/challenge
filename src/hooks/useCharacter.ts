import { useQuery } from "@tanstack/react-query"
import { getCharacterById, getEpisodesByIds } from "../services/rickAndMortyApi"
import type { Character, Episode } from "../types"

export const useCharacter = (id: number) => {
  return useQuery({
    queryKey: ["character", id],
    queryFn: async () => {
      const character = await getCharacterById(id)

      const episodeIds = character.episode.map((url) =>
        Number(url.split("/").pop())
      )

      const episodes = await getEpisodesByIds(episodeIds)

      return {
        character,
        episodes,
      } as { character: Character; episodes: Episode[] }
    },
  })
}
