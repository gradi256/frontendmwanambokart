import { Paintbrush } from "lucide-react"

export const HeaderForm = () => {
  return (
    <div className="relative z-10 max-w-sm space-y-4">
      <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/20 px-3 py-1 backdrop-blur-md">
        <Paintbrush className="h-4 w-4 text-primary" />
        <span className="text-xs font-semibold text-white">Espace Artisan</span>
      </div>
      <h2 className="text-3xl leading-tight font-bold tracking-tight text-white lg:text-4xl">
        Partagez votre héritage avec le monde.
      </h2>
      <p className="text-sm leading-relaxed text-zinc-200">
        Mwana Mbok' Art vous offre les outils nécessaires pour transformer votre
        talent en une entreprise prospère.
      </p>
    </div>
  )
}
