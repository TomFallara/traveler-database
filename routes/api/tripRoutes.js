const router = require('express').Router();
const Trip = require('../../models/trip');

// GET all travelers
router.get('/', async (req, res) => {
  try {
    const tripData = await Trip.findAll();
    res.status(200).json(tripData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a traveler
router.get('/:id', async (req, res) => {
  try {
    const tripData = await Trip.findByPk(req.params.id);
    if (!tripData) {
      res.status(404).json({ message: 'No traveler with this id!' });
      return;
    }
    res.status(200).json(tripData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST create a new traveler
router.post('/', async (req, res) => {
  try {
    const tripData = await Trip.create({
      name: req.body.name,
      email: req.body.email,
    });
    res.status(200).json(tripData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE a traveler
router.put('/:id', async (req, res) => {
  try {
    const tripData = await Trip.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!tripData[0]) {
      res.status(404).json({ message: 'No traveler with this id!' });
      return;
    }
    res.status(200).json(tripData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a traveler
router.delete('/:id', async (req, res) => {
  try {
    const tripData = await Trip.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tripData) {
      res.status(404).json({ message: 'No traveler with this id!' });
      return;
    }
    res.status(200).json(tripData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
