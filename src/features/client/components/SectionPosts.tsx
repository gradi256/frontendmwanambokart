import { Compass, Heart, MessageSquare, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SectionPostsProps {
  artworks: any[] // Remplace any par ton interface d'œuvre d'art si tu en as une (ex: ArtworkI[])
}

export const SectionPosts = ({ artworks } : SectionPostsProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {artworks.map((art) => (
        <Card
          key={art.id}
          className="group flex flex-col justify-between overflow-hidden rounded-2xl border-zinc-800/80 bg-zinc-900 shadow-xl transition-all hover:translate-y-[-4px]"
        >
          <div className="relative aspect-square w-full overflow-hidden border-b border-zinc-800/50 bg-zinc-950">
            <div className="flex h-full w-full items-center justify-center bg-zinc-800 text-xs text-zinc-500">
              Image de l'œuvre
            </div>
            <button className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800/40 bg-zinc-950/60 text-zinc-300 backdrop-blur-md transition-colors hover:text-destructive">
              <Heart className="h-4 w-4" />
            </button>
            {!art.available && (
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/80 backdrop-blur-xs">
                <Badge
                  variant="destructive"
                  className="rounded-md border border-red-800/30 bg-red-950 px-3 py-1 text-[10px] font-black tracking-widest text-red-400 uppercase"
                >
                  Indisponible
                </Badge>
              </div>
            )}
          </div>

          <CardContent className="flex-1 space-y-3 p-5">
            <div className="flex items-center justify-between">
              <span className="rounded-md border border-primary/20 bg-primary/10 px-2 py-0.5 text-[9px] font-black tracking-widest text-primary uppercase">
                {art.category}
              </span>
              <span className="flex items-center gap-1 text-xs font-medium text-zinc-400">
                <Compass className="h-3 w-3 text-zinc-500" /> {art.artist}
              </span>
            </div>
            <div className="space-y-1.5">
              <h2 className="line-clamp-1 text-base font-bold tracking-tight text-white">
                {art.title}
              </h2>
              <p className="line-clamp-3 text-xs leading-relaxed font-normal text-zinc-400">
                {art.description}
              </p>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-3 p-5 pt-0">
            <div className="flex w-full items-center justify-between border-t border-zinc-800/60 pt-4">
              <span className="text-xs font-medium text-zinc-500">
                Prix d'acquisition
              </span>
              <span className="text-lg font-black tracking-tight text-white">
                {art.price}
              </span>
            </div>

            <div className="grid w-full grid-cols-2 gap-2 pt-1">
              <Button
                disabled={!art.available}
                variant="outline"
                className="h-10 gap-1.5 rounded-xl border-zinc-700 text-xs font-bold text-zinc-300 transition-all hover:bg-zinc-800 hover:text-white disabled:opacity-40"
              >
                <Plus className="h-3.5 w-3.5" /> Au panier
              </Button>
              <Button
                disabled={!art.available}
                className="hover:bg-primary-hover h-10 gap-1.5 rounded-xl bg-primary text-xs font-bold text-white shadow-md shadow-primary/10 transition-all disabled:opacity-40"
              >
                <MessageSquare className="h-3.5 w-3.5" /> Commander
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
