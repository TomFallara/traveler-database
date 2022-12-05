const router = require('express').Router();
const { Traveler, Location, Trip } = require('../../models');

// GET all travelers
router.get('/', async (req, res) => {
  try {
    const travelerData = await Traveler.findAll();
    res.status(200).json(travelerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a traveler
router.get('/:id', async (req, res) => {
  try {
    const travelerData = await Traveler.findByPk(req.params.id, {
      include: [{ model: Location, through: Trip, as: 'planned_trips'}]
    });
    if (!travelerData) {
      res.status(404).json({ message: 'No travaler with this id!' });
      return;
    }
    res.status(200).json(travelerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST create a new traveler
router.post('/', async (req, res) => {
  try {
    const travelerData = await Traveler.create({
      name: req.body.name,
      email: req.body.email,
    });
    res.status(200).json(travelerData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE a traveler
router.put('/:id', async (req, res) => {
  try {
    const travelerData = await Traveler.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!travelerData[0]) {
      res.status(404).json({ message: 'No traveler with this id!' });
      return;
    }
    res.status(200).json(travelerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a traveler
router.delete('/:id', async (req, res) => {
  try {
    const travelerData = await Traveler.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!travelerData) {
      res.status(404).json({ message: 'No traveler with this id!' });
      return;
    }
    res.status(200).json(travelerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
