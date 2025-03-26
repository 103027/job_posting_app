import { Router } from "express";
import { 
    registerAdmin,
    loginAdmin,
    logoutAdmin,
    refreshAccessToken
} from "../controllers/admin.controller.js";
import { addCompany } from "../controllers/company.controller.js";
import { addJob, getJobsByAdmin, editJob } from "../controllers/job.controller.js";
import { verifyAdminJWT } from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/register").post(registerAdmin)
router.route("/login").post(loginAdmin)
router.route("/logout").post( verifyAdminJWT, logoutAdmin)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/addcompany").post(verifyAdminJWT,addCompany)
router.route("/addjob").post(verifyAdminJWT,addJob)
router.route("/getjobs").get(verifyAdminJWT,getJobsByAdmin)
router.route("/editjob/:jobId").put(verifyAdminJWT,editJob)


export default router