import express from "express";
import userauthController from '../controllers/user.controller';
import { asyncHandler } from "../utils/ApiError";

const userAuthRouter = express.Router();

userAuthRouter.post("/login", asyncHandler(userauthController.login));
userAuthRouter.post("/signup", asyncHandler(userauthController.signUp));

userAuthRouter.post("/verify-otp", asyncHandler(userauthController.verifyOtp));

userAuthRouter.post("/login-with-google", asyncHandler(userauthController.loginWithGoogle));

userAuthRouter.post("/refresh-token", asyncHandler(userauthController.refreshAccessToken));

userAuthRouter.post("/forgot-password", asyncHandler(userauthController.forgetPassword));
userAuthRouter.post("/reset-forgot-password", asyncHandler(userauthController.resetForgetPassword));

export {
    userAuthRouter
};
