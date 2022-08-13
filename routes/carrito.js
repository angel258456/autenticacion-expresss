const express = require('express');
const router = express.Router();
const carrito = require('../services/carrito');

/* GET carrito */
router.get('/', async function(req, res, next) {
  try {
    res.json(await carrito.getCarrito(req.query.page));
  } catch (err) {
    console.error(`Error while getting productos `, err.message);
    next(err);
  }
});

/* POST programming language */
router.post('/', async function(req, res, next) {
  try {
    res.json(await carrito.create(req.body));
  } catch (err) {
    console.error(`Error while creating carrito`, err.message);
    next(err);
  }
});

module.exports = router;