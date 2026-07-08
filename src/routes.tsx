import { createBrowserRouter } from "react-router-dom"
import { AdminLayout } from "./layouts/AdminLayout"

export const router = createBrowserRouter([
  // ROUTES ADMIN
  {
    path: "/admin",
    element: <AdminLayout />,
  },
])
