import { Check } from "lucide-react"
interface StepIndicatorProps {
  currentStep: number
}

export const StepIndicator = ({ currentStep }: StepIndicatorProps) => {
  return (
    <div className="mb-8 flex w-full items-center justify-between">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all duration-300 ${
              currentStep >= i
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-muted-foreground"
            }`}
          >
            {currentStep > i ? (
              <Check className="h-4 w-4" />
            ) : (
              <span className="text-xs font-bold">{i}</span>
            )}
          </div>
          {i < 3 && (
            <div
              className={`mx-2 h-0.5 w-12 sm:w-24 ${currentStep > i ? "bg-primary" : "bg-border"}`}
            />
          )}
        </div>
      ))}
    </div>
  )
}
