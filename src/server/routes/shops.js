const express = require('express');
const router = express.Router();
var {getAll, getWhere, updateShop, newShop, deleteWhere, getEmps, getDonuts, getDonutsSold} =  require('../queries/index')

const indexController = require('../controllers/index');

router.get('/', function (req, res, next) {
  getAll('shops')
  .then((data) => res.send(data))
});

router.get('/new', function (req, res, next) {
  res.send('newShop')

router.get('/:id', function(req, res, next) {
  getWhere('shops', 'id', req.params.id)
  .then(getEmps)
  .then(getDonutsSold)
  .then((data) => data.length ? res.send(data[0]) : res.send({ message: 'Shop not found'}))
})

router.get('/:id/edit', function(req, res, next) {
  getWhere('shops', 'id', req.params.id)
  .then(getDonuts)
  .then((data) => res.send(data[0]))
})

router.post('/:id/edit', function(req, res, next) {
  updateShop(req.params.id, req.body)
  .then((data) => res.redirect('/shops'))
})

router.post('/new', function(req, res, next) {
  newShop(req.body)
  .then(() => res.redirect('/shops'))
})

router.post('/:id/delete', function (req, res, next) {
  deleteWhere('shops', 'id', req.params.id)
  .then(() => deleteWhere('shop_donut', 'shop_id', req.params.id))
  .then(() => deleteWhere('employees', 'shop_id', req.params.id))
  .then(() => res.redirect('/shops'))
})

module.exports = router;
