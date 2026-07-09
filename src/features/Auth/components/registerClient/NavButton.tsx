import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import type { MouseEventHandler } from "react"

interface HeaderFormProps {
  step: number
  prevStep: MouseEventHandler<HTMLButtonElement>
}

export const NavButton = ({ step, prevStep }: HeaderFormProps) => {
  return (
    <div className="flex gap-4 pt-6">
      {step > 1 && (
        <Button
          type="button"
          variant="outline"
          onClick={prevStep}
          className="h-10 flex-1"
        >
          Précédent
        </Button>
      )}
      {step < 3 ? (
        <Button type="submit" className="h-10 flex-1">
          Continuer <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      ) : (
        <Button
          type="submit"
          className="h-10 flex-1 shadow-lg shadow-primary/20"
        >
          Créer mon compte
        </Button>
      )}
    </div>
  )
}
