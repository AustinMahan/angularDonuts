const express = require('express');
const router = express.Router();
var {getAll, getWhere, updateDonut, newDonut, getDonutShops, deleteWhere} =  require('../queries/index')

const indexController = require('../controllers/index');

router.get('/', function (req, res, next) {
  getAll('donuts')
  .then(getDonutShops)
  .then((data) => res.send(data))
});

router.get('/new', function (req, res, next) {
  getAll('shops')
  .then((data) => res.send(data))
})

router.get('/:id', function(req, res, next) {
  getWhere('donuts', 'id', req.params.id)
  .then(getDonutShops)
  .then((data) => data.length ? res.send(data[0]) : res.send({'Donut not found'}))
})

router.get('/:id/edit', function(req, res, next) {
  var shops;
  getAll('shops')
  .then((data) => shops = data)
  .then(() => {
    getWhere('donuts', 'id', req.params.id)
    .then((data) => res.send(data[0]))
  })
})

router.post('/:id/edit', function(req, res, next) {
  updateDonut(req.params.id, req.body)
  .then((data) => res.redirect('/donuts'))
})

router.post('/new', function(req, res, next) {
  newDonut(req.body)
  .then(() => res.redirect('/donuts'))
})

router.post('/:id/delete', function (req, res, next) {
  deleteWhere('donuts', 'id', req.params.id)
  .then(() => deleteWhere('shop_donut', 'donut_id', req.params.id))
  .then(() => res.redirect('/donuts'))
})

module.exports = router;
