import { Button } from "@/components/ui/button"
import type { ArtworktypeType } from "../../types/ArtworktypeType"
import { Edit, Trash2 } from "lucide-react"

export const ArtworktypeBox = ({ img, name, description }: ArtworktypeType) => {
  return (
    <div className="flex w-150 items-center justify-between gap-3 rounded-md bg-sidebar p-4">
      <div className="flex items-center gap-3">
        <img src={img} alt={`imag de ${name}`} />
        <div className="flex flex-col tracking-tight">
          <h1 className="text-primary">{name}</h1>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant={"destructive"}>
          <Trash2 />
          supprimer
        </Button>
        <Button>
          <Edit />
          Modifier
        </Button>
      </div>
    </div>
  )
}
