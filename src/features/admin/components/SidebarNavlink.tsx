import type { SidebarNavlinkType } from "@/types/SidebarNavlinkType"
import { NavLink } from "react-router-dom"

export const SidebarNavlink = ({
  id,
  title,
  href,
  icon,
}: SidebarNavlinkType) => {
  return (
    <NavLink key={id} to={href} className={`flex items-center gap-2`}>
      {icon}
      <span>{title}</span>
    </NavLink>
  )
}
