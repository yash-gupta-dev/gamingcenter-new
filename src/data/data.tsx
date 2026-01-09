import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import ExtensionIcon from '@mui/icons-material/Extension';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { Home, TrendingUp, Circle, RotateCcw } from "lucide-react";

export const categories = [
  {
    Icon: ElectricBoltIcon,
    title: 'Action'
  },
  {
    Icon: ExtensionIcon,
    title: 'Puzzle'
  },
  {
    Icon: DriveEtaIcon,
    title: 'Racing'
  },
  {
    Icon: EmojiEventsIcon,
    title: 'Sports'
  },
  {
    Icon: SportsEsportsIcon,
    title: 'Arcade'
  },
  {
    Icon: PsychologyIcon,
    title: 'Strategy'
  }
];

export const NAV_ITEMS = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Circle, label: "New Games", href: "/new-games" },
  { icon: TrendingUp, label: "Trending", href: "/trending" },
  { icon: RotateCcw, label: "Recently Played", href: "/trending" },
];
