const router = require('express').Router();

const travelerRoutes = require('./travelerRoutes');
const locationRoutes = require('./locationRoutes');
const tripRoutes = require('./tripRoutes');

router.use('/traveler', travelerRoutes);
router.use('/location', locationRoutes);
router.use('/trip', tripRoutes);

module.exports = router;