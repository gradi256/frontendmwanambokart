import { API_URL } from "@/config/api"
import axios from "axios"
import type { USerData } from "../types/UserData"

export const CreateCostumer = async (userData: USerData) => {
  try {
    const payload = {
      userData: {
        email: userData.email,
        password: userData.password,
      },
      customerData: userData.customer,
    }
    const { data } = await axios.post(`${API_URL}/customer`, payload)
    return data.data
  } catch (error) {
    console.log(error)
  }
}
