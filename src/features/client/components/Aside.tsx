import { SlidersHorizontal } from "lucide-react"

export const Aside = ({categories, selectedCategory}) => {
  return (
  <aside className="w-60 shrink-0 space-y-6 hidden lg:block">
          <div className="space-y-3">
            <h3 className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5" /> Filtrer par art
            </h3>
            <div className="flex flex-col gap-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === cat 
                      ? "bg-primary text-white font-bold shadow-md shadow-primary/20" 
                      : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </aside>  )
}
