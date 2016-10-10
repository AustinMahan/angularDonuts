const express = require('express');
const router = express.Router();
var {getAll, getWhere, updateDonut, newDonut, getDonutShops, deleteWhere} =  require('../queries/index')

const indexController = require('../controllers/index');

router.get('/', function (req, res, next) {
  getAll('donuts')
  .then(getDonutShops)
  .then((data) => res.render('donuts', {donuts: data}))
});

router.get('/new', function (req, res, next) {
  getAll('shops')
  .then((data) => res.render('new_donut', {shops: data}))
})

router.get('/:id', function(req, res, next) {
  getWhere('donuts', 'id', req.params.id)
  .then(getDonutShops)
  .then((data) => data.length ? res.render('oneDonut', {donut: data[0]}) : res.render('error', { message: 'Donut not found'}))
})

router.get('/:id/edit', function(req, res, next) {
  var shops;
  getAll('shops')
  .then((data) => shops = data)
  .then(() => {
    getWhere('donuts', 'id', req.params.id)
    .then((data) => res.render('editDonut', {donut: data[0], shops}))
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
