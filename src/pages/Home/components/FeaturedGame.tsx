import { Heart, Play } from 'lucide-react'
import { Link } from 'react-router-dom'

const FeaturedGame = () => {
    return (
        <section className="relative mb-10 h-96 lg:h-[400px] rounded-xl overflow-hidden group shadow-[0_0_8px_var(--border)]">
            <div className="absolute inset-0">
                <img
                    src={"https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    alt={"title"}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
            </div>

            <div className="absolute bottom-0 left-0 p-8 lg:p-12 max-w-2xl">
                <p className="mb-4 w-fit px-3 py-1 text-xxs text-white font-extrabold uppercase rounded-sm bg-custom-red">
                    Featured Game
                </p>
                <h1 className="text-3xl lg:text-4xl font-display font-black text-white mb-4 drop-shadow-xl uppercase tracking-tighter">
                    Battlefield 6
                </h1>
                <p className="text-muted-foreground text-xs mb-8 line-clamp-2 max-w-xl">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis dolorem accusamus illo autem et unde nulla dolor nam, expedita id sequi pariatur labore est nesciunt corporis aliquid alias illum ut.
                </p>
                <div className="flex gap-4">
                    <Link to={`/game/1`}>
                        <button className="flex items-center h-12 px-8 text-sm bg-secondary text-black font-bold uppercase transition-all duration-300 rounded-3xl">
                            <Play fill='' size={15} className='mr-1'/>
                            <span>Play Now</span>
                        </button>
                    </Link>
                    <button className="text-white px-3 bg-border rounded-full">
                        <Heart/>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default FeaturedGame
