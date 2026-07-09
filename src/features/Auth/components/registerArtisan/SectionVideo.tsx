export const SectionVideo = () => {
  return (
    <div className="absolute inset-0 z-0 h-full w-full">
      <video
        src="/6722180-uhd_2160_3840_25fps.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 backdrop-brightness-75" />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
    </div>
  )
}
