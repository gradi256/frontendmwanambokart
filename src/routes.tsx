import { createBrowserRouter } from "react-router-dom"
import { AdminLayout } from "./layouts/AdminLayout"
import { DashboardPage } from "./features/admin/pages/admin/DashboardPage"
import { ArtworktypePage } from "./features/admin/pages/admin/ArtworktypePage"
import { UserPage } from "./features/admin/pages/admin/UserPage"
import { AuthLayout } from "./layouts/AuthLayout"
import { HomeRegister } from "./features/Auth/pages/HomeRegister"
import { RegisterClient } from "./features/Auth/pages/RegisterCient"
import { RegisterArtist } from "./features/Auth/pages/RegisterArtist"
import { ConnexionUser } from "./features/Auth/pages/ConnexionUser"
import { ClientLayout } from "./features/client/ClientLayout"
import { ArtistLayout } from "./features/artist/ArtistLayout"
import { ClientGalleryPortal } from "./features/client/ClientGalleryPortal"

export const router = createBrowserRouter([
  {
    path: "/dashboard/client",
    element: <ClientLayout />,
    children: [{ index: true, element: <ClientGalleryPortal /> }],
  },
  {
    path: "/dashboard/artisan",
    element: <ArtistLayout />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/auth-register",
        element: <HomeRegister />,
      },
      {
        path: "/auth/auth-register/resgiter-client",
        element: <RegisterClient />,
      },
      {
        path: "/auth/auth-register/resgiter-artist",
        element: <RegisterArtist />,
      },
      {
        path: "/auth/auth-connexion/connexion-user",
        element: <ConnexionUser />,
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
