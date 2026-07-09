import { API_URL } from "@/config/api"
import axios from "axios"

export const GetArtist = async () => {
  const { data } = await axios.get(`${API_URL}/user?role=ARTIST`)
  return data.data
}
