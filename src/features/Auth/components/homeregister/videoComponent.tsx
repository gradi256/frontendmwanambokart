
export const VideoComponent = () => {
  return (
 <div className="relative w-full lg:w-[40%] min-h-[40vh] lg:min-h-screen flex flex-col justify-end p-8 lg:p-12 overflow-hidden">
        <div className="absolute inset-0 z-0 w-full h-full">
          <video
            src="/6192903-hd_1920_1080_30fps.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/20 lg:bg-linear-to-r lg:from-transparent lg:to-background/10" />
          <div className="absolute inset-0 bg-black/40 lg:hidden" /> 
        </div>

        <div className="relative z-10 space-y-3 text-white lg:text-foreground">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight font-heading text-white lg:text-primary">
            L'art de notre terroir, à portée de clic.
          </h2>
          <p className="text-sm text-zinc-200 lg:text-muted-foreground max-w-md leading-relaxed">
            Découvrez des œuvres uniques, rencontrez des créateurs passionnés et plongez dans l'univers de Mwana Mbok'Art.
          </p>
        </div>
      </div>  )
}
