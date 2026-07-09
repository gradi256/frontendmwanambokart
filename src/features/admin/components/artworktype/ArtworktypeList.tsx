import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getArtworktype } from "../../services/artworktype/GetArtworktype"
import { TriangleAlert } from "lucide-react"
import { toast } from "sonner"
import { ArtiworktypeSpinner } from "./ArtiworktypeSpinner"
import { DataTable } from "@/features/admin/components/artworktype/data-table"
import { artworktypeColumns } from "./ArtworktypeColumns"
import { DeleteArtworktype } from "../../services/artworktype/DeleteArtworktype"

export const ArtworktypeList = () => {
  const queryClient = useQueryClient()

  const {
    data: artworktype = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["artworktype"],
    queryFn: getArtworktype,
  })

  const deleteMutation = useMutation({
    mutationFn: (id_type: string) => DeleteArtworktype(id_type),
    onSuccess: () => {
      toast.success("Type d'œuvre supprimé avec succès !")
      // Rafraîchit instantanément le tableau en invalidant la clé
      queryClient.invalidateQueries({ queryKey: ["artworktype"] })
    },
    onError: () => {
      toast.error("Erreur lors de la suppression.")
    },
  })

  // 3. On génère les colonnes en y injectant la méthode de déclenchement de la mutation
  const columns = artworktypeColumns((id_type) =>
    deleteMutation.mutate(id_type)
  )

  return (
    <div>
      {isError && (
        <div className="flex h-50 flex-col items-center justify-center gap-2 text-destructive">
          <TriangleAlert className="h-10 w-10" />
          <span>impossible de récupérer la liste des types d'oœuvre</span>
        </div>
      )}
      {isError && toast.error(error.message)}
      {isLoading && <ArtiworktypeSpinner />}

      <div>
        {!isLoading && !isError && artworktype && (
          <DataTable columns={columns} data={artworktype} />
        )}
      </div>
    </div>
  )
}
