import express from "express";
import adminController from '../controllers/admin.controller';
import { asyncHandler } from "../utils/ApiError";

const adminRouter = express.Router();

adminRouter.get("/login", asyncHandler(adminController.showLogin));
adminRouter.post("/login", asyncHandler(adminController.login));

export {
    adminRouter
};
