import { User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const StepPersonalInfo = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="flex items-center gap-2 text-primary font-semibold mb-2">
        <User className="w-5 h-5" />
        <span>Vos informations</span>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nom</Label>
          <Input id="name" placeholder="Nom de famille" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="prenom">Prénom</Label>
          <Input id="prenom" placeholder="Prénom" />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Sexe</Label>
        <Select>
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
  );
};