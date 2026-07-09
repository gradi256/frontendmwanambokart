import { MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  pays : string
  phone : string
}

export const StepContact = ({pays, setPays, phone, setPhone} : Props) => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="flex items-center gap-2 text-primary font-semibold mb-2">
        <MapPin className="w-5 h-5" />
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
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input id="phone" type="tel" className="pl-10" placeholder="+243842639657" value={phone} onChange={setPhone} />
        </div>
      </div>
    </div>
  );
};