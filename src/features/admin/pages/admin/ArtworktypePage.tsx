import { ArtworktypeForm } from "../../components/artworktype/ArtworktypeForm"
import { ArtworktypeList } from "../../components/artworktype/ArtworktypeList"
// import { ArtworkypeBar } from "../../components/artworktype/ArtworkypeBar"

export const ArtworktypePage = () => {
  return (
    <div className="ml-64 px-50 py-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Type d'œuvre
        </h1>
        <p className="text-sm text-muted-foreground">
          Gestion et classification des catégories artistiques du catalogue.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-10">
         {/* <ArtworkypeBar /> */}
        <ArtworktypeForm/> 
        <ArtworktypeList />
      </div>
    </div>
  )
}
