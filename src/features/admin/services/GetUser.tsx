import { API_URL } from "@/config/api"
import axios from "axios"

export const getUsers = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/user`)
    return data
  } catch (error) {
    console.error("🚨 Erreur attrapée pendant le fetch :", error)
  }
}
