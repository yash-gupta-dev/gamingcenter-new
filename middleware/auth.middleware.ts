import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { UnauthorizedError } from "../utils/ApiError";
import { getcookie } from "../utils/cookie.utils";
import { decodeToken } from "../utils/token";
import { db } from "../models";

interface AccessTokenPayload extends JwtPayload {
    userId: number;
}

export const verifyUser = (
    req: Request,
    _: Response,
    next: NextFunction
) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return next(new UnauthorizedError("Access token missing"));
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = decodeToken(token) as AccessTokenPayload;

        req.user = {
            id: decoded.userId,
        };

        return next();
    } catch (err) {
        return next(new UnauthorizedError("Invalid or expired access token"));
    }
};

export const verifyAdmin = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const token = getcookie(req)
    if (token) {
        const decodedToken = decodeToken(token)
        if (decodedToken) {
            let admin_info = await db.Admin.findOne({ where: { id: decodedToken } })
            if (admin_info) {
                req.profile = admin_info
                return next()
            } else {
                console.log("No admin found")
            }
        } else {
            console.log("Invalid token provided.")
        }
        return next()
    } else {
        return res.redirect('/admin/login');
    }
}