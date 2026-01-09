import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import ExtensionIcon from '@mui/icons-material/Extension';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PsychologyIcon from '@mui/icons-material/Psychology';

import Header from "../../components/header/Header"
import Ad from "../../components/ads/Ad"
import SectionTitle from "../../components/SectionTitle/SectionTitle"
import Category from "../../components/category/Category";
import Footer from "../../components/footer/Footer";
import Grid from "@mui/material/Grid";
import GameCard from "../../components/gameCard/GameCard";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  const categories = [
    {
      Icon: <ElectricBoltIcon className='text-[var(--red)] text-4xl' />,
      title: 'Action'
    },
    {
      Icon: <ExtensionIcon className='text-[var(--red)] text-4xl' />,
      title: 'Puzzle'
    },
    {
      Icon: <DriveEtaIcon className='text-[var(--red)] text-4xl' />,
      title: 'Racing'
    },
    {
      Icon: <EmojiEventsIcon className='text-[var(--red)] text-4xl' />,
      title: 'Sports'
    },
    {
      Icon: <SportsEsportsIcon className='text-[var(--red)] text-4xl' />,
      title: 'Arcade'
    },
    {
      Icon: <PsychologyIcon className='text-[var(--red)] text-4xl' />,
      title: 'Strategy'
    }
  ];

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
      title: 'God Of War',
      rating: 4.5,
      plays: '2.5M'
    },
    {
      title: 'Ghost Of Tshushima',
      rating: 4.5,
      plays: '2.5M'
    },
  ];

  return <>
    <Sidebar />
  </>

  return (
    <>
      <Header />

      Top advertisement
      <Box component={'div'} className="flex flex-1 py-5 px-12 bg-secondary">
        <Ad />
      </Box>

      {/* main Section */}
      <Box
        component={'section'}
        className="flex flex-col gap-y-8 flex-1 py-5 px-20"
      >

        {/* Hero */}
        <Box
          component={'div'}
          style={{ backgroundImage: 'linear-gradient(to right, var(--red), var(--red-dark))' }}
          className="flex flex-col flex-1 mt-4 p-8 rounded-lg"
        >
          <Typography
            variant="h1"
            noWrap
            className='text-white text-2xl font-bold text-secondary-light'
            sx={{
              textDecoration: 'none',
            }}
          >
            Play Thousands of Free Games
          </Typography>

          <Typography
            variant="caption"
            noWrap
            className='mt-2 text-white text-sm font-thin'
            sx={{
              textDecoration: 'none',
            }}
          >
            No downloads, no registration, just fun
          </Typography>

          <Button className="mt-3 text-sm font-thin text-[var(--red)] bg-white py-2 px-4" style={{ width: 'fit-content' }}>
            Browse All Games
          </Button>
        </Box>

        {/* categories */}
        <SectionTitle title="Popular Categories" />
        <Box
          component={'div'}
          className="flex flex-1 justify-between gap-x-5"
        >
          {
            categories.map(c => <Category title={c.title} Icon={c.Icon} />)
          }
        </Box>

        {/* trending now */}
        <SectionTitle title="Trending Now" />
        <Grid container spacing={3} component={'div'}>
          {
            games.map(g => (
              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                  md: 4,
                  lg: 2.4
                }}>
                <GameCard key={g.title} title={g.title} rating={g.rating} plays={g.plays} />
              </Grid>
            ))
          }
        </Grid>

        {/* New Releases */}
        <SectionTitle title="New Releases" />
        <Grid container spacing={3} component={'div'}>
          {
            games.reverse().map(g => (
              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                  md: 4,
                  lg: 2.4
                }}>
                <GameCard key={g.title} title={g.title} rating={g.rating} plays={g.plays} isNew />
              </Grid>
            ))
          }
        </Grid>

        {/* Ad Section */}
        <Ad />

        {/* Action Games */}
        <SectionTitle title="Action Games" />
        <Grid container spacing={3} component={'div'}>
          {
            games.slice(5).reverse().map(g => (
              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                  md: 4,
                  lg: 2.4
                }}>
                <GameCard key={g.title} title={g.title} rating={g.rating} plays={g.plays} />
              </Grid>
            ))
          }
        </Grid>

      </Box>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home
