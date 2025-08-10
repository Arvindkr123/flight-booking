import { CityRepository } from "../repositories/index.js";
import AppError from './../utils/errors/app-errors.js';
import { StatusCodes } from "http-status-codes";


export async function createCity(data) {
    try {
        const res = await new CityRepository().create(data);
        return res;
    } catch (error) {
        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            let explanation = [];
            error.errors.forEach(err => {
                explanation.push(err.path+' '+err.message);
            });
            console.log(explanation);
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new City Object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}