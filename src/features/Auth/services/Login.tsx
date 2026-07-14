import { API_URL } from "@/config/api"
import axios from "axios"

interface userDataI {
  email: string
  password: string
}
export const Login = async (userData: userDataI) => {
  const { data } = await axios.post(`${API_URL}/auth/login`, userData)
  return data
}
