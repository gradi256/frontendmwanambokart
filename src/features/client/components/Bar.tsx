import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Grid, List, Search } from "lucide-react"

export const Bar = ({searchTerm, setSearchTerm}) => {
  return (
    <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
      <div className="relative w-full sm:max-w-md">
        <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-zinc-500" />
        <Input
          placeholder="Rechercher une œuvre, un style, un artisan..."
          className="h-11 w-full rounded-xl border-zinc-800 bg-zinc-900 pl-9 text-xs text-zinc-200 placeholder:text-zinc-500 focus-visible:ring-primary"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex w-full items-center justify-end gap-2 sm:w-auto">
        <Button
          variant="outline"
          size="icon"
          className="h-11 w-11 rounded-xl border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white"
        >
          <Grid className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-11 w-11 rounded-xl border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white"
        >
          <List className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
