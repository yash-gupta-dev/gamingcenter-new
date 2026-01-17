import express from "express";
import adminController from '../controllers/admin.controller';
import { asyncHandler } from "../utils/ApiError";
import { verifyAdmin } from "../middleware/auth.middleware";

const adminRouter = express.Router();

adminRouter.get("/login", asyncHandler(adminController.showLogin));
adminRouter.post("/login", asyncHandler(adminController.login));
adminRouter.get("/dashboard", verifyAdmin ,asyncHandler(adminController.showDashboard));

export {
    adminRouter
};
