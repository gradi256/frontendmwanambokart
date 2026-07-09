import { useMutation, useQueryClient } from "@tanstack/react-query"
import { UpdataArtworktype } from "../../services/artworktype/PutArtworktype"
import { toast } from "sonner"
import { useState } from "react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import type { ArtworktypeType } from "../../types/ArtworktypeType"

interface ArtworktypeUpdateFormProps {
  artworktype: ArtworktypeType
}

export const ArtworktypeUpdateForm = ({
  artworktype,
}: ArtworktypeUpdateFormProps) => {
  const queryClient = useQueryClient()

  const [open, setOpen] = useState(false)
  const [name, setName] = useState(artworktype.name)
  const [description, setDescription] = useState(artworktype.description)

  const { mutate, isPending } = useMutation({
    mutationFn: UpdataArtworktype,
    onSuccess: () => {
      toast.success("Profil mis à jour avec succès !")
      queryClient.invalidateQueries({
        queryKey: ["artworktype"],
      })
      setOpen(false)
    },
    onError: (error) => {
      console.error("Erreur lors de la modification :", error)
      toast.error("Erreur lors de la modification :")
    },
  })

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const formData = {
      id_type: artworktype.id_type,
      name: name,
      description: description,
      img: "",
    }

    mutate(formData)
  }
  return (
    <div className="w-20">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <span>Modifier</span>
        </DialogTrigger>
        <DialogContent>
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex w-100 flex-col gap-4 rounded-md bg-card p-6"
          >
            <DialogHeader>
              <DialogTitle>Modifier le type d'œuvre</DialogTitle>
              <DialogDescription>
                Mofifier la catégorie pour organiser et classer les œuvres d'art
                de la plateforme.
              </DialogDescription>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <Label>Nom du type</Label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nom du type"
                />
              </Field>
              <Field>
                <Label>Description du type</Label>
                <Input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description du type"
                />
              </Field>
            </FieldGroup>
            <DialogFooter>
              <DialogClose className="flex items-center gap-3">
                <Button variant={"outline"}>Annuler</Button>
                <Button type="submit">
                  {isPending ? "En cours ..." : "Modifier le type"}
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
