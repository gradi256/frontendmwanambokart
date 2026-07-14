import { API } from "@/config/api"

interface ForgotPassword {
  email: string
}

export const ForgotPasswordService = async (payload: ForgotPassword) => {
  const { data } = await API.post("/auth/forgot-password", payload)
  return data
}
