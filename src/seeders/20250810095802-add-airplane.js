'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Airplanes', [
    {
      modelNumber: 'John324Doe',
      capacity: 124,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      modelNumber: 'Arvind432',
      capacity: 432,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      modelNumber: 'Ram435Arvind',
      capacity: 533,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
     {
      modelNumber: 'A320Neo',
      capacity: 180,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      modelNumber: 'B737Max',
      capacity: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      modelNumber: 'CRJ900',
      capacity: 90,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      modelNumber: 'E190AR',
      capacity: 114,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      modelNumber: 'Q400NG',
      capacity: 78,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Airplanes', null, {});
}