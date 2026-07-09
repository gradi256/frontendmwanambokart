import { NavLink } from "react-router-dom"

export const ToConnexion = () => {
  return (
    <div className="mt-8 text-center">
      <p className="text-sm text-muted-foreground">
        Déjà inscrit ?{" "}
        <NavLink
          to="/auth/auth-connexion/artisan"
          className="font-semibold text-primary underline-offset-4 hover:underline"
        >
          Se connecter
        </NavLink>
      </p>
    </div>
  )
}
