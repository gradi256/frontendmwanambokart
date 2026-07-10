import { Label } from "@/components/ui/label"
import { MapPin } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import type { ChangeEvent } from "react"

interface PropsI {
  pays: string
  sexe: string
  phone: string
  setPays: (value: string) => void
  setSexe: (value: string) => void
  setPhone: (e: ChangeEvent<HTMLInputElement>) => void
}

export const StepContact = ({
  pays,
  sexe,
  phone,
  setPays,
  setSexe,
  setPhone,
}: PropsI) => {
  return (
    <div className="animate-in space-y-6 duration-500 fade-in slide-in-from-right-4">
      <div className="mb-2 flex items-center gap-2 font-semibold text-primary">
        <MapPin className="h-5 w-5" />
        <span>Où vous situons-nous ?</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Pays</Label>
          <Select value={pays} onValueChange={setPays}>
            <SelectTrigger>
              <SelectValue placeholder="Choisir" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="CD">RD Congo</SelectItem>
              <SelectItem value="CG">Congo Brazza</SelectItem>
            </SelectContent>
          </Select>
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
      <div className="space-y-2">
        <Label htmlFor="whatsapp">Numéro WhatsApp</Label>
        <Input
          id="whatsapp"
          type="tel"
          placeholder="+243 890 000 000"
          value={phone}
          onChange={setPhone}
        />
      </div>
    </div>
  )
}
