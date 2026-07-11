import { useState } from "react"
import { FooterForm } from "../components/connexionClient/FooterForm"
import { SectionForm } from "../components/connexionClient/SectionForm"
import { SectionVideo } from "../components/connexionClient/SectionVideo"

export const ConnexionClient = () => {
  const [view, setView] = useState<"login" | "forgot" | "reset">("login")
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex min-h-screen w-full flex-col overflow-hidden bg-background text-foreground lg:flex-row">
      <SectionVideo />

      <div className="flex w-full flex-col items-center justify-center overflow-y-auto bg-background px-6 py-12 lg:w-[60%] lg:px-20">
        <div className="w-full max-w-md">
          <div className="mb-10 flex flex-col items-center space-y-4 lg:items-start">
            <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-border bg-muted/50 shadow-inner">
              <img
                src="/LOGO.png"
                alt="Mwana Mbok'Art"
                className="h-full w-full object-cover p-2"
                onError={(e) => {
                  e.currentTarget.style.display = "none"
                }}
              />
            </div>

            <div className="text-center lg:text-left">
              <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground">
                {view === "login" && "Espace Client"}
                {view === "forgot" && "Mot de passe oublié"}
                {view === "reset" && "Réinitialisation"}
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                {view === "login" &&
                  "Saisissez vos accès pour retrouver vos œuvres et paniers."}
                {view === "forgot" &&
                  "Entrez votre e-mail pour recevoir un lien de récupération."}
                {view === "reset" &&
                  "Créez un nouveau mot de passe sécurisé pour votre compte."}
              </p>
            </div>
          </div>

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
