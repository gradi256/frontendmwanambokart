import { createBrowserRouter } from "react-router-dom"
import { AdminLayout } from "./layouts/AdminLayout"
import { DashboardPage } from "./features/admin/pages/admin/DashboardPage"
import { ArtworktypePage } from "./features/admin/pages/admin/ArtworktypePage"

export const router = createBrowserRouter([
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
        path: "/admin/artworktype",
        element: <ArtworktypePage />,
      },
    ],
  },
])
