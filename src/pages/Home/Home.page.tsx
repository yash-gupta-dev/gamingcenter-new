import Category from "../../components/category/Category";
import { categories } from "../../constants/constants";
import AppWrapper from "../../HOC/AppWrapper";
import SectionWrapper from "../../HOC/SectionWrapper";
import FeaturedGame from "./components/FeaturedGame";

const Home = () => {
  const games = [
    {
      title: 'God Of War',
      rating: 4.5,
      plays: '2.5M'
    },
    {
      title: 'Ghost Of Tshushima',
      rating: 4.5,
      plays: '2.5M'
    },
    {
      title: 'Red Dead Redemption',
      rating: 4.5,
      plays: '2.5M'
    },
    {
      title: 'Far Cry',
      rating: 4.5,
      plays: '2.5M'
    },
    {
      title: 'Call Of Duty',
      rating: 4.5,
      plays: '2.5M'
    },
    {
      title: 'Battlefield 6',
      rating: 4.5,
      plays: '2.5M'
    },
    {
      title: 'God Hand',
      rating: 4.5,
      plays: '2.5M'
    },
    {
      title: 'Forza',
      rating: 4.5,
      plays: '2.5M'
    },
    {
      title: 'Tekken',
      rating: 4.5,
      plays: '2.5M'
    },
    {
      title: 'Ghost of Tsushima',
      rating: 4.5,
      plays: '2.5M'
    }
  ];

  return <AppWrapper>
    <div className="flex flex-col">
      {/* featured Game */}
      <FeaturedGame />

      {/* Continue Playng */}
      <SectionWrapper games={games} title="Continue Playing" showDetails={false} />

      {/* Categories */}
      <div className="flex gap-x-5 mb-7">

        <Category title={"All Games"} selected />
        {
          categories.map(c => <Category title={c.title} selected={false} key={c.title} />)
        }
      </div>

      {/* All games */}
      <SectionWrapper games={games} />
    </div>
  </AppWrapper>
}

export default Home
