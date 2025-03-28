import mongoose, { Schema } from "mongoose";

const applicationSchema = new Schema(
    {
        resume: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true,
            trim: true,
            match: [/^\+?\d{10,15}$/, "Please enter a valid phone number"], // Ensures a valid phone number format
        },
        city: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
        firstName: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
            index: true
        },
        lastName: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
            index: true
        },
        applicationStatus: {
            type: String,
            required: true,
            enum: ["pending", "reviewed", "interview_scheduled", "accepted", "rejected"],
            default: "pending"
        },
        job: {
            type: Schema.Types.ObjectId,
            ref: "Job",
            required: true
        },
        applicant: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        timestamps: true
    }
);

export const Application = mongoose.model("Application", applicationSchema);
