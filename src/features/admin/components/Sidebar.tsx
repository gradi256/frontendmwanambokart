import { LayoutDashboard } from "lucide-react"
import { SidebarNavlink } from "./SidebarNavlink"

const NAV_ITEMS = [
  {
    id: 1,
    title: "Tableau de bord",
    href: "/admin",
    icon: <LayoutDashboard className="h-5 w-5" />,
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
      <nav className="flex flex-col gap-6 px-8 mt-5">
        {NAV_ITEMS.map((item) => (
          <SidebarNavlink
            id={item.id}
            title={item.title}
            href={item.href}
            icon={item.icon}
          />
        ))}
      </nav>
    </aside>
  )
}
