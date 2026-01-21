/**
 * Instancia de Axios, configurada para la API de Rick and Morty
 */
import axios from "axios"

export const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
})
