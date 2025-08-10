import { AirPlaneRepository } from "../repositories/index.js";
import AppError from './../utils/errors/app-errors.js';
import { StatusCodes } from "http-status-codes";

export async function createAirPlane(data) {
    try {
        const res = await new AirPlaneRepository().create(data);
        return res;
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach(err => {
                explanation.push(err.message);
            });
            console.log(explanation);
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Airplane Object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

export async function getAirPlanes() {
    try {
        const res = await new AirPlaneRepository().getAll();
        return res;
    } catch (error) {
        throw new AppError('Cannot fetch airplanes data', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

export async function getAirPlaneById(id) {
    try {
        const airplane = await new AirPlaneRepository().get(id);
        return airplane;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError('The Airplane you requested is not present', StatusCodes.NOT_FOUND);
        }
        throw new AppError('Cannot fetch airplanes data ', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

export async function deleteAirPlaneById(id) {
    try {
        const airplane = await new AirPlaneRepository().destroy(id);
        return airplane;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError('The Airplane you requested is not present', StatusCodes.NOT_FOUND);
        }
        throw new AppError('Cannot fetch airplanes data ', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

