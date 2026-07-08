import { Header } from "@/features/admin/components/Header"
import { Sidebar } from "@/features/admin/components/Sidebar"
import { Outlet } from "react-router-dom"

export const AdminLayout = () => {
  return (
    <div>
      <Sidebar />
      <section className="flex w-full flex-col">
        <Header />
        <main>
          <Outlet />
        </main>
      </section>
    </div>
  )
}
