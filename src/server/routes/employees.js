const express = require('express');
const router = express.Router();
const {getAll, getWhere, updateEmp, newEmp, getEmpWork, getEmpDonut, deleteWhere} =  require('../queries/index')

const indexController = require('../controllers/index');

router.get('/', function (req, res, next) {
  getAll('employees')
  .then(getEmpWork)
  .then(getEmpDonut)
  .then((data) => res.send({employees: data}))
});

router.get('/new', function (req, res, next) {
  var donuts;
  var shops;

  var promise = [
    getAll('donuts')
    .then((data) => donuts = data),
    getAll('shops')
    .then((data) => shops = data)
  ]
  getAll('donuts')
  .then((data) => {
    return donuts = data
  })
  .then(() => {
    getAll('shops')
    .then((data) => {
      shops = data
      res.send({donuts, shops})
    })
  })
})

router.get('/:id', function(req, res, next) {
  getWhere('employees', 'id', req.params.id)
  .then(getEmpWork)
  .then(getEmpDonut)
  .then((data) => data.length ? res.send({employee: data[0]}) : res.send({ message: 'Shop not found'}))
})

router.get('/:id/edit', function(req, res, next) {
  var donuts;
  getAll('donuts')
  .then((data) => donuts = data)
  var shops;
  getAll('shops')
  .then((data) => shops = data)
  getWhere('employees', 'id', req.params.id)
  .then(getEmpWork)
  .then(getEmpDonut)
  .then((data) => res.send(employee: data[0], donuts, shops}))
})

router.post('/:id/edit', function(req, res, next) {
  updateEmp(req.params.id, req.body)
  .then(() => res.redirect('/employees'))
})

router.post('/new', function(req, res, next) {
  newEmp(req.body)
  .then(() => res.redirect('/employees'))
})

router.post('/:id/delete', function (req, res, next) {
  deleteWhere('employees', 'id', req.params.id)
  .then(() => res.redirect('/employees'))
})

module.exports = router;
