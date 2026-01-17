import express from "express";
import { userAuthRouter } from "./user.router";

const router = express.Router();

router.use(userAuthRouter)
// router.use(gameRouter)

export {
    router
};
