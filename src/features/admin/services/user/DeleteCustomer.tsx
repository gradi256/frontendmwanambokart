import { API_URL } from "@/config/api"
import axios from "axios"

export const DeleteCustomer = async (id_user: string) => {
  const { data } = await axios.delete(`${API_URL}/user/${id_user}`)
  return data.data
}
