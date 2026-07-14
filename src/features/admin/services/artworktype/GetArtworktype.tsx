import { API } from "@/config/api"

// fonction des récupération

export const getArtworktype = async () => {
  const response = await API.get(`/artworktype`)
  return response.data.data
}


