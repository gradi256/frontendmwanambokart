import { API_URL } from "@/config/api"
import axios from "axios"
import type { ArtworktypeInput } from "../../types/ArtworktypeType"

export const PostArtworktype = async (artworktypeData: ArtworktypeInput) => {
  const response = await axios.post(`${API_URL}/artworktype`, {
    name: artworktypeData.name,
    description: artworktypeData.description,
  })
  return response.data.data
}
