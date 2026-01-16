import path from "path";

export enum USER_AUTH_PROVIDERS {
    EMAIL = "EMAIL",
    GOOGLE = "GOOGLE",
}

export enum PRIORITY {
    PRIORITY = "PRIORITY",
    CASUAL = "CASUAL",
    MUTED = "MUTED"
}

export enum STATUS {
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED",
    REJECTED = "REJECTED"
}

export enum EVENT_STATUS {
    UPCOMING = "UPCOMING",
    LIVE = "LIVE",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED",
}

export enum ROOM_TYPE {
    PUBLIC = "PUBLIC",
    PRIVATE = "PRIVATE",
}

type GOOGLE_AUTH_KEYS =
    | "client_id"
    | "client_secret"
    | "endpoint"
    | "redirect_uri"
    | "scopes";

export const oauth_google: Record<GOOGLE_AUTH_KEYS, string> = {
    client_id: process.env.GOOGLE_CLIENT_ID || "",
    client_secret: process.env.GOOGLE_CLIENT_SECRET || "",
    endpoint: "https://accounts.google.com/o/oauth2/v2/auth",
    redirect_uri: process.env.GOOGLE_CLIENT_REDIRECT_URI || "",
    scopes: "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"
}

export const stylesPath = path.join(__dirname, '..', '..', 'public', 'css', "output.css")

