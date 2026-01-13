import { useRoute } from "wouter";
import { useGame, useGames } from "@/hooks/use-games";
import { GameCard } from "@/components/GameCard";
import { Button } from "@/components/ui/button";
import { Share2, ThumbsUp, ThumbsDown, Maximize2, Flag } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function GamePage() {
  const [, params] = useRoute("/game/:id");
  const id = parseInt(params?.id || "0");
  const { data: game, isLoading } = useGame(id);
  const { data: relatedGames } = useGames({ category: game?.category });
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (isLoading) {
    return <div className="p-20 text-center text-primary animate-pulse font-display">LOADING SYSTEM...</div>;
  }

  if (!game) {
    return <div className="p-20 text-center text-red-500 font-display">GAME NOT FOUND_</div>;
  }

  const toggleFullscreen = () => {
    const elem = document.getElementById("game-container");
    if (!document.fullscreenElement) {
      elem?.requestFullscreen().then(() => setIsFullscreen(true));
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false));
    }
  };

  return (
    <div className="pb-20 max-w-7xl mx-auto">
      {/* Game Player Section */}
      <div 
        id="game-container"
        className={cn(
          "relative w-full bg-black rounded-2xl overflow-hidden shadow-2xl shadow-primary/5 border border-border/50 mb-8 transition-all duration-500",
          isFullscreen ? "fixed inset-0 z-50 rounded-none border-none" : "aspect-video"
        )}
      >
        <iframe 
          src={game.gameUrl} 
          title={game.title}
          className="w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        
        {/* Overlay controls when not interacting? Or simple toolbar below */}
      </div>

      {/* Game Info Bar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-display font-bold text-white mb-2">{game.title}</h1>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="bg-primary/10 text-primary px-2 py-0.5 rounded border border-primary/20 uppercase text-xs font-bold tracking-wider">
                  {game.category}
                </span>
                <span>•</span>
                <span>{((game.plays || 0) / 1000).toFixed(1)}k Plays</span>
                <span>•</span>
                <span>Released 2024</span>
              </div>
            </div>
            
            <div className="flex gap-2">
               <Button 
                 variant="outline" 
                 size="icon" 
                 onClick={toggleFullscreen}
                 className="rounded-full border-border hover:border-primary hover:text-primary transition-colors"
               >
                 <Maximize2 className="w-4 h-4" />
               </Button>
               <Button 
                 variant="outline" 
                 size="icon" 
                 className="rounded-full border-border hover:border-secondary hover:text-secondary transition-colors"
               >
                 <Share2 className="w-4 h-4" />
               </Button>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {game.description}
          </p>

          {/* Voting */}
          <div className="flex items-center gap-4 py-4 border-y border-border/50">
            <span className="text-sm font-bold text-white uppercase tracking-wide">Rate this game:</span>
            <div className="flex gap-2">
              <Button variant="ghost" className="h-8 text-green-400 hover:text-green-300 hover:bg-green-400/10 gap-2">
                 <ThumbsUp className="w-4 h-4" /> <span>Like</span>
              </Button>
              <Button variant="ghost" className="h-8 text-red-400 hover:text-red-300 hover:bg-red-400/10 gap-2">
                 <ThumbsDown className="w-4 h-4" /> <span>Dislike</span>
              </Button>
            </div>
            <div className="ml-auto">
              <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:text-white gap-2">
                <Flag className="w-3 h-3" /> Report Bug
              </Button>
            </div>
          </div>
        </div>

        {/* Sidebar Ads / Stats */}
        <div className="space-y-6">
           {/* Ad Placeholder */}
           <div className="w-full aspect-[4/3] bg-card border border-border/50 rounded-xl flex flex-col items-center justify-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=600&h=400&fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity" />
             {/* Cyberpunk city night image from Unsplash */}
             <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
             <span className="relative z-10 font-display font-bold text-white text-xl uppercase tracking-widest text-center px-4">
               Neon Cyber<br/>Gear V2
             </span>
             <Button size="sm" className="relative z-10 mt-4 bg-accent hover:bg-accent/80 text-white">
               Shop Now
             </Button>
             <div className="absolute top-2 right-2 text-[10px] text-muted-foreground bg-black/50 px-1 rounded">AD</div>
           </div>

           {/* High Scores (Fake) */}
           <div className="bg-card border border-border rounded-xl p-6">
             <h3 className="font-display font-bold text-white mb-4 flex items-center gap-2">
               <Trophy className="w-4 h-4 text-yellow-500" /> Leaderboard
             </h3>
             <div className="space-y-4">
               {[
                 { name: "CyberKing", score: 98500 },
                 { name: "NeonRider", score: 85200 },
                 { name: "Glitch_01", score: 76000 },
               ].map((score, i) => (
                 <div key={i} className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-3">
                      <span className={cn(
                        "w-5 h-5 flex items-center justify-center rounded font-bold text-xs",
                        i === 0 ? "bg-yellow-500/20 text-yellow-500" : 
                        i === 1 ? "bg-gray-400/20 text-gray-400" :
                        "bg-orange-700/20 text-orange-700"
                      )}>{i + 1}</span>
                      <span className="text-muted-foreground">{score.name}</span>
                    </div>
                    <span className="font-mono text-primary">{score.score.toLocaleString()}</span>
                 </div>
               ))}
             </div>
           </div>
        </div>
      </div>

      {/* Related Games */}
      <section>
        <h3 className="text-xl font-display font-bold text-white mb-6">Similar Games</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedGames?.filter(g => g.id !== game.id).slice(0, 4).map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>
    </div>
  );
}
