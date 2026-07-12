import { useState } from "react"
import { SectionVideo } from "../components/connexionUser/SectionVideo"
import { HeadForm } from "../components/connexionUser/HeadForm"
import { SectionForm } from "../components/connexionUser/SectionForm"
import { FooterForm } from "../components/connexionUser/FooterForm"

export const ConnexionUser = () => {
  const [view, setView] = useState<"login" | "forgot" | "reset">("login")
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex min-h-screen w-full flex-col overflow-hidden bg-background text-foreground lg:flex-row">
      <SectionVideo />
      <div className="flex w-full flex-col items-center justify-center overflow-y-auto bg-background px-6 py-12 lg:w-[60%] lg:px-20">
        <div className="w-full max-w-md">
          <HeadForm view={view} />

          <SectionForm
            view={view}
            setView={setView}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
          <FooterForm view={view} />
        </div>
      </div>
    </div>
  )
}
