import { Request } from "express";

export const getcookie = (req: Request) => {
    var cookie = req.cookies;

    if (cookie) {
        if (Object.keys(cookie).includes("dd-token")) {
            return cookie["dd-token"];
        } else {
            return false;
        }
    }
}