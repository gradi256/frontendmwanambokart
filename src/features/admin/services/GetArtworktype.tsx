import { API_URL } from "@/config/api"
import axios from "axios"

// fonction des récupération

export const getArtworktype = async () => {
  const response = await axios.get(`${API_URL}/artworktype`)
  console.log(response.data)
  return response.data.data
}


