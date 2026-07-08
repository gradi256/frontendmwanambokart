import { Header } from "@/features/admin/Header"
import { Sidebar } from "@/features/admin/Sidebar"
import { Outlet } from "react-router-dom"

export const AdminLayout = () => {
  return (
    <div>
      <Sidebar />
      <section>
        <Header />
        <main>
          <Outlet />
        </main>
      </section>
    </div>
  )
}
