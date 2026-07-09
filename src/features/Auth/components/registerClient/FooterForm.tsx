import { NavLink } from "react-router-dom"

export const FooterForm = () => {
  return (
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Déjà membre ? <NavLink to="/auth/auth-connexion/client" className="text-primary font-semibold hover:underline underline-offset-4">Se connecter</NavLink>
            </p>
          </div>
  )
}
