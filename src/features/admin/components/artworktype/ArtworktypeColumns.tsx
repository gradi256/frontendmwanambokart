import { type ColumnDef } from "@tanstack/react-table"
import type { ArtworktypeType } from "../../types/ArtworktypeType"

export const artworktypeColumns: ColumnDef<ArtworktypeType>[] = [
  {
    accessorKey: "id_type", 
    header: "Id du type",
  },
  {
    accessorKey: "name", 
    header: "Nom de la catégorie",
  },
  {
    accessorKey: "description", 
    header: "Description",
  },
]
