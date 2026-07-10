import { User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { ChangeEvent, } from "react"

interface Props {
  name: string
  prenom: string
  sexe: string
  setName: (e: ChangeEvent<HTMLInputElement>) => void
  setPrenom: (e: ChangeEvent<HTMLInputElement>) => void
  setSexe: (value: string) => void
}

export const StepPersonalInfo = ({
  name,
  setName,
  prenom,
  setPrenom,
  sexe,
  setSexe,
}: Props) => {
  return (
    <div className="animate-in space-y-6 duration-500 fade-in slide-in-from-right-4">
      <div className="mb-2 flex items-center gap-2 font-semibold text-primary">
        <User className="h-5 w-5" />
        <span>Vos informations</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nom</Label>
          <Input
            id="name"
            placeholder="Nom de famille"
            value={name}
            onChange={setName}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="prenom">Prénom</Label>
          <Input
            id="prenom"
            placeholder="Prénom"
            value={prenom}
            onChange={setPrenom}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Sexe</Label>
        <Select value={sexe} onValueChange={setSexe}>
          <SelectTrigger>
            <SelectValue placeholder="Choisir" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="M">Homme</SelectItem>
            <SelectItem value="F">Femme</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
