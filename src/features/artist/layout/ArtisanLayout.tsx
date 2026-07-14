import { useState } from "react"
import {
  Layers,
  ShoppingBag,
  Bell,
  CreditCard,
  LogOut,
  Menu,
  X,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuthStore } from "@/stores/useAuthStore"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { AlertDialogShow } from "@/features/admin/components/artworktype/AlertDialog"

interface LayoutProps {
  children: React.ReactNode
  activePage: string
  setActivePage: (page: string) => void
}

export const ArtisanLayout = ({
  children,
  activePage,
  setActivePage,
}: LayoutProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const logout = useAuthStore((state) => state.logout)
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    localStorage.removeItem('pseudo')
    toast.success("Vous avez été deconnecté avec succès !")
    navigate("/auth/auth-connexion/connexion-user")
  }

  const navigation = [
    {
      id: "dashboard",
      name: "Tableau de bord",
      icon: <Layers className="h-4 w-4" />,
    },
    {
      id: "catalog",
      name: "Mes Créations",
      icon: <ShoppingBag className="h-4 w-4" />,
    },
    {
      id: "orders",
      name: "Commandes WhatsApp",
      icon: <Bell className="h-4 w-4" />,
    },
    {
      id: "billing",
      name: "Mon Abonnement",
      icon: <CreditCard className="h-4 w-4" />,
    },
    {
      id: "settings",
      name: "Paramètres",
      icon: <Settings className="h-4 w-4" />,
    },
  ]

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 transform flex-col justify-between border-r border-border bg-card transition-all duration-200 lg:transform-none lg:opacity-100 ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/LOGO.png"
                alt="kusanika"
                className="h-8 w-8 rounded-xl object-cover"
              />
              <span className="font-heading text-lg font-bold tracking-tight">
                {localStorage.getItem("pseudo")}
              </span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <nav className="mt-8 space-y-1">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActivePage(item.id)
                  setIsOpen(false)
                }}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                  activePage === item.id
                    ? "bg-primary text-primary-foreground shadow-sm shadow-primary/10"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {item.icon}
                {item.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="space-y-1 border-t border-border/60 p-4">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 rounded-xl text-muted-foreground hover:text-destructive"
          >
            <LogOut className="h-4 w-4" />
            <AlertDialogShow
              onConfirm={() => handleLogout()}
              nameBtn="Déconnexion"
              title="Souhaitez-vous vous deconnectier ? "
              desc="description......"
              act="Deconnexion"
            />
          </Button>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col lg:pl-64">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border/60 bg-card px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="ml-auto flex items-center gap-4">
            <div className="hidden text-right sm:block">
              <p className="text-xs font-semibold">
                Atelier {localStorage.getItem("pseudo")}
              </p>
              <p className="text-[10px] text-muted-foreground">
                Artisan Certifié
              </p>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-sm font-bold text-primary">
              GK
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  )
}
