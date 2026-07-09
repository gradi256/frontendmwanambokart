import { ShoppingBag } from "lucide-react"

export const SectionVIdeo = () => {
  return (
    <div className="relative flex min-h-[40vh] w-full flex-col justify-center overflow-hidden p-8 lg:min-h-screen lg:w-[40%] lg:p-12">
      <div className="absolute inset-0 z-0 h-full w-full">
        <video
          src="/about_vid1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-brightness-75" />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-sm space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/20 px-3 py-1 backdrop-blur-md">
          <ShoppingBag className="h-4 w-4 text-accent-foreground" />
          <span className="text-xs font-semibold text-white">
            Espace Client
          </span>
        </div>
        <h2 className="text-3xl leading-tight font-bold tracking-tight text-white lg:text-4xl">
          Acquérez des pièces uniques d'exception.
        </h2>
        <p className="text-sm leading-relaxed text-zinc-200">
          Rejoignez notre communauté de passionnés d'art, soutenez les artisans
          locaux et sécurisez vos coups de cœur.
        </p>
      </div>
    </div>
  )
}
