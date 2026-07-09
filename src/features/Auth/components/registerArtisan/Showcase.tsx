import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Camera, Upload } from "lucide-react"

export const Showcase = () => {
  return (
    <div className="animate-in space-y-6 duration-500 fade-in slide-in-from-right-4">
      <div className="mb-2 flex items-center gap-2 font-semibold text-primary">
        <Camera className="h-5 w-5" />
        <span>Votre Vitrine</span>
      </div>
      <div className="flex items-center gap-6 rounded-xl border bg-muted/20 p-4">
        <div className="group relative">
          <div className="flex h-20 w-20 cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-border bg-background transition-colors group-hover:border-primary">
            <Upload className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
            <input
              type="file"
              className="absolute inset-0 cursor-pointer opacity-0"
            />
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium">Photo de profil</p>
          <p className="text-xs text-muted-foreground">
            Format carré recommandé. Optionnel.
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="bio">Biographie</Label>
          <span className="text-[10px] tracking-wider text-muted-foreground uppercase">
            Optionnel
          </span>
        </div>
        <Textarea
          id="bio"
          rows={4}
          placeholder="Décrivez votre passion artistique en quelques mots..."
        />
      </div>
    </div>
  )
}
