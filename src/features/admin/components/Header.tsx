import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Bell, Menu } from "lucide-react"

export const Header = () => {
  return (
    <header className="ml-64 flex h-15 bg-card px-8 items-center justify-between">
      {/* Partie gauche de l'en-tête */}
      <div className="flex items-center">
        <Button variant={"ghost"}>
          <Menu />
        </Button>
        <h1>Tableau de bord / Administration</h1>
      </div>

      {/* Partie droite de l'en-tête */}
      <div className="flex items-center gap-3">
        <Button variant={"ghost"}>
          <Bell className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-4 border-l border-sidebar-border pl-5">
          <div className="flex flex-col items-end">
            <span className="text-sm tracking-tight">admin</span>
            <span className="text-xs text-muted-foreground">gradinawej8@gmail.com</span>
          </div>
          <Avatar>
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/218519586?v=4&size=64"
              alt="photo de profil de l'admin"
            />
            <AvatarFallback>GN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
