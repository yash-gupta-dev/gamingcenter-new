import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { UnauthorizedError } from "../utils/ApiError";

interface AccessTokenPayload extends JwtPayload {
    userId: number;
}

export const verifyAccessToken = (
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
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET!
        ) as AccessTokenPayload;

        req.user = {
            id: decoded.userId,
        };

        return next();
    } catch (err) {
        return next(new UnauthorizedError("Invalid or expired access token"));
    }
};