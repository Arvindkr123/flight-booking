/**
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {import('sequelize').Sequelize} Sequelize
 */
/** @type {import('sequelize-cli').Migration} */

export default {
  async up(queryInterface, Sequelize) {
    // Add foreign key constraint on Airports.cityId → Cities.id
    await queryInterface.addConstraint("Airports", {
      fields: ["cityId"], // 👈 must be an array
      type: "foreign key",
      name: "city_fk_airports_cityId", // 👈 always give a name for rollback
      references: {
        table: "Cities",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    // Remove the constraint by name
    await queryInterface.removeConstraint("Airports", "city_fk_airports_cityId");
  },
};
