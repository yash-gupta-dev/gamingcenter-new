import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import Game from "../pages/Game/Game.page";
import Home from "../pages/Home/Home.page";
import Login from "../pages/Login/Login.page";
import OTPVerification from "../pages/OTPVerificatiom/OTPVerification";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import Signup from "../pages/Signup/Signup.page";

export const routes = [
    {
        path: '/',
        element: Home
    },
    {
        path: '/login',
        element: Login
    },
    {
        path: '/signup',
        element: Signup
    },
    {
        path: '/forgot-password',
        element: ForgotPassword
    },
    {
        path: '/otp-verification',
        element: OTPVerification
    },
    {
        path: '/reset-password',
        element: ResetPassword
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
