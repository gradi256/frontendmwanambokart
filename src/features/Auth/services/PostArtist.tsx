import { API } from "@/config/api"
import axios from "axios"

export const CreateArtist = async (formData: FormData) => {
  try {
    const { data } = await API.post(`/artist`, formData)
    return data.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("STATUS :", error.response?.status)
      console.log("DATA :", error.response?.data)
    }

    throw error
  }
}
