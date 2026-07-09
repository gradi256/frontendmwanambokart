import { ArrowLeft } from "lucide-react"
import { NavLink } from "react-router-dom"

interface HeaderFormProps {
  step : number
}

export const HeaderForm = ({ step} : HeaderFormProps) => {
  return (
    <>
      <div className="mb-10 flex flex-col space-y-6">
        <NavLink
          to="/#"
          className="inline-flex w-fit items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> Retour
        </NavLink>

        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Créer votre compte Client
          </h1>
          <p className="mt-2 text-muted-foreground">
            Étape {step} sur 3 :{" "}
            {step === 1
              ? "Informations personnelles"
              : step === 2
                ? "Origine & Contact"
                : "Sécurité du compte"}
          </p>
        </div>
      </div>
    </>
  )
}
