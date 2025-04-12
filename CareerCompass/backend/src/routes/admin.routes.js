import { Router } from "express";
import { 
    registerAdmin,
    loginAdmin,
    logoutAdmin,
    refreshAccessToken,
    requestPasswordReset,
    resetPassword
} from "../controllers/admin.controller.js";
import { addCompany } from "../controllers/company.controller.js";
import { addJob, getJobsByAdmin, editJob, viewJob } from "../controllers/job.controller.js";
import {
    getApplicantsByJob,
    getApplicant,
    updateApplicationStatus
} from "../controllers/application.controller.js";
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
router.route("/viewjob/:jobId").get(verifyAdminJWT,viewJob)
router.route("/getapplicants/:jobId").get(verifyAdminJWT,getApplicantsByJob)
router.route("/getapplicant/:applicantId").get(verifyAdminJWT,getApplicant)
router.route("/setstatus/:applicantId").put(verifyAdminJWT,updateApplicationStatus)
router.route("/getrefreshtoken").post(requestPasswordReset)
router.route("/resetpassword/:token").post(resetPassword)

export default router