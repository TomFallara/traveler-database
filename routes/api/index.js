const router = require('express').Router();

const driverRoutes = require('./driverRoutes');
const vehicleRoutes = require('./vehicleRoutes');

router.use('/drivers', driverRoutes);
router.use('/vehicles', vehicleRoutes);

module.exports = router;