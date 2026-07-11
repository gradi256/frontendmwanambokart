import { NavLink } from "react-router-dom"

interface PropsI {
  view: string
}
export const FooterForm = ({ view }: PropsI) => {
  return (
    <div>
      {view === "login" && (
        <div className="mt-8 border-t border-border/50 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Pas encore de compte ?{" "}
            <NavLink
              to="/auth/auth-register/client"
              className="font-bold text-primary underline-offset-4 hover:underline"
            >
              Créer un compte Client
            </NavLink>
          </p>
        </div>
      )}
    </div>
  )
}
