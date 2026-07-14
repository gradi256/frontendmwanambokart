import type { USerData } from "../types/UserData"
import { API } from "@/config/api"

export const CreateCostumer = async (userData: USerData) => {
  try {
    const payload = {
      userData: {
        email: userData.email,
        password: userData.password,
      },
      customerData: userData.customer,
    }
    const { data } = await API.post(`/customer`, payload)
    return data.data
  } catch (error) {
    console.log(error)
  }
}
