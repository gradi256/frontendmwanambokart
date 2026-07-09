import { useState } from "react"
import { DescriptionForm } from "./DescriptionForm"
import { RenderStepIndicator } from "./RenderStepIndicator"
import { StepInfo } from "./StepInfo"
import { StepContact } from "./StepContact"
import { Showcase } from "./Showcase"
import { Validate } from "./Validate"
import { ActionForm } from "./ActionForm"
import { ToConnexion } from "./ToConnexion"

export const SectionFormulaire = () => {
  const [step, setStep] = useState(1)

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4))
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1))

  return (
    <div className="flex w-full flex-col items-center overflow-y-auto bg-background px-6 py-12 lg:w-[60%] lg:px-20">
      <div className="w-full max-w-lg">
        <DescriptionForm step={step} />
        <RenderStepIndicator step={step} />

        <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
          {step === 1 && <StepInfo />}
          {step === 2 && <StepContact />}
          {step === 3 && <Showcase />}
          {step === 4 && <Validate />}

          <ActionForm step={step} nextStep={nextStep} prevStep={prevStep} />
        </form>

        <ToConnexion />
      </div>
    </div>
  )
}
