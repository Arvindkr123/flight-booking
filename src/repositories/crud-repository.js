import logger from "../config/logger-config.js";

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
        console.log(error)
      logger.error("Something went wrong in crud repository - create", { error });
      throw error;
    }
  }

  async destroy(id) {
    try {
      const response = await this.model.destroy({
        where: { id },
      });
      return response;
    } catch (error) {
      logger.error("Something went wrong in crud repository - destroy", { error });
      throw error;
    }
  }

  async get(id) {
    try {
      const response = await this.model.findByPk(id);
      return response;
    } catch (error) {
      logger.error("Something went wrong in crud repository - get", { error });
      throw error;
    }
  }

  async getAll() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      logger.error("Something went wrong in crud repository - getAll", { error });
      throw error;
    }
  }

  async update(id, data) {
    try {
      const [rowsUpdated] = await this.model.update(data, {
        where: { id },
        returning: true, // useful for Postgres, ignored in MySQL
      });

      if (rowsUpdated === 0) {
        return null; // nothing updated
      }

      return await this.get(id); // return updated record
    } catch (error) {
      logger.error("Something went wrong in crud repository - update", { error });
      throw error;
    }
  }
}

export default CrudRepository;
