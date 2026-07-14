import { API } from "@/config/api"

export const DeleteArtworktype = async (idType: string) => {
  const res = await API.delete(`/artworktype/${idType}`)
  return res.data.data
}
