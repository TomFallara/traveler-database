
const Traveler = require('./traveler');
const Location = require('./location');
const Trip = require('./trip');


Traveler.belongsToMany(Location, {
  through:{
    model: Trip,
    Unique: false
  },
  as: 'planned_trips'
});

Location.belongsToMany(Traveler, {
  through: {
    model: Trip,
    Unique: false
  },
  as:'location_travelers'
});

module.exports = { Traveler, Location, Trip };
