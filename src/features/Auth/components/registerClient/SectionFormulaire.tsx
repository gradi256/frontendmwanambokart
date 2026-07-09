import type { MouseEventHandler, SubmitEventHandler } from "react"
import { FooterForm } from "./FooterForm"
import { HeaderForm } from "./HeaderForm"
import { NavButton } from "./NavButton"
import { StepContact } from "./StepContact"
import { StepIndicator } from "./StepIndicator"
import { StepPersonalInfo } from "./StepPersonalInfo"
import { StepSecurity } from "./StepSecurity"

interface PropsI {
    step : number
    prevStep : MouseEventHandler<HTMLButtonElement>
    onSubmit : SubmitEventHandler<HTMLFormElement>
}

export const SectionFormulaire = ({step,prevStep,  onSubmit} : PropsI) => {
  return (
      <div className="flex w-full flex-col items-center overflow-y-auto bg-background px-6 py-12 lg:w-[60%] lg:px-20">
        <div className="w-full max-w-lg">
          <HeaderForm step={step} />
          <StepIndicator currentStep={step} />

          <form onSubmit={onSubmit} className="space-y-8">
            {/* Rendu conditionnel des étapes */}
            {step === 1 && <StepPersonalInfo />}
            {step === 2 && <StepContact />}
            {step === 3 && <StepSecurity />}

            <NavButton step={step} prevStep={prevStep} />
          </form>

          <FooterForm />
        </div>
      </div>  )
}
