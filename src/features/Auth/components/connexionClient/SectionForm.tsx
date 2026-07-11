import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, ArrowRight, Eye, EyeOff, Lock, Mail, RefreshCw, ShieldCheck } from "lucide-react"

interface PropsI {
  view: string
  showPassword: boolean
  setView: (e: string) => void
  setShowPassword: (e: boolean) => void
}

export const SectionForm = ({
  view,
  showPassword,
  setShowPassword,
  setView,
}: PropsI) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
      {view === "login" && (
        <div className="animate-in space-y-5 duration-300 zoom-in-95 fade-in">
          <div className="space-y-2">
            <Label htmlFor="client-email">Adresse e-mail</Label>
            <div className="relative">
              <Mail className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="client-email"
                type="email"
                className="h-11 pl-10"
                placeholder="client@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="client-password">Mot de passe</Label>
              <button
                type="button"
                onClick={() => setView("forgot")}
                className="text-xs font-semibold text-primary underline-offset-4 hover:underline"
              >
                Oublié ?
              </button>
            </div>
            <div className="relative">
              <Lock className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="client-password"
                type={showPassword ? "text" : "password"}
                className="h-11 pr-10 pl-10"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            className="h-12 w-full text-sm font-bold shadow-lg shadow-primary/20 active:scale-[0.98]"
          >
            Se connecter <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}

      {view === "forgot" && (
        <div className="animate-in space-y-5 duration-300 fade-in slide-in-from-bottom-4">
          <div className="space-y-2">
            <Label htmlFor="forgot-email">Votre e-mail de récupération</Label>
            <div className="relative">
              <Mail className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="forgot-email"
                type="email"
                className="h-11 pl-10"
                placeholder="votre@email.com"
              />
            </div>
          </div>

          <Button
            type="button"
            onClick={() => setView("reset")}
            className="h-12 w-full text-sm font-bold"
          >
            Envoyer le lien <RefreshCw className="ml-2 h-4 w-4" />
          </Button>

          <button
            type="button"
            onClick={() => setView("login")}
            className="inline-flex w-full items-center justify-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Retour à la connexion
          </button>
        </div>
      )}

      {view === "reset" && (
        <div className="animate-in space-y-5 duration-300 fade-in slide-in-from-bottom-4">
          <div className="space-y-2">
            <Label htmlFor="new-password">Nouveau mot de passe</Label>
            <Input
              id="new-password"
              type="password"
              className="h-11"
              placeholder="••••••••"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirmer le mot de passe</Label>
            <Input
              id="confirm-password"
              type="password"
              className="h-11"
              placeholder="••••••••"
            />
          </div>

          <Button
            type="button"
            onClick={() => setView("login")}
            className="h-12 w-full text-sm font-bold"
          >
            Réinitialiser mon accès <ShieldCheck className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}
    </form>
  )
}
