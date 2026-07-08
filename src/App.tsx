import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "sonner"

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-center" richColors />
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
