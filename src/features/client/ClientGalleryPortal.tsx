import { useState } from "react"
import {
  Search,
  Heart,
  MessageSquare,
  Grid,
  List,
  Plus,
  Compass,
} from "lucide-react"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Aside } from "./components/Aside"
import { Bar } from "./components/Bar"
import { SectionPosts } from "./components/SectionPosts"

export const ClientGalleryPortal = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Tous")

  const categories = [
    "Tous",
    "Peinture",
    "Sculpture",
    "Photographie",
    "Tissage",
  ]

  const artworks = [
    {
      id: 1,
      title: "Le Penseur du Terroir",
      category: "Sculpture",
      artist: "Atelier Gradi",
      price: "450 $",
      description:
        "Une pièce sculptée à la main dans du bois précieux, reflétant la sagesse et les coutumes ancestrales locales.",
      image: "/art1.jpg",
      available: true,
    },
    {
      id: 2,
      title: "Reflets du Fleuve Congo",
      category: "Peinture",
      artist: "Atelier Gradi",
      price: "380 $",
      description:
        "Huile sur toile capturant les nuances chromatiques et les mouvements mystiques du fleuve au coucher du soleil.",
      image: "/art2.jpg",
      available: true,
    },
    {
      id: 3,
      title: "Lumières de Kinshasa",
      category: "Photographie",
      artist: "Studio kusanika",
      price: "150 $",
      description:
        "Cliché urbain en édition limitée imprimé sur papier d'art, saisissant l'énergie vibrante des nuits de la capitale.",
      image: "/art3.jpg",
      available: false,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-50 antialiased">
      <Header />
      <Hero />
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:px-8">
        <Aside categories={categories} selectedCategory={selectedCategory} />
        <div className="flex-1 space-y-8">
          <Bar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <SectionPosts artworks={artworks} />
        </div>
      </main>
    </div>
  )
}
