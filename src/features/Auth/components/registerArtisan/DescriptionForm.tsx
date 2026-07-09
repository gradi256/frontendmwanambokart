import { ArrowLeft } from "lucide-react"
import { NavLink } from "react-router-dom"

interface PropsI {
  step: number
}

export const DescriptionForm = ({ step }: PropsI) => {
  return (
    <div className="mb-10 flex flex-col space-y-6">
      <NavLink
        to="/auth/auth-register"
        className="inline-flex w-fit items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" /> Retour
      </NavLink>

      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Inscription Artisan
        </h1>
        <p className="mt-2 text-muted-foreground">
          Étape {step} sur 4 :{" "}
          {step === 1
            ? "Identité personnelle"
            : step === 2
              ? "Localisation & Contact"
              : step === 3
                ? "Votre univers artistique"
                : "Sécurité du compte"}
        </p>
      </div>
    </div>
  )
}
