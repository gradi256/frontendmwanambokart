import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"

import { SectionVIdeo } from "../components/registerClient/SectionVIdeo"
import { SectionFormulaire } from "../components/registerClient/SectionFormulaire"
import { toast } from "sonner"
import { CreateCostumer } from "../services/PostCustomer"

export const RegisterClient = () => {
  const [step, setStep] = useState(1)

  const queryClient = useQueryClient()
  const [name, setName] = useState("")
  const [prenom, setPrenom] = useState("")
  const [sexe, setSexe] = useState("")

  const [pays, setPays] = useState("")
  const [phone, setPhone] = useState("")

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { mutate, isPending } = useMutation({
    mutationFn: CreateCostumer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] })
      toast.success("Votre compte a été crée")
    },
    onError: (err) => {
      toast.error(err.message)
    },
  })

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3))
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (step < 3) {
      nextStep()
    } else {
      mutate({
        email,
        password,
        customer: {
          name,
          prenom,
          sexe,
          pays,
          phone,
        },
      })
    }
  }

  return (
    <div className="flex min-h-screen w-full flex-col overflow-hidden bg-background text-foreground lg:flex-row">
      <SectionVIdeo />

      <SectionFormulaire
        step={step}
        prevStep={prevStep}
        onSubmit={handleSubmit}
        isPending={isPending}
        // Transmission des données et des fonctions de modification
        formData={{ name, prenom, sexe, pays, phone, email, password }}
        setters={{
          setName,
          setPrenom,
          setSexe,
          setPays,
          setPhone,
          setEmail,
          setPassword,
        }}
      />
    </div>
  )
}
