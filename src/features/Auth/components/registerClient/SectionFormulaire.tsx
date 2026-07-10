import { type MouseEventHandler, type SubmitEventHandler } from "react"
import { FooterForm } from "./FooterForm"
import { HeaderForm } from "./HeaderForm"
import { NavButton } from "./NavButton"
import { StepContact } from "./StepContact"
import { StepIndicator } from "./StepIndicator"
import { StepPersonalInfo } from "./StepPersonalInfo"
import { StepSecurity } from "./StepSecurity"

interface PropsI {
  step: number
  prevStep: MouseEventHandler<HTMLButtonElement>
  onSubmit: SubmitEventHandler<HTMLFormElement>
  isPending: boolean
  formData: {
    name: string
    prenom: string
    sexe: string
    pays: string
    phone: string
    email: string
    password: string
  }
  setters: {
    setName: (val: string) => void
    setPrenom: (val: string) => void
    setSexe: (val: string) => void
    setPays: (val: string) => void
    setPhone: (val: string) => void
    setEmail: (val: string) => void
    setPassword: (val: string) => void
  }
}

export const SectionFormulaire = ({
  step,
  prevStep,
  onSubmit,
  isPending,
  formData,
  setters,
}: PropsI) => {
  return (
    <div className="flex w-full flex-col items-center overflow-y-auto bg-background px-6 py-12 lg:w-[60%] lg:px-20">
      <div className="w-full max-w-lg">
        <HeaderForm step={step} />
        <StepIndicator currentStep={step} />

        <form onSubmit={onSubmit} className="space-y-8">
          {/* Rendu conditionnel des étapes */}
          {step === 1 && (
            <StepPersonalInfo
              name={formData.name}
              setName={(e) => setters.setName(e.target.value)}
              prenom={formData.prenom}
              setPrenom={(e) => setters.setPrenom(e.target.value)}
              sexe={formData.sexe}
              setSexe={setters.setSexe}
            />
          )}
          {step === 2 && (
            <StepContact
              pays={formData.pays}
              setPays={setters.setPays}
              phone={formData.phone}
              setPhone={(e) => setters.setPhone(e.target.value)}
            />
          )}
          {step === 3 && (
            <StepSecurity
              email={formData.email}
              setEmail={(e) => setters.setEmail(e.target.value)}
              password={formData.password}
              setPassword={(e) => setters.setPassword(e.target.value)}
            />
          )}

          <NavButton
           step={step}
            prevStep={prevStep}
            isPending={isPending}
          />
        </form>

        <FooterForm />
      </div>
    </div>
  )
}
