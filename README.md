
# Challenge – Rick and Morty

Challenge frontend construido con React y TypeScript para explorar personajes de la API de Rick and Morty.

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- React Router
- TanStack React Query
- Tailwind CSS
- Axios
- Vitest
- Testing Library

## Funcionalidades

- Listado de personajes con paginación
- Búsqueda por nombre con debounce
- Filtros por estado y especie
- Vista de detalle del personaje con episodios
- Sistema de favoritos con persistencia en localStorage
- Estado sincronizado con la URL (búsqueda, filtros y paginación)


## Estructura del proyecto

- **components/**: Componentes reutilizables de interfaz (UI). Cada archivo exporta un componente React funcional. Ejemplo: `Pagination`, `SearchBar`, `Layout`, `Filters`.
- **pages/**: Componentes de página asociados a rutas. Cada archivo representa una vista principal. Ejemplo: `CharactersPage`, `CharacterDetailPage`, `FavoritesPage`.
- **hooks/**: Hooks personalizados para lógica de datos y estado. Ejemplo: `useCharacters`, `useCharacter`.
- **context/**: Manejo de estado global. Aquí está el contexto de favoritos (`FavoritesContext`).
- **services/**: Capa de acceso a la API. Funciones para obtener datos de la API de Rick and Morty.
- **types/**: Interfaces y tipos TypeScript. Modelos de datos usados en todo el proyecto.
- **utils/**: Funciones auxiliares reutilizables. Ejemplo: `debounce`.
- **test/**: Configuración y utilidades de testing.

---

## Documentación técnica de código

### Modelos y Tipos (`src/types`)

- **ApiInfo**: Información de paginación de la API.
- **ApiResponse<T>**: Respuesta genérica de la API, contiene `info` y un array de resultados.
- **CharacterStatus**: Estado posible de un personaje (`Alive`, `Dead`, `unknown`).
- **Character**: Modelo de personaje de la API.
- **Episode**: Modelo de episodio de la API.

### Servicios (`src/services/rickAndMortyApi.ts`)

- **getCharacters(params)**: Obtiene personajes con filtros y paginación. Parámetros: `page`, `name`, `status`, `species`.
- **getCharacterById(id)**: Obtiene un personaje por su ID.
- **getEpisodesByIds(ids)**: Obtiene uno o varios episodios por sus IDs.

### Hooks personalizados (`src/hooks`)

- **useCharacters(params)**: Hook para obtener y cachear la lista de personajes según filtros y paginación.
- **useCharacter(id)**: Hook para obtener el detalle de un personaje y sus episodios.

### Contexto (`src/context/FavoritesContext.tsx`)

- **FavoritesProvider**: Proveedor de contexto para favoritos. Envuelve la app y expone favoritos y funciones para manipularlos.
- **useFavorites()**: Hook para acceder al contexto de favoritos. Permite consultar y alternar favoritos.

### Componentes (`src/components`)

- **Layout**: Estructura general de la app, incluye navegación y outlet de rutas.
- **Pagination**: Componente de paginación. Props: `hasNext`, `hasPrev`.
- **SearchBar**: Barra de búsqueda con debounce. Actualiza el parámetro `name` en la URL.
- **Filters**: Filtros por estado y especie. Actualiza parámetros en la URL.

### Utilidades (`src/utils/debounce.ts`)

- **debounce(fn, delay)**: Devuelve una función que retrasa la ejecución de `fn` hasta que deja de ser llamada por `delay` ms. Útil para optimizar búsquedas.

---

## Ejemplo de flujo de datos

1. El usuario navega a `/characters`.
2. `CharactersPage` usa `useCharacters` para obtener datos de la API.
3. El usuario puede buscar, filtrar o paginar; los hooks y componentes actualizan la URL y los datos.
4. Al hacer click en un personaje, se navega a `/characters/:id` y se usa `useCharacter` para mostrar detalle y episodios.
5. El usuario puede agregar o quitar favoritos, que se guardan en localStorage y se acceden vía contexto.

---

## Documentación en el código

Cada función, hook, modelo, componente y utilidad está documentada con comentarios JSDoc en el código fuente. Consulta cada archivo para ver detalles de parámetros, retornos y ejemplos de uso.

## Tests

El proyecto incluye tests automatizados usando Vitest y Testing Library.

- List renders: verifica que el listado de personajes se renderiza correctamente
- Favorites persists: verifica que los favoritos se guardan y persisten en localStorage

Para ejecutar los tests:

```bash
npm run test
```

## Cómo correr el proyecto

Instalar dependencias:

```bash
npm install
```

Ejecutar el entorno de desarrollo:

```bash
npm run dev
```

Abrir el proyecto en el navegador usando la URL que muestra Vite

## Decisiones técnicas

- Se utilizó TanStack React Query para manejar el estado del servidor, cacheo y sincronización de datos, evitando lógica manual compleja.
- React Router se configuró con rutas anidadas y un layout compartido para mantener una estructura clara.
- El estado de búsqueda, filtros y paginación se sincroniza con la URL para permitir recarga, navegación y compartición de enlaces.
- Tailwind CSS se utilizó para acelerar el desarrollo visual manteniendo consistencia y diseño responsive.
- Los favoritos se implementaron mediante Context API y se persistieron en localStorage para mantener el estado entre recargas.
- En los tests se mockearon hooks y dependencias externas para aislar la lógica y evitar llamadas reales a la API.

## Qué haría diferente con más tiempo

- Agregar más tests para filtros, paginación y navegación entre páginas.
- Implementar estados de carga más elaborados (skeleton loaders).
- Mejorar accesibilidad y soporte de teclado.
- Agregar animaciones y transiciones entre vistas.
- Separar aún más la lógica de negocio para mayor escalabilidad.
- Configurar integración continua para ejecutar tests automáticamente.
