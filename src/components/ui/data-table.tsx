import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  //Initialisation du tableau
  const table = useReactTable({
    data, //Les donées brutes de départ
    columns, //La definition des collonnes
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="rounded-md border border-border bg-card text-card-foreground">
      <Table>
        {/* En-tête du tableau */}
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            //Pour chaque groupe, on crée un ligne du tableau
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {/* Si la colonne est un espace vide de transition (placeholder), on n'affiche rien */}
                    {header.isPlaceholder
                      ? null
                      : // SINON : On demande à flexRender de dessiner le titre de la colonne.
                        // On lui passe l'élément de définition et le contexte (les métadonnées de la colonne).
                        flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>

        {/* CORPS DU TABLEAU */}
        <TableBody>
          {/* CONDITION : Est-ce qu'on a au moins une ligne de données à afficher ? */}
          {table.getRowModel().rows?.length ? (
            // CAS OUI : On boucle sur chaque ligne (row) de données calculée par TanStack
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                // Attribut HTML personnalisé utilisé par Shadcn pour appliquer un style visuel si la ligne est cochée/sélectionnée
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            // CAS NON : Si l'API retourne un tableau vide ou qu'aucun filtre ne correspond
            <TableRow>
              {/* On crée une seule cellule géante qui prend la largeur totale de nos colonnes (colSpan) */}
              <TableCell
                colSpan={columns.length}
                className="h-24 text-center text-muted-foreground"
              >
                Aucun résultat
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
