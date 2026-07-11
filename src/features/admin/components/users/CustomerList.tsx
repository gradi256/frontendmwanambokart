import { CustomerColumns } from "./CustomerColums"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { GetCustomer } from "../../services/user/GetCustomer"
import { TriangleAlert } from "lucide-react"
import { Spinner0 } from "../artworktype/Spinner"
import { toast } from "sonner"
import { DataTable } from "./data-table"
import { DeleteCustomer } from "../../services/user/DeleteCustomer"

export const CustomerList = () => {
  const queryClient = useQueryClient()
  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: GetCustomer,
  })

  const deleteMutation = useMutation({
    mutationFn: (id_user: string) => DeleteCustomer(id_user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] })
      toast.success("Utilisateur supprimé avec succès !")
    },
    onError: (error) => {
      toast.error("Erreur lors de la suppression")
      console.log(error?.message)
    },
  })

  const columns = CustomerColumns((id_user) => {
    deleteMutation.mutate(id_user)
  })
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
