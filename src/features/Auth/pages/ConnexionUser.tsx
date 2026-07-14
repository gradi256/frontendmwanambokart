import React, { useState } from "react"
import { SectionVideo } from "../components/connexionUser/SectionVideo"
import { HeadForm } from "../components/connexionUser/HeadForm"
import { SectionForm } from "../components/connexionUser/SectionForm"
import { FooterForm } from "../components/connexionUser/FooterForm"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Login } from "../services/Login"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "@/stores/useAuthStore"
import { ForgotPasswordService } from "../services/ForgotPassword"

interface userDataI {
  id: string
  role: string
  email: string
}

export const ConnexionUser = () => {
  const [view, setView] = useState<"login" | "forgot" | "reset">("login")
  const [showPassword, setShowPassword] = useState(false)

  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const login = useAuthStore((state) => state.login)

  const [email, setEmail] = useState("")
  const [password, setPasworrd] = useState("")

  const { mutate } = useMutation({
    mutationFn: Login,
    onSuccess: (servePaylod) => {
      queryClient.invalidateQueries({ queryKey: ["login"] })
      toast.success(servePaylod.message || "Connexion à votre compte réussi !")

      const userData: userDataI = {
        id: servePaylod.userId,
        role: servePaylod.role,
        email: servePaylod.email || email,
      }

      login(servePaylod.accessToken, userData)
      console.log(servePaylod)
      if (servePaylod.role === "CUSTOMER") {
        navigate("/dashboard/client")
        localStorage.setItem("email", servePaylod.email)
      } else if (servePaylod.role === "ARTIST") {
        localStorage.setItem("pseudo", servePaylod.pseudo)
        navigate("/dashboard/artisan")
      }
    },
    onError: (err: any) => {
      // Correction de la syntaxe ici (?.)
      const backendMessage = err.response?.data?.error

      toast.error(backendMessage || "Une erreur est survenue !")
      console.log(
        "Structure complète de l'erreur du backend :",
        err.response?.data
      )
    },
  })

  const { mutate: sendEmailMute, isPending: isForgotPending } = useMutation({
    mutationFn: ForgotPasswordService,
    onSuccess: (data) => {
      toast.success(data.message || "Lien de ŕecupération envoyé par email")
    },
    onError: (err: any) => {
      const backendMessage =
        err.response?.data?.error || "Une erreur est survenue"
      toast.error(backendMessage)
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    mutate({ email, password })
  }

  const handleForgotPasswordSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (!email) {
      toast.error("Veuillez renseignez votre email !")
      return
    }
    sendEmailMute({ email })
  }

  return (
    <div className="flex min-h-screen w-full flex-col overflow-hidden bg-background text-foreground lg:flex-row">
      <SectionVideo />
      <div className="flex w-full flex-col items-center justify-center overflow-y-auto bg-background px-6 py-12 lg:w-[60%] lg:px-20">
        <div className="w-full max-w-md">
          <HeadForm view={view} />

          <SectionForm
            view={view}
            setView={setView}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            onSubmit={handleSubmit}
            email={email}
            setEmail={(e) => setEmail(e.target.value)}
            password={password}
            setPassword={(e) => setPasworrd(e.target.value)}
            isPending={isForgotPending}
            sendEmail={handleForgotPasswordSubmit}
          />
          <FooterForm view={view} />
        </div>
      </div>
    </div>
  )
}
