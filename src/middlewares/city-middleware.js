import { StatusCodes } from "http-status-codes";
import errorResponse from "../utils/common/error-response.js";
import AppError from "../utils/errors/app-errors.js";

export function validateCreateRequestCity(req, res, next) {
    if (!req.body.name) {
        errorResponse.message = 'Something went wrong while adding city post'
        errorResponse.error = new AppError(['City name not found'], StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse)
    }
    next();
}