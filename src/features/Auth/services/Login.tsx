import { API } from "@/config/api"

interface userDataI {
  email: string
  password: string
}
export const Login = async (userData: userDataI) => {
  const { data } = await API.post(`/auth/login`, userData)
  return data
}
