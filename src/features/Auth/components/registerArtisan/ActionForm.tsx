import { Button } from "@/components/ui/button"
import { ArrowRight, Loader2 } from "lucide-react"
import type { MouseEventHandler } from "react"

interface PropsI {
  step: number
  nextStep: MouseEventHandler<HTMLButtonElement>
  prevStep: MouseEventHandler<HTMLButtonElement>
  isPending: boolean
}

export const ActionForm = ({ step, nextStep, prevStep, isPending }: PropsI) => {
  return (
    <div className="flex gap-4 pt-6">
      {step > 1 && (
        <Button
          type="button"
          variant="outline"
          onClick={prevStep}
          className="h-10 flex-1"
          disabled={isPending}
        >
          Précédent
        </Button>
      )}
      {step < 4 ? (
        <Button type="button" onClick={nextStep} className="h-10 flex-1">
          Continuer <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      ) : (
        <Button
          type="submit"
          className="h-10 flex-1 shadow-lg shadow-primary/20"
          disabled={isPending}
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Création...
            </>
          ) : (
            "Finaliser l'inscription"
          )}
        </Button>
      )}
    </div>
  )
}
