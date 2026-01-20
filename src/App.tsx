import { RouterProvider } from "react-router-dom"
import { Suspense } from "react"
import router from "./router"

function App() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-lg">Cargando aplicación...</p>
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
