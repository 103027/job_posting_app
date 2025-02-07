import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Company } from "../models/company.models.js";
import { Admin } from "../models/admin.models.js";
import { Job } from "../models/job.models.js";
import mongoose from "mongoose";

const addJob = asyncHandler(async (req, resp) => {
    const { title, jobDecription, jobType, jobTimming, stackRequired, minSalary, maxSalary, jobStatus } = req.body;
    const adminId = req.admin?._id;

    if (!adminId) {
        throw new ApiError(401, "Unauthorized - Admin ID required");
    }

    if (
        [title, jobDecription, jobType, jobTimming, minSalary, maxSalary, jobStatus].some((field) => typeof field === "string" && field.trim() === "") && stackRequired.some(skill => skill.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const job = await Job.create({
        title,
        jobDecription,
        jobType,
        jobTimming,
        stackRequired,
        minSalary,
        maxSalary,
        jobStatus,
        createdBy: adminId
    })

    const createdJob = await Job.findById(job._id)

    if (!createdJob) {
        throw new ApiError(500, "Something went wrong while adding the Job")
    }

    return resp.status(201).json(
        new ApiResponse(200, {
            createdJob,
        }, "Job added Successfully")
    )
})

const getJobsByAdmin = asyncHandler(async (req, resp) => {
    const adminId = req.admin?._id;

    if (!adminId) {
        throw new ApiError(401, "Unauthorized - Admin ID required");
    }

    const jobs = await Admin.aggregate([
        {
            $match: {
                _id: new mongoose.Types.ObjectId(adminId)
            }
        },
        {
            $lookup: {
                from: "jobs",
                localField: "_id",
                foreignField: "createdBy",
                as: "jobs_",
                pipeline: [
                    {
                        $project: {
                            title: 1,
                            jobDecription: 1,
                            jobType: 1,
                            jobTimming: 1,
                            stackRequired: 1,
                            minSalary: 1,
                            maxSalary: 1,
                            jobStatus: 1
                        }
                    }
                ]
            }
        },
        {
            $project: {
                jobs_ : 1
            }
        }
    ]);

    return resp.status(200).json(
        new ApiResponse(200, { jobs }, jobs.length ? "Jobs retrieved successfully" : "No jobs found")
    );
});


export {
    addJob,
    getJobsByAdmin
}