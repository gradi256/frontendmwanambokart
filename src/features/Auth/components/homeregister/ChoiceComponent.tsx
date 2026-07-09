import { ArrowRight, Paintbrush, ShoppingBag } from "lucide-react"
import { NavLink } from "react-router-dom"

export const ChoiceComponent = () => {
  return (
 <div className="space-y-4">
            
            <NavLink
              to="/auth/auth-register/artisan"
              className="group relative flex items-start gap-4 p-5 rounded-xl border border-border bg-card lg:bg-card transition-all duration-200 hover:border-primary hover:bg-muted/10 focus:outline-none focus:ring-2 focus:ring-ring shadow-sm"
            >
              <div className="flex p-3 rounded-lg bg-primary text-primary-foreground group-hover:scale-105 transition-transform duration-200">
                <Paintbrush className="w-5 h-5" />
              </div>
              
              <div className="flex-1 pr-6">
                <h3 className="font-semibold text-base text-foreground group-hover:text-primary transition-colors duration-200">
                  Devenir Artisan
                </h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Créez votre vitrine, gérez vos abonnements et exposez vos œuvres d'art au monde entier.
                </p>
              </div>
              
              <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
            </NavLink>

            <NavLink
              to="/auth/auth-register/resgiter-client"
              className="group relative flex items-start gap-4 p-5 rounded-xl border border-border bg-card lg:bg-card transition-all duration-200 hover:border-accent hover:bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-ring shadow-sm"
            >
              <div className="flex p-3 rounded-lg bg-accent text-accent-foreground group-hover:scale-105 transition-transform duration-200">
                <ShoppingBag className="w-5 h-5" />
              </div>
              
              <div className="flex-1 pr-6">
                <h3 className="font-semibold text-base text-foreground group-hover:text-accent-foreground transition-colors duration-200">
                  Créer un compte Client
                </h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Explorez la galerie d'art, suivez vos artistes préférés et passez vos commandes en toute sécurité.
                </p>
              </div>
              
              <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-hover:text-accent-foreground group-hover:translate-x-1 transition-all duration-200" />
            </NavLink>

          </div>  )
}
