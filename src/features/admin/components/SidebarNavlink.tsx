import type { SidebarNavlinkType } from "@/types/SidebarNavlinkType"
import { NavLink } from "react-router-dom"

export const SidebarNavlink = ({
  id,
  title,
  href,
  icon,
}: SidebarNavlinkType) => {
  return (
    <NavLink
      key={id}
      to={href}
      className={({ isActive }) =>
        `flex items-center gap-5 rounded-md px-3 py-2 text-sm ${isActive ? "bg-sidebar-primary text-sidebar-primary-foreground" : "text-sidebar-accent-foreground hover:bg-sidebar-accent"}`
      }
    >
      {icon}
      <span>{title}</span>
    </NavLink>
  )
}
