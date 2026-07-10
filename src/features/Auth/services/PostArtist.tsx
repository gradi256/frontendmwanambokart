import { API_URL } from "@/config/api"
import axios from "axios"
import type { ArtisanData } from "../types/ArtisanData"

export const CreateArtist = async (userData: ArtisanData) => {
  try {
    const artist = {
      userData: {
        email: userData.email,
        password: userData.password,
      },
      artistData: userData.artist,
    }
    const { data } = await axios.post(`${API_URL}/artist`, artist)
    return data.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("STATUS :", error.response?.status)
      console.log("DATA :", error.response?.data)
    }

    throw error
  }
}
