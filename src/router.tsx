import { createBrowserRouter } from "react-router-dom"
import Layout from "./components/Layout"
import CharactersPage from "./pages/CharactersPage"
import CharacterDetailPage from "./pages/CharacterDetailPage"
import FavoritesPage from "./pages/FavoritesPage"

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <CharactersPage />,
      },
      {
        path: "/characters",
        element: <CharactersPage />,
      },
      {
        path: "/characters/:id",
        element: <CharacterDetailPage />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
    ],
  },
])

export default router
