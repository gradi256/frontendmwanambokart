import { API_URL } from "@/config/api"
import axios from "axios"

export const DeleteArtworktype = async (idType: string) => {
  const res = await axios.delete(`${API_URL}/artworktype/${idType}`)
  return res.data.data
}
