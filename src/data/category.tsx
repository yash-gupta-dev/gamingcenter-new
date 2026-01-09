import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import ExtensionIcon from '@mui/icons-material/Extension';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PsychologyIcon from '@mui/icons-material/Psychology';

export const categories = [
  {
    Icon: <ElectricBoltIcon className='text-[var(--gray-light)] text-2xl' />,
    title: 'Action'
  },
  {
    Icon: <ExtensionIcon className='text-[var(--gray-light)] text-2xl' />,
    title: 'Puzzle'
  },
  {
    Icon: <DriveEtaIcon className='text-[var(--gray-light)] text-2xl' />,
    title: 'Racing'
  },
  {
    Icon: <EmojiEventsIcon className='text-[var(--gray-light)] text-2xl' />,
    title: 'Sports'
  },
  {
    Icon: <SportsEsportsIcon className='text-[var(--gray-light)] text-2xl' />,
    title: 'Arcade'
  },
  {
    Icon: <PsychologyIcon className='text-[var(--gray-light)] text-2xl' />,
    title: 'Strategy'
  }
];