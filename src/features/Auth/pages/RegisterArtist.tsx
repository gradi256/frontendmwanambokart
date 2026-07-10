import { SectionVideo } from "../components/registerArtisan/SectionVideo"
import { HeaderForm } from "../components/registerArtisan/HeaderForm"
import { SectionFormulaire } from "../components/registerArtisan/SectionFormulaire"

export const RegisterArtist = () => {
  
  return (
    <div className="flex min-h-screen w-full flex-col overflow-hidden bg-background text-foreground lg:flex-row">
      <div className="relative flex min-h-[40vh] w-full flex-col justify-center overflow-hidden p-8 lg:min-h-screen lg:w-[40%] lg:p-12">
        <SectionVideo />
        <HeaderForm />
      </div>
      <SectionFormulaire />
    </div>
  )
}
