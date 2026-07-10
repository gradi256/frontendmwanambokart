import React, { useState } from "react"
import { DescriptionForm } from "./DescriptionForm"
import { RenderStepIndicator } from "./RenderStepIndicator"
import { StepInfo } from "./StepInfo"
import { StepContact } from "./StepContact"
import { Showcase } from "./Showcase"
import { Validate } from "./Validate"
import { ActionForm } from "./ActionForm"
import { ToConnexion } from "./ToConnexion"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CreateArtist } from "../../services/PostArtist"
import { toast } from "sonner"

export const SectionFormulaire = () => {
  const [step, setStep] = useState(1)

  const queryClient = useQueryClient()

  const [name, setName] = useState("")
  const [prenom, setPrenom] = useState("")
  const [pseudo, setPseudo] = useState("")
  const [profile, setProfile] = useState("")
  const [biographie, setBiographie] = useState("")
  const [sexe, setSexe] = useState("")
  const [pays, setPays] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { mutate, isPending } = useMutation({
    mutationFn: CreateArtist,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] })
      toast.success(name + "Votre compte a été crée ")
    },
    onError: (err) => {
      toast.error(err.message)
    },
  })

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4))
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const artistData = {
      email,
      password,
      artist: {
        name,
        prenom,
        biographie,
        profile,
        pseudo,
        sexe,
        pays,
        phone,
      },
    }

    if (step < 4) {
      nextStep()
    } else {
      mutate(artistData)
    }
  }

  const formData = {
    name,
    prenom,
    profile,
    pseudo,
    biographie,
    pays,
    phone,
    sexe,
    email,
    password,
  }
  const setters = {
    setName,
    setPrenom,
    setProfile,
    setPseudo,
    setBiographie,
    setPays,
    setSexe,
    setEmail,
    setPhone,
    setPassword,
  }

  return (
    <div className="flex w-full flex-col items-center overflow-y-auto bg-background px-6 py-12 lg:w-[60%] lg:px-20">
      <div className="w-full max-w-lg">
        <DescriptionForm step={step} />
        <RenderStepIndicator step={step} />

        <form onSubmit={handleSubmit} className="space-y-8">
          {step === 1 && (
            <StepInfo
              name={formData.name}
              prenom={formData.prenom}
              pseudo={formData.pseudo}
              setName={(e) => setters.setName(e.target.value)}
              setPrenom={(e) => setters.setPrenom(e.target.value)}
              setPseudo={(e) => setters.setPseudo(e.target.value)}
            />
          )}
          {step === 2 && (
            <StepContact
              pays={formData.pays}
              sexe={formData.sexe}
              phone={formData.phone}
              setPays={setters.setPays}
              setSexe={setters.setSexe}
              setPhone={(e) => setters.setPhone(e.target.value)}
            />
          )}
          {step === 3 && (
            <Showcase
              img={formData.profile}
              biographie={formData.biographie}
              setImg={(e) => setters.setProfile(e.target.value)}
              setBiographie={(e) => setters.setBiographie(e.target.value)}
            />
          )}
          {step === 4 && (
            <Validate
              email={formData.email}
              password={formData.password}
              setEmail={(e) => setters.setEmail(e.target.value)}
              setPassword={(e) => setters.setPassword(e.target.value)}
            />
          )}

          <ActionForm step={step} nextStep={nextStep} prevStep={prevStep} isPending={isPending} />
        </form>

        <ToConnexion />
      </div>
    </div>
  )
}
