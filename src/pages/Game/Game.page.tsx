import { Maximize } from "lucide-react";
import Ad from "../../components/ads/Ad";
import AppWrapper from "../../HOC/AppWrapper"
import SectionWrapper from "../../HOC/SectionWrapper";
import { useRef } from "react";
import { GAMES } from "../../constants/constants";

const Game = () => {
  const gameRef = useRef<HTMLIFrameElement | null>(null)

  const onMaximize = () => {
    gameRef.current?.requestFullscreen()
  }

  return (
    <AppWrapper>
      <div className="flex flex-col">
        <Ad />

        <div className="mb-5">
          <iframe
            src={"https://dochase.marketjs-cloud2.com/en/dochase-stickman-running/index.html"}
            title={"title"}
            className="w-full h-96 lg:h-[400px] border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            ref={gameRef}
          />

          <div className="flex items-center justify-end p-3 ">
            <button onClick={onMaximize}>
              <Maximize />
            </button>
          </div>
        </div>


        {/* All games */}
        <SectionWrapper games={GAMES} title="Similar Games" />
      </div>
    </AppWrapper>
  )
}

export default Game
