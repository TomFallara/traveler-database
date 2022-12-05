const Driver = require('./driver');
// const License = require('./License');
const Vehicle = require('./vehicle');

// Driver.hasOne(License, {
//   foreignKey: 'driver_id',
//   onDelete: 'CASCADE',
// });

// License.belongsTo(Driver, {
//   foreignKey: 'driver_id',
// });

// Define a Driver as having many Cars, thus creating a foreign key in the `car` table
Driver.hasMany(Vehicle, {
  foreignKey: 'driver_id',
  onDelete: 'CASCADE',
});

// The association can also be created from the Car side
Vehicle.belongsTo(Driver, {
  foreignKey: 'driver_id',
});

module.exports = { Driver, Vehicle };
