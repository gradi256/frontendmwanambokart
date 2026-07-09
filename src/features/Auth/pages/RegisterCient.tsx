import { useState } from "react"
import { SectionVIdeo } from "../components/registerClient/SectionVIdeo"
import { SectionFormulaire } from "../components/registerClient/SectionFormulaire"

export const RegisterClient = () => {
  const [step, setStep] = useState(1)

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3))
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      nextStep()
    } else {
      // Logique finale d'inscription (Axios, Toasts...)
      console.log("Formulaire soumis !")
    }
  }

  return (
    <div className="flex min-h-screen w-full flex-col overflow-hidden bg-background text-foreground lg:flex-row">
      <SectionVIdeo />

      <SectionFormulaire
        step={step}
        prevStep={prevStep}
        onSubmit={handleSubmit}
      />
    </div>
  )
}
