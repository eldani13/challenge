import { Outlet, NavLink } from "react-router-dom"

const Layout = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <header className="bg-zinc-800 shadow-lg border-b border-zinc-700 w-full flex justify-center">
        <nav className="flex gap-6 py-4">
          <NavLink
            to="/characters"
            className={({ isActive }) =>
              `px-5 py-2 rounded-xl font-semibold transition-all duration-150 ${isActive ? 'bg-blue-500 text-white shadow' : 'text-gray-300 hover:bg-zinc-700 hover:text-blue-400'}`
            }
          >
            Characters
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `px-5 py-2 rounded-xl font-semibold transition-all duration-150 ${isActive ? 'bg-blue-500 text-white shadow' : 'text-gray-300 hover:bg-zinc-700 hover:text-blue-400'}`
            }
          >
            Favorites
          </NavLink>
        </nav>
      </header>

      <main className="max-w-7xl w-full mx-auto px-6 py-6">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
