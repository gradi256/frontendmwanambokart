import { Lock } from "lucide-react"

export const SectionVideo = () => {
  return (
    <div className="relative flex min-h-[40vh] w-full flex-col justify-center overflow-hidden p-8 lg:min-h-screen lg:w-[40%] lg:p-12">
      <div className="absolute inset-0 z-0 h-full w-full">
        <video
          src="/6722180-uhd_2160_3840_25fps.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-brightness-75" />
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 max-w-sm space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/20 px-3 py-1 backdrop-blur-md">
          <Lock className="h-3.5 w-3.5 text-primary" />
          <span className="text-xs font-semibold tracking-wide text-white uppercase">
            Accès Sécurisé
          </span>
        </div>
        <h2 className="font-heading text-3xl leading-tight font-bold tracking-tight text-white lg:text-4xl">
          Ravis de vous revoir parmi nous.
        </h2>
        <p className="text-sm leading-relaxed text-zinc-200">
          Connectez-vous pour gérer votre galerie, suivre vos ventes et
          interagir avec vos collectionneurs.
        </p>
      </div>
    </div>
  )
}
