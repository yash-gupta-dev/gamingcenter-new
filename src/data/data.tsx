import { Home, TrendingUp, Circle, RotateCcw, Zap, Puzzle, CarFront, Trophy, Gamepad, Brain } from "lucide-react";

export const categories = [
  {
    Icon: Zap,
    title: 'Action'
  },
  {
    Icon: Puzzle,
    title: 'Puzzle'
  },
  {
    Icon: CarFront,
    title: 'Racing'
  },
  {
    Icon: Trophy,
    title: 'Sports'
  },
  {
    Icon: Gamepad,
    title: 'Arcade'
  },
  {
    Icon: Brain,
    title: 'Strategy'
  }
];

export const NAV_ITEMS = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Circle, label: "New Games", href: "/new-games" },
  { icon: TrendingUp, label: "Trending", href: "/trending" },
  { icon: RotateCcw, label: "Recently Played", href: "/recently-deleted" },
];
