import { StatusCodes } from "http-status-codes";
import errorResponse from "../utils/common/error-response.js";
import AppError from "../utils/errors/app-errors.js";

export function validateCreateRequest(req, res, next) {
    if (!req.body.modelNumber) {
        errorResponse.message = 'Something went wrong while adding airplane post'
        errorResponse.error = new AppError(['Model number not found'], StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse)
    }
    next();
}