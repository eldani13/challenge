import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { vi } from "vitest"
import CharactersPage from "../CharactersPage"

vi.mock("../../hooks/useCharacters", () => ({
  useCharacters: () => ({
    isLoading: false,
    isError: false,
    data: {
      results: [
        {
          id: 1,
          name: "Rick Sanchez",
          species: "Human",
          status: "Alive",
          image: "rick.png",
        },
        {
          id: 2,
          name: "Morty Smith",
          species: "Human",
          status: "Alive",
          image: "morty.png",
        },
      ],
      info: { next: null, prev: null },
    },
  }),
}))

describe("List renders", () => {
  it("renders character list", () => {
    render(
      <MemoryRouter>
        <CharactersPage />
      </MemoryRouter>
    )

    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument()
    expect(screen.getByText("Morty Smith")).toBeInTheDocument()
  })
})
