import { Router } from "express";
import { 
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken
} from "../controllers/user.controller.js";
import {
    activeJobs
} from "../controllers/job.controller.js";
import {
    applyforJob
} from "../controllers/application.controller.js";
import { verifyUserJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").post(verifyUserJWT, logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/activejobs").get(verifyUserJWT, activeJobs)
router.route("/apply/:jobId").post(upload.fields([ {name:"resume",maxCount: 1 } ]),verifyUserJWT, applyforJob)

export default router