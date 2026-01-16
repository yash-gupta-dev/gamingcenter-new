import Category from "../../components/category/Category";
import { categories, GAMES } from "../../constants/constants";
import AppWrapper from "../../HOC/AppWrapper";
import SectionWrapper from "../../HOC/SectionWrapper";
import FeaturedGame from "./components/FeaturedGame";

const Home = () => {

  return <AppWrapper>
    <div className="flex flex-col">
      {/* featured Game */}
      <FeaturedGame />

      <SectionWrapper games={GAMES} title="Continue Playing" showDetails={false} />

      {/* Categories */}
      <div className="flex gap-x-5 mb-7 overflow-x-auto">

        <Category title={"All Games"} selected />
        <Category title={"Most Engaging"} />
        {
          categories.map(c => <Category title={c.title} selected={false} key={c.title} />)
        }
      </div>

      {/* All games */}
      <SectionWrapper games={GAMES} />
    </div>
  </AppWrapper>
}

export default Home
