import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { TriangleAlert } from "lucide-react"
import { Spinner0 } from "../artworktype/Spinner"
import { toast } from "sonner"
import { DataTable } from "./data-table"
import { GetArtist } from "../../services/user/GetArtist"
import { ArtistColumns } from "./ArtistColumns"
import { DeleteArtisan } from "../../services/user/DeleteArtist"

export const ArtistList = () => {
  const queryClient = useQueryClient()
  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: GetArtist,
  })

  const deleteMutation = useMutation({
    mutationFn: (id_artist: string) => DeleteArtisan(id_artist),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] })
      toast.success("Utilisateur supprimé avec succès !")
    },
    onError: () => {
      toast.error("Erreur lors de la suppression")
    },
  })

  const columns = ArtistColumns((id_artist) => deleteMutation.mutate(id_artist))

  return (
    <div>
      {isError && (
        <div className="flex h-50 flex-col items-center justify-center gap-2 text-destructive">
          <TriangleAlert className="h-10 w-10" />
          <span>impossible de récupérer la liste des types d'oœuvre</span>
        </div>
      )}
      {isError && toast.error(error.message)}
      {isLoading && <Spinner0 />}

      <div>
        {!isLoading && !isError && users && (
          <DataTable columns={columns} data={users} />
        )}
      </div>
    </div>
  )
}
