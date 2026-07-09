import { CustomerColumns } from "./CustomerColums"
import { useQuery } from "@tanstack/react-query"
import { GetCustomer } from "../../services/artworktype/GetCustomer"
import { TriangleAlert } from "lucide-react"
import { Spinner0 } from "../artworktype/Spinner"
import { toast } from "sonner"
import { DataTable } from "./data-table"

export const CustomerList = () => {
  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: GetCustomer,
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
          <DataTable columns={CustomerColumns} data={users} />
        )}
      </div>
    </div>
  )
}
