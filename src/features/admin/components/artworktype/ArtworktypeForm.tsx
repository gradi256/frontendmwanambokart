import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { PostArtworktype } from "../../services/PostArtworktype"
import type { ArtworktypeInput } from "../../types/ArtworktypeType"
import { toast } from "sonner"

export const ArtworktypeForm = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  const { mutate, isPending } = useMutation({
    mutationFn: (newData: ArtworktypeInput) => PostArtworktype(newData),
    onSuccess: () => {
      toast.success("Type d'œuvre crée")
      setName("")
      setDescription("")
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
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-100 flex-col gap-4 rounded-md bg-card p-6"
    >
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nom du type"
      />
      <Input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description du type"
      />
      <Button type="submit">
        {isPending ? "En cours ..." : "Créer le type"}
      </Button>
    </form>
  )
}
