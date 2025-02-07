import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Company } from "../models/company.models.js";
import { Admin } from "../models/admin.models.js";

const addCompany = asyncHandler(async (req, resp) => {
    const { name, description, location, contactEmail, website } = req.body;
    const adminId = req.admin?._id;

    if (!adminId) {
        throw new ApiError(401, "Unauthorized - Admin ID required");
    }

    if (
        [name, description, location, contactEmail, website].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedCompany = await Company.findOne({
        $or: [{ name }, { contactEmail }, { website }]
    })

    if (existedCompany) {
        throw new ApiError(409, "Company already exists")
    }

    const company = await Company.create({
        name: name.toLowerCase(),
        contactEmail,
        description,
        location,
        website
    })

    const createdCompany = await Company.findById(company._id)

    if (!createdCompany) {
        throw new ApiError(500, "Something went wrong while registering the Company")
    }

    const updatedAdmin = await Admin.findByIdAndUpdate(
        adminId,
        { company: company._id },
        { new: true }
    ).select("-password -refreshToken")

    if (!updatedAdmin) {
        throw new ApiError(500, "Failed to update admin with company ID");
    }

    return resp.status(201).json(
        new ApiResponse(200, {
            createdCompany,
        }, "Company registered Successfully")
    )
})

export {
    addCompany
}