import { Sparkles } from "lucide-react"

export const Hero = () => {
  return (
    <div className="relative flex h-[45vh] w-full flex-col justify-center overflow-hidden border-b border-zinc-800 p-6 sm:h-[40vh] sm:p-12">
      <div className="absolute inset-0 z-0 h-full w-full">
        <video
          src="/6722180-uhd_2160_3840_25fps.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-2xl space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/20 px-3 py-1 backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span className="text-[10px] font-bold tracking-wider text-primary uppercase">
            Collection exclusive
          </span>
        </div>
        <h1 className="font-heading text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl">
          Découvrez et acquérez des œuvres d'art uniques
        </h1>
        <p className="max-w-lg text-xs leading-relaxed text-zinc-400 sm:text-sm">
          Entrez en relation directe avec les artisans de la communauté
          kusanika. Explorez des pièces d'exception authentiques et certifiées
          sans aucun intermédiaire.
        </p>
      </div>
    </div>
  )
}
