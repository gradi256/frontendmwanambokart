import { useQuery } from "@tanstack/react-query"
import { TriangleAlert } from "lucide-react"
import { Spinner0 } from "../artworktype/Spinner"
import { toast } from "sonner"
import { DataTable } from "./data-table"
import { GetAdmin } from "../../services/user/GetAdmin"
import { AdminColumns } from "./AdminColumns"

export const AdminList = () => {
  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: GetAdmin,
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
          <DataTable columns={AdminColumns} data={users} />
        )}
      </div>
    </div>
  )
}
