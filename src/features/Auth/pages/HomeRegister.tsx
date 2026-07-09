import { NavLink } from "react-router-dom"
import { ChoiceComponent } from "../components/homeregister/ChoiceComponent"
import { VideoComponent } from "../components/homeregister/videoComponent"

export const HomeRegister = () => {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-hidden bg-background text-foreground lg:flex-row">
      <VideoComponent />

      <div className="flex w-full flex-col items-center justify-center bg-card px-4 py-12 sm:px-6 lg:w-[60%] lg:bg-background lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="flex flex-col items-center space-y-4 text-center lg:items-start lg:text-left">
            <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-border bg-muted/50 shadow-inner">
              <img
                src="/LOGO.png"
                alt="Mwana Mbok'Art"
                className="h-full w-full object-cover p-1.5"
              />
            </div>

            <div className="space-y-1.5">
              <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground">
                Créer un compte
              </h1>
              <p className="text-sm text-muted-foreground">
                Sélectionnez le type de compte pour commencer.
              </p>
            </div>
          </div>

          <ChoiceComponent />

          <div className="pt-2 text-center lg:text-left">
            <p className="text-xs text-muted-foreground">
              Vous avez déjà un compte ?{" "}
              <NavLink
                to="/#"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Se connecter
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
