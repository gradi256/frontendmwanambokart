import axios from "axios"
import type { ArtworktypeType } from "../../types/ArtworktypeType"
import { API_URL } from "@/config/api"

export const UpdataArtworktype = async (artworktypeData: ArtworktypeType) => {
  const { data } = await axios.put(
    `${API_URL}/artworktype/${artworktypeData.id_type}`,
    artworktypeData
  )
  return data
}
