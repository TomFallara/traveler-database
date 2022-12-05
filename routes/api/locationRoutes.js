const router = require('express').Router();
// const Traveler = require('../../models/traveler');
const { Traveler, Location, Trip } = require('../../models');

// GET all Locations
router.get('/', async (req, res) => {
    try {
    const locationData = await Location.findAll();
        res.status(200).json(locationData);
    } catch(err) {
        res.status(500).json(err);
    }
});

// GET a Location
router.get('/:id', async (req, res) => {
  try {
    const locationData = await Location.findByPk(req.params.id);
    if (!locationData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST create a new Location
router.post('/', async (req, res) => {
  try {
    const locationData = await Location.create({
      id: req.body.id,
      name: req.body.name,
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE a Location
router.put('/:id', async (req, res) => {
  try {
    const locationData = await Location.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!locationData[0]) {
      res.status(404).json({ message: 'No Location with this id!' });
      return;
    }
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a Location
router.delete('/:id', async (req, res) => {
  try {
    const locationData = await Location.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!locationData) {
      res.status(404).json({ message: 'No Location with this id!' });
      return;
    }
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
