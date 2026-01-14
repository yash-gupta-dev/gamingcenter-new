import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import Game from "../pages/Game/Game.page";
import Home from "../pages/Home/Home.page";
import Login from "../pages/Login/Login.page";
import OTPVerification from "../pages/OTPVerificatiom/OTPVerification";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import Signup from "../pages/Signup/Signup.page";

export const commonRoutes = [
    {
        path: '/',
        element: Home
    },
    {
        path: '/game/:id',
        element: Game
    }
]

export const protectedRoutes = [
    {
        path: '/add-game',
        element: Game
    },
]

export const authRoutes = [
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
    }
]

type GOOGLE_AUTH_KEYS =
    | "client_id"
    | "client_secret"
    | "endpoint"
    | "redirect_uri"
    | "scopes";

export const oauth_google: Record<GOOGLE_AUTH_KEYS, string> = {
    client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID || "",
    client_secret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET || "",
    endpoint: "https://accounts.google.com/o/oauth2/v2/auth",
    redirect_uri: import.meta.env.VITE_GOOGLE_CLIENT_REDIRECT_URI || "",
    scopes: "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"
}
