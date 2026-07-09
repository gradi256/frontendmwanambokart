import { API_URL } from "@/config/api"
import axios from "axios"
import type { ArtworktypeType } from "../types/ArtworktypeType"

export const DeleteArtworktype = async (idType: ArtworktypeType) => {
  const res = await axios.delete(`${API_URL}/{artworktype}/${idType}`)
  return res.data.data
}
