import mongoose, { Schema } from "mongoose";

const companySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        contactEmail: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        location:{
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
        website: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        }
    },
    {
        timestamps: true
    }
)

export const Company = mongoose.model("Company", companySchema);