import { AirPlaneRepository } from "../repositories/index.js";

export async function createAirPlane(data){
    try {
        const res = new AirPlaneRepository().create(data);
        return res;
    } catch (error) {
        console.log(error)
        throw error;
    }
}