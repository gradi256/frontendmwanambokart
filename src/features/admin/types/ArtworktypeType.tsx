export type ArtworktypeType = {
  id_type: string
  name: string
  description: string
  img: string
}

export type ArtworktypeInput = Omit<ArtworktypeType, "id_type" | "img">

