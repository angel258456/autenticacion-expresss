const express = require('express');
const router = express.Router();
const productos = require('../services/productos');

/* GET productos */
router.get('/', async function(req, res, next) {
  try {
    res.json(await productos.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting productos `, err.message);
    next(err);
  }
});

/* get a single producto*/
router.get("/:id",async function(req,res,next){
    try{
        res.json(await productos.getSingle(req.params.id))
    }catch(err){console.error(`Error while getting productos `, err.message);
    next(err);}
})

/* POST producto */
router.post('/', async function(req, res, next) {
    try {
      res.json(await productos.create(req.body));
    } catch (err) {
      console.error(`Error while creating producto`, err.message);
      next(err);
    }

    /* DELETE producto */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await productos.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting producto`, err.message);
    next(err);
  }
});
  });


module.exports = router;