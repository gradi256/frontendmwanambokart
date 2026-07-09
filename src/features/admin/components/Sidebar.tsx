import { LayoutDashboard, LogOut, Palette } from "lucide-react"
import { SidebarNavlink } from "./SidebarNavlink"
import { Button } from "@/components/ui/button"

const NAV_ITEMS = [
  {
    id: 1,
    title: "Tableau de bord",
    href: "/admin",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    id: 2,
    title: "Utilisateurs",
    href: "/admin/users",
    icon: <Palette className="h-5 w-5" />,
  },
  {
    id: 2,
    title: "Type d'œuvre",
    href: "/admin/artworktype",
    icon: <Palette className="h-5 w-5" />,
  },
]

export const Sidebar = () => {
  return (
    <aside
      className={`fixed z-50 flex min-h-screen w-64 flex-col border-r border-sidebar-border bg-sidebar`}
    >
      {/* Nom de la plateforme */}
      <div
        className={`flex h-15 flex-col items-start border-b border-sidebar-border px-8 py-2`}
      >
        <h1 className="font-bold tracking-tight uppercase">mwana mbok'art</h1>
        <span className="text-sm text-muted-foreground uppercase">
          espace admin
        </span>
      </div>

      {/* menu de navigation dans admin */}
      <nav className="mt-5 flex flex-col gap-3 px-4">
        {NAV_ITEMS.map((item) => (
          <SidebarNavlink
            id={item.id}
            title={item.title}
            href={item.href}
            icon={item.icon}
          />
        ))}
      </nav>

      {/* bouton de dédconnexion */}
      <div className="fixed bottom-0 flex h-20 w-64 items-center justify-center border-t border-sidebar-border">
        <Button className="w-50" size={"lg"} variant={"destructive"}>
          <LogOut />
          Déconnexion
        </Button>
      </div>
    </aside>
  )
}
