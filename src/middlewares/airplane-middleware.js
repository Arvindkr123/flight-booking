import { StatusCodes } from "http-status-codes";
import errorResponse from "../utils/common/error-response.js";

export function validateCreateRequest(req, res, next) {
    if (!req.body.modelNumber) {
        errorResponse.message = 'Something went wrong while adding airplane post'
        errorResponse.error = { explantion: 'Model number not found' }
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse)
    }
    next();
}