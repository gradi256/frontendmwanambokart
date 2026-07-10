import { API_URL } from "@/config/api"
import axios from "axios"

export const DeleteArtisan = async (artisanId: string) => {
  const { data } = await axios.delete(`${API_URL}/artist/${artisanId}`)
  return data.data
}
