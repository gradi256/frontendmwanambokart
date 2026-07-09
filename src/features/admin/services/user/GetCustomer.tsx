import { API_URL } from "@/config/api"
import axios from "axios"

export const GetCustomer = async () => {
  const { data } = await axios.get(`${API_URL}/user?role=CUSTOMER`)
  return data.data
}
