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

    const alreadyApplied = await Application.findOne({ applicant: userId, job: jobId });

    if (alreadyApplied) {
        throw new ApiError(409, "You have already applied for this job");
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

const getApplicantsByJob = asyncHandler(async (req, resp) => {
    const { jobId } = req.params;

    const applicants = await Application.find({job:jobId}).select("-_id -job -createdAt -updatedAt");

    if (!applicants || applicants.length === 0) {
        throw new ApiError(500, "Something went wrong while finding the Applicants");
    }

    return resp.status(200).json(
        new ApiResponse(200, { applicants }, "Applicants found successfully")
    );
})

const getApplicant = asyncHandler(async (req, resp) => {
    const { applicantId } = req.params;

    const applicant = await Application.find({applicant:applicantId}).select("-_id -job -createdAt -updatedAt");

    if (!applicant) {
        throw new ApiError(500, "Something went wrong while finding the Applicant");
    }

    return resp.status(200).json(
        new ApiResponse(200, { applicant }, "Applicant found successfully")
    );
})

const updateApplicationStatus = asyncHandler(async (req, resp) => {
    const { applicantId } = req.params;
    const { newStatus } = req.body;

    if (!newStatus || typeof newStatus !== "string" || newStatus.trim() === "") {
        throw new ApiError(400, "New status is required and must be a valid string");
    }

    const updatedApplication = await Application.findOneAndUpdate(
        { applicant: applicantId },
        { applicationStatus: newStatus },
        { new: true }
    ).select("-_id -job -createdAt -updatedAt");

    if (!updatedApplication) {
        throw new ApiError(404, "Application not found for the provided applicantId");
    }

    return resp.status(200).json(
        new ApiResponse(200, { updatedApplication }, "Application status updated successfully")
    );
});


export {
    applyforJob,
    getApplicantsByJob,
    getApplicant,
    updateApplicationStatus
}