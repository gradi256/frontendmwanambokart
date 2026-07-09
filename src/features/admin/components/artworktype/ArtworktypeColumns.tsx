import { type ColumnDef } from "@tanstack/react-table"
import type { ArtworktypeType } from "../../types/ArtworktypeType"

import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import { AlertDialogShow } from "./AlertDialog"
import { ArtworktypeUpdateForm } from "./ArtworktypeUpdateForm"

export const artworktypeColumns = (
  onDelete: (id: string) => void
): ColumnDef<ArtworktypeType>[] => [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    // enableSorting: false,
    // enableHiding: false,
  },
  {
    accessorKey: "id_type",
    header: () => <div className="">Identifiant</div>,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nom de la catégorie
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      const description = row.getValue("description") as string
      return description.length > 50
        ? `${description.substring(0, 50)}...`
        : description
    },
  },
  {
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      const artworktype = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(artworktype.id_type)}
            >
              Copier l'Id
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Voir plus</DropdownMenuItem>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              <ArtworktypeUpdateForm artworktype={artworktype} />
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              <AlertDialogShow
                onConfirm={() => onDelete(artworktype.id_type)}
                nameBtn="Supprimer"
                title="êtes-vous sûr de vouloir supprimer ce type"
                desc="Cettte action est irreversible"
                act="Suppimer"
              />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
