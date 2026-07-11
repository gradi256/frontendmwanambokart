import { API_URL } from "@/config/api"
import axios from "axios"

export const DeleteArtisan = async (id_user: string) => {
  const { data } = await axios.delete(`${API_URL}/user/${id_user}?role=ARTIST`)
  return data.data
}
 