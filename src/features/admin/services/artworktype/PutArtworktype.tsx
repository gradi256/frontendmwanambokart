import { API } from "@/config/api"
import type { ArtworktypeType } from "../../types/ArtworktypeType"

export const UpdataArtworktype = async (artworktypeData: ArtworktypeType) => {
  const { data } = await API.put(
    `/artworktype/${artworktypeData.id_type}`,
    artworktypeData
  )
  return data
}
