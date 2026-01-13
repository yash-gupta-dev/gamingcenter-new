import { Home, TrendingUp, Circle, RotateCcw, Zap, Puzzle, CarFront, Trophy, Gamepad, Brain, User, Power } from "lucide-react";

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

export const userOptions = [
  {
    Icon: User,
    title: 'Profile',
    path: '/profile'
  },
  {
    Icon: Power,
    title: 'Log Out',
    path: null
  }
];

export const NAV_ITEMS = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Circle, label: "New Games", href: "/new-games" },
  { icon: TrendingUp, label: "Trending", href: "/trending" },
  { icon: RotateCcw, label: "Recently Played", href: "/recently-deleted" },
];
