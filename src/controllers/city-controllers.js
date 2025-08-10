import { createCity } from "../services/index.js";
import errorResponse from "../utils/common/error-response.js";
import successResponse from "../utils/common/success-response.js";


export async function createCityController(req, res) {
    try {
        const city = await createCity({
            name: req.body.name,
        })
        successResponse.message = 'added city successfully';
        successResponse.data = city;
        return res.status(
            StatusCodes.CREATED
        ).json(successResponse)
    } catch (error) {
        errorResponse.message = 'Something went wrong while adding city';
        errorResponse.error = error
        return res.status(
            error.statusCode
        ).json(error)
    }
}