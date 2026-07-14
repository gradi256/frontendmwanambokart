import axios from "axios"
import { toast } from "sonner"
import { create } from "zustand"

interface User {
  id: string
  email: string
  role: "CUSTOMER" | "ARTIST"
}

interface AuthState {
  accessToken: string | null
  user: User | null
  login: (token: string, userData: User) => void
  logout: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  user: null,

  // Action appelée quand le login réussit
  login: (token, userData) =>
    set({
      accessToken: token,
      user: userData,
    }),

  // Action pour vider le store au logout
  logout: async () => {
    await axios.post(
      "https://mwanambokart-officiel-1.onrender.com/api/auth/logout",
      {},
      { withCredentials: true }
    )
    set({ accessToken: null, user: null })
  },
}))
