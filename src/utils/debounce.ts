/**
 * Devuelve una función que retrasa la ejecución de `fn` hasta que deja de ser llamada por `delay` ms.
 * Útil para optimizar búsquedas o eventos frecuentes.
 * @template T Tipo de función a debounciar
 * @param fn Función a ejecutar
 * @param delay Milisegundos de espera
 * @returns Función debounciada
 */
export function debounce<T extends (...args: any[]) => void>(
  fn: T,
  delay: number
) {
  let timeoutId: number
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    timeoutId = window.setTimeout(() => {
      fn(...args)
    }, delay)
  }
}
