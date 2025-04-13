import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import fs from 'fs/promises';
import path from 'path';
// For ES modules compatibility
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdfParse = require('pdf-parse');
import axios from 'axios';

const apiKey = process.env.OPENAI_API_KEY;

export const chatbotController = asyncHandler(async (req, res) => {
    const { role, message } = req.body;

    if (!role?.trim() || !message?.trim()) {
        throw new ApiError(400, "Both 'role' and 'message' are required.");
    }

    let prompt = "";

    switch (role) {
        case "user":
            prompt = `You are an interview preparation assistant. Provide helpful advice, mock interview questions, or feedback for this user input: "${message}"`;
            break;
        case "admin":
            prompt = `You are a professional job description writer. Generate a clear and concise job description based on this input: "${message}"`;
            break;
        default:
            throw new ApiError(400, "Invalid role specified.");
    }

    try {
        const response = await axios.post(
            `https://openrouter.ai/api/v1/chat/completions`,
            {
                model: "deepseek/deepseek-r1:free",
                messages: [
                    { role: "system", content: "You're an AI assistant helping with job interviews and job descriptions." },
                    { role: "user", content: prompt },
                ],
            },
            {
                headers: {
                    "Authorization": `Bearer ${apiKey}`,
                    "Content-Type": "application/json",
                },
            }
        );

        const aiReply = response.data.choices?.[0]?.message?.content || "No response from AI.";

        return res
            .status(200)
            .json(new ApiResponse(200, { response: aiReply }, "Chatbot response generated successfully."));
    } catch (error) {
        console.error("Axios Error:", error.response?.data || error.message);
        throw new ApiError(500, "Failed to generate response from AI service.");
    }
});

export const analyzeResumeController = asyncHandler(async (req, res) => {
    const { pdfPath, jobStack } = req.body;
    
    if (!pdfPath || !jobStack) {
        throw new ApiError(400, "'pdfPath' and 'jobStack' are required.");
    }
    
    try {
        console.log("Reading PDF from local path:", pdfPath);
        
        // Read the PDF file from the local filesystem
        const pdfBuffer = await fs.readFile(pdfPath);
        console.log(`Successfully read PDF file, size: ${pdfBuffer.length} bytes`);
        
        // Parse the PDF content
        const pdfData = await pdfParse(pdfBuffer);
        
        if (!pdfData || !pdfData.text) {
            console.error("PDF parsed but no text content found");
            throw new ApiError(400, "Could not extract text from PDF");
        }
        
        console.log(`Successfully extracted ${pdfData.text.length} characters from PDF`);
        const trimmedText = pdfData.text.slice(0, 4000); // Limit text to 4000 chars
        
        // Create prompt for AI analysis
        const prompt = `
You are an expert in resume screening.
Job Stack: ${jobStack}
Analyze the following resume content.
Give a match score out of 10, list any missing skills, and provide a short explanation.

Resume:
${trimmedText}
        `;
        
        // Send to AI for analysis
        console.log("Sending resume content to AI for analysis...");
        const aiResponse = await axios.post(
            'https://openrouter.ai/api/v1/chat/completions',
            {
                model: 'deepseek/deepseek-r1:free',
                messages: [
                    { role: 'system', content: 'You are a helpful AI that evaluates resumes.' },
                    { role: 'user', content: prompt },
                ],
            },
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        
        const output = aiResponse.data.choices?.[0]?.message?.content || 'No AI response.';
        console.log("AI analysis complete");
        
        return res.status(200).json(new ApiResponse(200, { result: output }, 'Resume analyzed successfully.'));
        
    } catch (error) {
        console.error('Resume analysis error:', error);
        
        // Handle file system errors specifically
        if (error.code === 'ENOENT') {
            throw new ApiError(404, `PDF file not found at path: ${req.body.pdfPath}`);
        }
        
        throw new ApiError(error.statusCode || 500, error.message || 'Failed to analyze resume.');
    }
});