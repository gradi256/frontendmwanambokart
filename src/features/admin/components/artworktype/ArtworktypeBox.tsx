import { Button } from "@/components/ui/button"
import type { ArtworktypeType } from "../../types/ArtworktypeType"
import { Edit, Trash2 } from "lucide-react"

export const ArtworktypeBox = ({ img, name, description }: ArtworktypeType) => {
  return (
    <div>
      <img src={img} alt={`imag de ${name}`} />
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      <div>
        <Button variant={"destructive"}>
          <Trash2 />
          supprimer
        </Button>
        <Button variant={"ghost"}>
          <Edit />
          Modifier
        </Button>
      </div>
    </div>
  )
}
