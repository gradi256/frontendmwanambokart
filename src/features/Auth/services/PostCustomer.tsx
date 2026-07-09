import { API_URL } from "@/config/api"
import axios from "axios"
import type { USerData } from "../types/UserData"


export const CreateCostumer = async (userData : USerData) => {
  const { data } = await axios.post(`${API_URL}/user?role=CUSTOMER`, {
    email: userData.email,
    password: userData.password,
    customer: {
      name: userData.name,
      prenom: userData.prenom,
      phone: userData.phone,
      pays: userData.pays,
      sexe: userData.sexe,
    },
  })
  return data
}
