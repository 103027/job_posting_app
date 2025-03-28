import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Company } from "../models/company.models.js";
import { Application } from "../models/application.models.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { Admin } from "../models/admin.models.js";
import { Job } from "../models/job.models.js";
import mongoose from "mongoose";

const applyforJob = asyncHandler(async (req, resp) => {
    const { firstName, lastName, email, city, phoneNumber, applicationStatus} = req.body;
    const userId = req.user?._id;
    const { jobId } = req.params;

    if (!userId) {
        throw new ApiError(401, "Unauthorized - User ID required");
    }

    if (
        [firstName, lastName, email, city, phoneNumber, applicationStatus].some((field) => typeof field === "string" && field.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const resumeLocalPath = req.files?.resume[0]?.path;

    if (!resumeLocalPath) {
        throw new ApiError(400, "Resume file is required")
    }

    const resume = await uploadOnCloudinary(resumeLocalPath)

    const application = await Application.create({
        firstName,
        lastName,
        email,
        city,
        phoneNumber,
        applicationStatus,
        resume: resume.url,
        job: jobId,
        applicant: userId
    })

    const createdApplication = await Application.findById(application._id)

    if (!createdApplication) {
        throw new ApiError(500, "Something went wrong while adding the Application")
    }

    return resp.status(201).json(
        new ApiResponse(200, {
            createdApplication,
        }, "Application added Successfully")
    )
})

export {
    applyforJob
}