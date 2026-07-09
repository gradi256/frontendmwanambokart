import { useQuery } from "@tanstack/react-query"
import { getArtworktype } from "../../services/GetArtworktype"
// import type { ArtworktypeType } from "../../types/ArtworktypeType"
// import { Palette, TriangleAlert } from "lucide-react"
// import { ArtworktypeBox } from "./ArtworktypeBox"
// import { toast } from "sonner"
// import { ArtiworktypeSpinner } from "./ArtiworktypeSpinner"
import { ArtworktypeForm } from "./ArtworktypeForm"
import { DataTable } from "@/components/ui/data-table"
import { artworktypeColumns } from "./ArtworktypeColumns"

export const ArtworktypeList = () => {
  // const {
  //   data: artworktype,
  //   isLoading,
  //   isError,
  //   error,
  // } = useQuery({
  //   queryKey: ["artworktype"],
  //   queryFn: getArtworktype,
  // })
  const { data: artworkTypes = [], isLoading, error } = useQuery({
    queryKey: ["artwork-types"], // Cette clé est la même que celle qu'on invalide dans le formulaire !
    queryFn: getArtworktype,   // Ta fonction qui fait le fetch de l'API
  })

  return (
    // <div>
    //   <div className="rounded-md border border-sidebar-border bg-card shadow-accent-foreground">
    //     <h1 className="flex items-center gap-2 p-4 tracking-tight text-muted-foreground">
    //       <Palette />
    //       Types d'œuvres de la galerie
    //     </h1>
    //     {isError && (
    //       <div className="flex h-50 flex-col items-center justify-center gap-2 text-destructive">
    //         <TriangleAlert className="h-10 w-10" />
    //         <span>impossible de récupérer la liste des types d'oœuvre</span>
    //       </div>
    //     )}
    //     {isError && toast.error(error.message)}
    //     {isLoading && <ArtiworktypeSpinner />}

    //     {artworktype?.map((item: ArtworktypeType) => (
    //       <div className="flex">
    //         <ArtworktypeBox
    //           key={item.id_type}
    //           img="https://avatars.githubusercontent.com/u/218519586?v=4&size=64"
    //           id_type={item.id_type}
    //           name={item.name}
    //           description={item.description}
    //         />
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="space-y-8 p-6">
      {/* En-tête de la page */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Types d'œuvres</h1>
        <p className="text-muted-foreground">
          Gérez le catalogue des catégories et des types d'œuvres d'art disponibles sur MWANA MBOK'ART.
        </p>
      </div>

      {/* Grille : Formulaire à gauche (ou en haut) et Tableau à droite (ou en bas) */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        
        {/* Colonne Formulaire (Prend 1 tiers de l'espace sur grand écran) */}
        <div className="lg:col-span-1">
          <ArtworktypeForm />
        </div>

        {/* Colonne Tableau (Prend 2 tiers de l'espace sur grand écran) */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold">Liste des catégories</h2>
          
          {/* Gestion des états de chargement / erreur de l'API */}
          {isLoading ? (
            <div className="flex h-32 items-center justify-center text-sm text-muted-foreground">
              Chargement de la liste...
            </div>
          ) : error ? (
            <div className="flex h-32 items-center justify-center text-sm text-destructive">
              Une erreur est survenue lors de la récupération des données.
            </div>
          ) : (
            // C'est ici qu'on appelle notre tableau réutilisable !
            // On lui passe les colonnes définies et les données de l'API
            <DataTable columns={artworktypeColumns} data={artworkTypes} />
          )}
        </div>

      </div>
    </div>
  )

}
