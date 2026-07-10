import { useState, type ChangeEvent } from "react"
import { Lock, Eye, EyeOff } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface PropsI {
  email: string
  password: string
  setEmail: (e: ChangeEvent<HTMLInputElement>) => void
  setPassword: (e: ChangeEvent<HTMLInputElement>) => void
}

export const StepSecurity = ({
  email,
  setEmail,
  setPassword,
  password,
}: PropsI) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="animate-in space-y-6 duration-500 fade-in slide-in-from-right-4">
      <div className="mb-2 flex items-center gap-2 font-semibold text-primary">
        <Lock className="h-5 w-5" />
        <span>Accès sécurisé</span>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Adresse e-mail</Label>
        <Input
          id="email"
          type="email"
          placeholder="customer@example.com"
          value={email}
          onChange={setEmail}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Mot de passe</Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            className="pr-10"
            placeholder="••••••••"
            value={password}
            onChange={setPassword}
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
    </div>
  )
}
