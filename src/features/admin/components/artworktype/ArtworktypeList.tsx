import { useQuery } from "@tanstack/react-query"
import { getArtworktype } from "../../services/GetArtworktype"
import type { ArtworktypeType } from "../../types/ArtworktypeType"
import { Palette, TriangleAlert } from "lucide-react"
import { ArtworktypeBox } from "./ArtworktypeBox"
import { toast } from "sonner"
import { ArtiworktypeSpinner } from "./ArtiworktypeSpinner"

export const ArtworktypeList = () => {
  const {
    data: artworktype,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["artworktype"],
    queryFn: getArtworktype,
  })

  return (
    <div>
      <div className="rounded-md border border-sidebar-border bg-card shadow-accent-foreground">
        <h1 className="flex items-center gap-2 p-4 tracking-tight text-muted-foreground">
          <Palette />
          Types d'œuvres de la galerie
        </h1>
        {isError && (
          <div className="flex h-50 flex-col items-center justify-center gap-2 text-destructive">
            <TriangleAlert className="h-10 w-10" />
            <span>impossible de récupérer la liste des types d'oœuvre</span>
          </div>
        )}
        {isError && toast.error(error.message)}
        {isLoading && <ArtiworktypeSpinner />}

        {artworktype?.map((item: ArtworktypeType) => (
          <div className="flex">
            <ArtworktypeBox
              key={item.id_type}
              img="https://avatars.githubusercontent.com/u/218519586?v=4&size=64"
              id_type={item.id_type}
              name={item.name}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
