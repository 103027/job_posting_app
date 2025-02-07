import mongoose, { Schema } from "mongoose";

const jobSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
        jobDecription: {
            type: String,
            required: true,
            trim: true,
        },
        jobType: {
            type: String,
            required: true,
            enum: ["remote", "onsite"],
            default: "onsite"
        },
        jobTimming: {
            type: String,
            required: true,
            enum: ["full-time", "part-time"],
            default: "full-time"
        },
        stackRequired: [{
            type: String,
            required: true,
            trim: true,
        }],
        minSalary: {
            type: Number,
            required: true,
            validate: {
                validator: function(value) {
                    return value <= this.maxSalary;
                },
                message: "Minimum salary cannot be greater than maximum salary."
            }
        },
        maxSalary: {
            type: Number,
            required: true,
        },
        jobStatus: {
            type: String,
            required: true,
            enum: ["active", "not-active"],
            default: "active"
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "Admin",
            required: true,
        }
    },
    {
        timestamps: true
    }
)

export const Job = mongoose.model("Job", jobSchema)