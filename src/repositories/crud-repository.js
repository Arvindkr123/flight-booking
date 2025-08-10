import { StatusCodes } from "http-status-codes";
import AppError from "../utils/errors/app-errors.js";

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const response = await this.model.create(data);
    return response;
  }

  async destroy(id) {
    const response = await this.model.destroy({
      where: { id },
    });
    return response;
  }

  async get(id) {
    const response = await this.model.findByPk(id);
    if(!response){
      throw new AppError('Not able to find the record', StatusCodes.NOT_FOUND);
    }
    return response;
  }

  async getAll() {
      const response = await this.model.findAll();
      return response;
  }

  async update(id, data) {
    const [rowsUpdated] = await this.model.update(data, {
      where: { id },
      returning: true, // useful for Postgres, ignored in MySQL
    });

    if (rowsUpdated === 0) {
      return null; // nothing updated
    }

    return await this.get(id); // return updated record
  }
}

export default CrudRepository;
