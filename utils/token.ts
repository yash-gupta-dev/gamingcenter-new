import jwt from 'jsonwebtoken'
import crypto from "crypto";
import bcrypt from "bcrypt";
import { db } from '../models';

export const generateAccessToken = (userId: number) => {
    const accessToken = jwt.sign(
        { userId },
        process.env.JWT_SECRET!,
        { expiresIn: "15m" }
    );

    return accessToken
}

export const generateAuthTokens = async (userId: number) => {
    const accessToken = generateAccessToken(userId);

    const refreshToken = generateRefreshToken();
    const refreshTokenHash = await hashToken(refreshToken);
    
    await db.RefreshToken.create({
        user_id: userId,
        token_hash: refreshTokenHash,
        expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    });

    return { accessToken, refreshToken };
}

function hashToken(token: string) {
    return bcrypt.hash(token, 10);
}

export const generateRefreshToken = () => {
    return crypto.randomBytes(64).toString("hex");
}

export const decodeToken = (refreshToken: string) => {
    const decoded = jwt.verify(
        refreshToken,
        process.env.JWT_REFRESH_SECRET!
    );
    return decoded;
}

export const findMatchingRefreshToken = async (
    incomingToken: string,
    sessions: any[]
) => {
    for (const session of sessions) {
        const match = await bcrypt.compare(
            incomingToken,
            session.token_hash
        );
        if (match) return session;
    }
    return null;
}