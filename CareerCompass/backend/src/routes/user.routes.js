import { Router } from "express";
import { 
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken
} from "../controllers/user.controller.js";
import { verifyUserJWT } from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").post(verifyUserJWT, logoutUser)
router.route("/refresh-token").post(refreshAccessToken)

export default router