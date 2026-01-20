
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

- components: componentes reutilizables de interfaz
- pages: componentes asociados a las rutas
- hooks: hooks personalizados para lógica de datos y estado
- context: manejo de estado global (favoritos)
- services: capa de acceso a la API
- types: interfaces y tipos de TypeScript
- utils: funciones auxiliares
- test: configuración y utilidades de testing

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
