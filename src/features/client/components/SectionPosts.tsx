import { Compass, Heart, MessageSquare, Plus } from "lucide-react"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";


export const SectionPosts = ({artworks}) => {
  return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artworks.map((art) => (
              <Card key={art.id} className="group overflow-hidden border-zinc-800/80 bg-zinc-900 shadow-xl flex flex-col justify-between rounded-2xl transition-all hover:translate-y-[-4px]">
                <div className="relative aspect-square w-full overflow-hidden bg-zinc-950 border-b border-zinc-800/50">
                  <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-xs text-zinc-500">
                    Image de l'œuvre
                  </div>
                  <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-zinc-950/60 backdrop-blur-md flex items-center justify-center text-zinc-300 hover:text-destructive transition-colors border border-zinc-800/40">
                    <Heart className="w-4 h-4" />
                  </button>
                  {!art.available && (
                    <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-xs flex items-center justify-center">
                      <Badge variant="destructive" className="text-[10px] uppercase font-black tracking-widest px-3 py-1 bg-red-950 text-red-400 border border-red-800/30 rounded-md">
                        Indisponible
                      </Badge>
                    </div>
                  )}
                </div>

                <CardContent className="p-5 space-y-3 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-black tracking-widest text-primary uppercase bg-primary/10 px-2 py-0.5 rounded-md border border-primary/20">{art.category}</span>
                    <span className="text-xs text-zinc-400 font-medium flex items-center gap-1">
                      <Compass className="w-3 h-3 text-zinc-500" /> {art.artist}
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <h2 className="text-base font-bold tracking-tight text-white line-clamp-1">
                      {art.title}
                    </h2>
                    <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 font-normal">
                      {art.description}
                    </p>
                  </div>
                </CardContent>

                <CardFooter className="p-5 pt-0 flex flex-col gap-3">
                  <div className="flex items-center justify-between w-full border-t border-zinc-800/60 pt-4">
                    <span className="text-xs text-zinc-500 font-medium">Prix d'acquisition</span>
                    <span className="text-lg font-black text-white tracking-tight">{art.price}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 w-full pt-1">
                    <Button 
                      disabled={!art.available}
                      variant="outline" 
                      className="h-10 text-xs font-bold border-zinc-700 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-xl gap-1.5 transition-all disabled:opacity-40"
                    >
                      <Plus className="w-3.5 h-3.5" /> Au panier
                    </Button>
                    <Button 
                      disabled={!art.available}
                      className="h-10 text-xs font-bold bg-primary hover:bg-primary-hover text-white gap-1.5 shadow-md shadow-primary/10 rounded-xl transition-all disabled:opacity-40"
                    >
                      <MessageSquare className="w-3.5 h-3.5" /> Commander
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
  )
}
