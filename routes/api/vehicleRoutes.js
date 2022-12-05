const router = require('express').Router();
const Driver = require('../../models/driver');
const Vehicle = require('../../models/vehicle');

// GET all vehicles
router.get('/', async (req, res) => {
    try {
    const vehicleData = await User.findAll({
        include: [{ model: Driver }],
    });
        res.status(200).json(vehicleData);
    } catch(err) {
        res.status(500).json(err);
    }
});

// GET a vehicle
router.get('/:id', async (req, res) => {
  try {
    const vehicleData = await User.findByPk(req.params.id);
    if (!vehicleData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(vehicleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST create a new vehicle
router.post('/', async (req, res) => {
  try {
    const vehicleData = await vehicle.create({
      id: req.body.id,
      make: req.body.make,
      model: req.body.model,
      year: req.body.year,
      mileage: req.body.mileage,
    });
    res.status(200).json(vehicleData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE a vehicle
router.put('/:id', async (req, res) => {
  try {
    const vehicleData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!vehicleData[0]) {
      res.status(404).json({ message: 'No vehicle with this id!' });
      return;
    }
    res.status(200).json(vehicleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a vehicle
router.delete('/:id', async (req, res) => {
  try {
    const vehicleData = await Vehicle.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!vehicleData) {
      res.status(404).json({ message: 'No vehicle with this id!' });
      return;
    }
    res.status(200).json(vehicleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
