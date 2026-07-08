import { useQuery } from "@tanstack/react-query"
import { getArtworktype } from "../../services/ArtworktypeService"
import type { ArtworktypeType } from "../../types/ArtworktypeType"
import { Loader2, TriangleAlert } from "lucide-react"
import { ArtworktypeBox } from "./ArtworktypeBox"

export const ArtworktypeList = () => {
  const {
    data: artworktype,
    isLoading,
    isError,
    // error,
  } = useQuery({
    queryKey: ["artworktype"],
    queryFn: getArtworktype,
  })

  return (
    <div>
      <div className="rounded-md border border-sidebar-border bg-card shadow-accent-foreground">
        {isError && (
          <div className="flex flex-col items-center justify-center text-destructive gap-2 h-50 ">
            <TriangleAlert className="h-10 w-10" />
            <span>impossible de récupérer la liste des types d'oœuvre</span>
          </div>
        )}
        {isLoading && (
          <div className="flex flex-col items-center justify-center gap-2 h-50">
            <Loader2 className="h-10 w-10 animate-spin font-bold text-primary" />
            <span className="text-sm text-muted-foreground">
              Chagement des types d'oœuvre en cours...
            </span>
          </div>
        )}
      </div>

      <div>
        {artworktype?.map((item: ArtworktypeType) => (
          <ArtworktypeBox
            key={item.id_type}
            img=""
            id_type={item.id_type}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    </div>
  )
}
