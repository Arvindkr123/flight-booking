import { AirPlaneRepository } from "../repositories/index.js";
import AppError from './../utils/errors/app-errors.js';
import { StatusCodes } from "http-status-codes";
export async function createAirPlane(data) {
    try {
        const res = new AirPlaneRepository().creat(data);
        return res;
    } catch (error) {
        if (error.name === 'TypeError') {
            throw new AppError('Cannot create a new Airplane Object', StatusCodes.INTERNAL_SERVER_ERROR)
        }
        console.log(error)
        throw error;
    }
}