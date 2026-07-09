import { createBrowserRouter } from "react-router-dom"
import { AdminLayout } from "./layouts/AdminLayout"
import { DashboardPage } from "./features/admin/pages/admin/DashboardPage"
import { ArtworktypePage } from "./features/admin/pages/admin/ArtworktypePage"
import { UserPage } from "./features/admin/pages/admin/UserPage"
import { AuthLayout } from "./layouts/AuthLayout"
import { HomeRegister } from "./features/Auth/pages/HomeRegister"

export const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <HomeRegister />,
      },
    ],
  },
  // ROUTES ADMIN
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "/admin/users",
        element: <UserPage />,
      },
      {
        path: "/admin/artworktype",
        element: <ArtworktypePage />,
      },
    ],
  },
])
