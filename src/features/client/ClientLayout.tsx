import { useAuthStore } from "@/stores/useAuthStore"

export const ClientLayout = () => {
  const authState = useAuthStore()
  console.log("État actuel de mon Store Zustand :", authState)
  return <div>ClientLayout</div>
}
