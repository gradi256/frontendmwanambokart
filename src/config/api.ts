import axios from "axios"
import { useAuthStore } from "../stores/useAuthStore"

export const API_URL = "https://mwanambokart-officiel-1.onrender.com/api"

// On crée l'instance partagée
export const API = axios.create({
  baseURL: API_URL,
  withCredentials: true, // REQUIS pour envoyer et recevoir le cookie HttpOnly du Refresh Token !
})

// On injecte l'Access Token de Zustand à chaque requête sortante
API.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().accessToken
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)