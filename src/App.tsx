import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "sonner"
import { useAuthStore } from "./stores/useAuthStore"
import { useEffect, useState } from "react"
import axios from "axios"

const queryClient = new QueryClient()

const App = () => {
  const { accessToken, login, logout } = useAuthStore()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkRefresh = async () => {
      try {
        const response = await axios.post(
          "https://mwanambokart-officiel-1.onrender.com/api/auth/refresh-token",
          {},
          { withCredentials: true }
        )
        const userData = {
          id : response.data.userId,
          role : response.data.role
        }
        login(response.data.accessToken, userData)
      } catch (err: any) {
        logout()
      } finally {
        setLoading(false)
      }
    }

    if (!accessToken) {
      checkRefresh()
    } else {
      setLoading(false)
    }
  }, [accessToken, login, logout])
  if (loading) {
    return <div>Chargement de votre session...</div>
  }
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-center" richColors />
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
