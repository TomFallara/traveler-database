const router = require('express').Router();
const { Vehicle } = require('../../models');
const Driver = require('../../models/driver');

// GET all drivers
router.get('/', async (req, res) => {
  try {
    const driverData = await Driver.findAll({
      include: { model: Vehicle },
    });
    res.status(200).json(driverData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a driver
router.get('/:id', async (req, res) => {
  try {
    const driverData = await User.findByPk(req.params.id, {
      include: {model: Vehicle},
    });
    if (!driverData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(driverData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST create a new driver
router.post('/', async (req, res) => {
  try {
    const driverData = await driver.create({
      name: req.body.name,
      age: req.body.age,
    });
    res.status(200).json(driverData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE a driver
router.put('/:id', async (req, res) => {
  try {
    const driverData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!driverData[0]) {
      res.status(404).json({ message: 'No driver with this id!' });
      return;
    }
    res.status(200).json(driverData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a driver
router.delete('/:id', async (req, res) => {
  try {
    const driverData = await Driver.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!driverData) {
      res.status(404).json({ message: 'No driver with this id!' });
      return;
    }
    res.status(200).json(driverData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
