import React, {
  useState,
  type MouseEventHandler,
  type SubmitEventHandler,
} from "react"
import { FooterForm } from "./FooterForm"
import { HeaderForm } from "./HeaderForm"
import { NavButton } from "./NavButton"
import { StepContact } from "./StepContact"
import { StepIndicator } from "./StepIndicator"
import { StepPersonalInfo } from "./StepPersonalInfo"
import { StepSecurity } from "./StepSecurity"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CreateCostumer } from "../../services/PostCustomer"

interface PropsI {
  step: number
  prevStep: MouseEventHandler<HTMLButtonElement>
  onSubmit: SubmitEventHandler<HTMLFormElement>
}

export const SectionFormulaire = ({ step, prevStep, onSubmit }: PropsI) => {
  const queryClient = useQueryClient()
  const [name, setName] = useState("")
  const [prenom, Setprenom] = useState("")
  const [sexe, setSexe] = useState("")

  const [pays, setPays] = useState("")
  const [phone, setPhone] = useState("")

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { mutate, isPending, isError } = useMutation({
    mutationFn: CreateCostumer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] })
    },
  })
  return (
    <div className="flex w-full flex-col items-center overflow-y-auto bg-background px-6 py-12 lg:w-[60%] lg:px-20">
      <div className="w-full max-w-lg">
        <HeaderForm step={step} />
        <StepIndicator currentStep={step} />

        <form onSubmit={onSubmit} className="space-y-8">
          {/* Rendu conditionnel des étapes */}
          {step === 1 && (
            <StepPersonalInfo
              name={name}
              setName={(e) => setName(e.target.value)}
              prenom={prenom}
              setPrenom={(e) => Setprenom(e.target.value)}
              sexe={sexe}
              setSexe={(e) => setSexe(e.target.select)}
            />
          )}
          {step === 2 && (
            <StepContact
              pays={pays}
              setPays={(e) => setPays(e.target.value)}
              phone={phone}
              setPhone={(e) => setPhone(e.target.value)}
            />
          )}
          {step === 3 && <StepSecurity />}

          <NavButton
            step={step}
            prevStep={prevStep}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        </form>

        <FooterForm />
      </div>
    </div>
  )
}
