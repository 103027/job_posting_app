import { Router } from "express";
import { 
    registerAdmin,
    loginAdmin,
    logoutAdmin,
    refreshAccessToken
} from "../controllers/admin.controller.js";
import { verifyAdminJWT } from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/register").post(registerAdmin)
router.route("/login").post(loginAdmin)
router.route("/logout").post( verifyAdminJWT, logoutAdmin)
router.route("/refresh-token").post(refreshAccessToken)

export default router