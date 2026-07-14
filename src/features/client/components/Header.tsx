import { Button } from "@/components/ui/button"
import { AlertDialogShow } from "@/features/admin/components/artworktype/AlertDialog"
import { Heart, ShoppingBag } from "lucide-react"

interface Logout {
  onLogout : () => void
}

export const Header = ({ onLogout } : Logout) => {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-zinc-800 bg-zinc-900/80 px-4 backdrop-blur-md sm:px-6 lg:px-8">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-sm font-black tracking-tighter text-white">
          <AlertDialogShow
            onConfirm={onLogout}
            nameBtn={localStorage.getItem("email")?.charAt(0).toUpperCase() || "U"}
            title="Souhaitez-vous vous deconnectier ? "
            desc="description......"
            act="Deconnexion"
          />
        </div>
        <span className="font-heading text-lg font-bold tracking-tight text-white">
          {localStorage.getItem('email')}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="relative rounded-xl text-zinc-400 hover:text-white"
        >
          <Heart className="h-5 w-5" />
        </Button>
        <Button className="h-10 gap-2 rounded-xl bg-zinc-100 px-4 text-xs font-bold text-zinc-950 shadow-md shadow-black/20 transition-all hover:bg-zinc-200">
          <ShoppingBag className="h-4 w-4" /> Panier d'art
        </Button>
      </div>
    </header>
  )
}
