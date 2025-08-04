import { StatusCodes } from "http-status-codes";
import {createAirPlane} from '../services/index.js';

export async function createAirPlaneController(req, res) {
    try {
        const airplane = await createAirPlane(req.body)
        return res.status(
            StatusCodes.CREATED
        ).json({
            success: true,
            message: 'added airplane successfully',
            data: airplane,
            error: {}
        })
    } catch (error) {
        return res.status(
            StatusCodes.CREATED
        ).json({
            success: false,
            message: 'Something went wrong while adding airplane',
            data: {},
            error: error
        })
    }
}