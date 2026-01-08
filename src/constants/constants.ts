import Game from "../pages/Game/Game.page";
import Home from "../pages/Home/Home.page";

export const routes = [
    {
        path: '/',
        element: Home
    },
    {
        path: '/game/:id',
        element: Game
    },
    {
        path: '/add-game',
        element: Game
    },
]
