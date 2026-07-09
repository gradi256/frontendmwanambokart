import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Spinner } from "@/components/ui/spinner"

export const ArtiworktypeSpinner = () => {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant={"icon"}>
          <Spinner />
        </EmptyMedia>
        <EmptyTitle>Traitement en cours...</EmptyTitle>
        <EmptyDescription>
          Veuillez patienter et ne pas rafraîchir la page.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}
