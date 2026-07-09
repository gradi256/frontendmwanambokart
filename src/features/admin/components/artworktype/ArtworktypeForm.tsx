import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { PostArtworktype } from "../../services/PostArtworktype"
import type { ArtworktypeInput } from "../../types/ArtworktypeType"
import { toast } from "sonner"
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
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"

export const ArtworktypeForm = () => {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationFn: (newData: ArtworktypeInput) => PostArtworktype(newData),
    onSuccess: () => {
      toast.success("Type d'œuvre crée")
      setName("")
      setDescription("")
      setOpen(false)
      queryClient.invalidateQueries({ queryKey: ["artworktype"] })
    },
    onError: (err) => {
      toast.error(err.message)
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const artworktypeData: ArtworktypeInput = {
      name: name,
      description: description,
    }

    mutate(artworktypeData)
  }
  return (
    <div className="w-20">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>
            Ajouter un type d'œuvre <Plus />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex w-100 flex-col gap-4 rounded-md bg-card p-6"
          >
            <DialogHeader>
              <DialogTitle>Créer un nouveau type d'œuvre</DialogTitle>
              <DialogDescription>
                Ajoutez une nouvelle catégorie pour organiser et classer les
                œuvres d'art de la plateforme.
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
                  {isPending ? "En cours ..." : "Créer le type"}
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
