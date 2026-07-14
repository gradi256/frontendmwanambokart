import { API } from "@/config/api"
import type { ArtworktypeInput } from "../../types/ArtworktypeType"

export const PostArtworktype = async (artworktypeData: ArtworktypeInput) => {
  const response = await API.post(`/artworktype`, {
    name: artworktypeData.name,
    description: artworktypeData.description,
  })
  return response.data.data
}
