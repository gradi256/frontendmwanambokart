import { MapPin, Phone } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { ChangeEvent } from "react"

interface Props {
  pays: string
  phone: string
  setPays: (value: string) => void
  setPhone: (e: ChangeEvent<HTMLInputElement>) => void
}

export const StepContact = ({ pays, setPays, phone, setPhone }: Props) => {
  return (
    <div className="animate-in space-y-6 duration-500 fade-in slide-in-from-right-4">
      <div className="mb-2 flex items-center gap-2 font-semibold text-primary">
        <MapPin className="h-5 w-5" />
        <span>Où vous situez-vous ?</span>
      </div>

      <div className="space-y-2">
        <Label>Pays de résidence</Label>
        <Select value={pays} onValueChange={setPays}>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionner un pays" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="RDC">RD Congo</SelectItem>
            <SelectItem value="Congo Brazzaville">Congo Brazzaville</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Numéro de téléphone</Label>
        <div className="relative">
          <Phone className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="phone"
            type="tel"
            className="pl-10"
            placeholder="+243842639657"
            value={phone}
            onChange={setPhone}
          />
        </div>
      </div>
    </div>
  )
}
