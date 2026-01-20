import { renderHook, act } from "@testing-library/react"
import { FavoritesProvider } from "../../context/FavoritesContext"
import { useFavorites } from "../../context/FavoritesContext"

const mockCharacter = {
  id: 1,
  name: "Rick Sanchez",
  species: "Human",
  status: "Alive",
  image: "rick.png",
}

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <FavoritesProvider>{children}</FavoritesProvider>
)

describe("Favorites persists", () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it("persists favorites in localStorage", () => {
    const { result, unmount } = renderHook(() => useFavorites(), {
      wrapper,
    })

    act(() => {
      result.current.toggleFavorite(mockCharacter as any)
    })

    expect(result.current.favorites).toHaveLength(1)

    unmount()

    const { result: newResult } = renderHook(() => useFavorites(), {
      wrapper,
    })

    expect(newResult.current.favorites).toHaveLength(1)
    expect(newResult.current.favorites[0].name).toBe("Rick Sanchez")
  })
})
