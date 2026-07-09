import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User } from "lucide-react"

export const StepInfo = () => {
  return (
    <div className="animate-in space-y-6 duration-500 fade-in slide-in-from-right-4">
      <div className="mb-2 flex items-center gap-2 font-semibold text-primary">
        <User className="h-5 w-5" />
        <span>Qui êtes-vous ?</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="lastname">Nom</Label>
          <Input id="lastname" placeholder="Kasanji" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="firstname">Prénom</Label>
          <Input id="firstname" placeholder="Dieudonné" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="pseudonym">Pseudonyme d'artiste</Label>
          <span className="text-[10px] tracking-wider text-muted-foreground uppercase">
            Optionnel
          </span>
        </div>
        <Input id="pseudonym" placeholder="El_Sculpto" />
      </div>
    </div>
  )
}
