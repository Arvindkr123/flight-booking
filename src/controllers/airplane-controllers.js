import { StatusCodes } from "http-status-codes";
import { createAirPlane, getAirPlanes, getAirPlaneById } from '../services/index.js';
import errorResponse from "../utils/common/error-response.js";
import successResponse from "../utils/common/success-response.js";

export async function createAirPlaneController(req, res) {
    try {
        const airplane = await createAirPlane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity,
        })
        successResponse.message = 'added airplane successfully';
        successResponse.data = airplane;
        return res.status(
            StatusCodes.CREATED
        ).json(successResponse)
    } catch (error) {
        errorResponse.message = 'Something went wrong while adding airplane';
        errorResponse.error = error
        return res.status(
            error.statusCode
        ).json(error)
    }
}

export const getAirPlanesController = async (req, res) => {
    try {
        const airplane = await getAirPlanes()
        successResponse.data = airplane;
        return res.status(
            StatusCodes.OK
        ).json(successResponse)
    } catch (error) {
        errorResponse.error = error
        return res.status(
            error.statusCode
        ).json(error)
    }
}
export const getAirPlaneByIdController = async (req, res) => {
    try {
        const airplane = await getAirPlaneById(req.params.id)
        successResponse.data = airplane;
        return res.status(
            StatusCodes.OK
        ).json(successResponse)
    } catch (error) {
        errorResponse.error = error
        return res.status(
            error.statusCode
        ).json(error)
    }
}