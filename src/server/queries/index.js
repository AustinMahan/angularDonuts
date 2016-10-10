const knex = require('../db/knex');

module.exports = {getAll, getWhere, updateShop, newShop, getEmpWork, getEmpDonut, updateEmp, newEmp, getDonutShops, newDonut, updateDonut, deleteWhere, getEmps, getDonuts, getDonutsSold}

function getAll(table) {
  return knex(table)
}

function getWhere(table, col, id) {
  return knex(table).where(col, id)
}

function updateShop(id, data) {
  return knex('shops')
  .where('id', id)
  .update({
    city: data.city,
    name: data.name
  })
  .then(() => deleteWhere('shop_donut', 'shop_id', id))
  .then(() => {
    if (typeof data.donuts == 'string') {
      data.donuts = [data.donuts]
    }
    var promise = data.donuts.map(function (donutID) {
      return knex('shop_donut').insert({
        shop_id: id,
        donut_id: donutID
      })
    })

    return Promise.all(promise)
  })
}

function updateEmp(id, data) {
  return knex('employees')
  .where('id', id)
  .update({
    first_name: data.first_name,
    last_name: data.last_name,
    favorite_donut: data.favorite_donut,
    shop_id: data.shop_id,
    email: data.email
  })
}

function getEmpWork(data) {
  var allEmps = []
  var promise = data.map(function(emp) {
    return getWhere('shops', 'id', emp.shop_id).then((work) => {
      emp.work = work[0]
      allEmps.push(emp)
    })
  })
  return Promise.all(promise).then(() => {return allEmps})
}

function getEmpDonut(data) {
  var allEmps = []
  var promise = data.map(function(emp) {
    return getWhere('donuts', 'id', emp.favorite_donut).then((donut) => {
      emp.donut = donut[0]
      allEmps.push(emp)
    })
  })
  return Promise.all(promise).then(() => {return allEmps})
}

function newShop(body) {
  return knex('shops').insert({
    name: body.name,
    city: body.city
  })
}

function newDonut(body) {
  return knex('donuts').insert({
    name: body.name,
    topping: body.topping,
    price: body.price
  })
  .returning('id')
  .then((donut_id) => {
    return knex('shop_donut').insert({
      shop_id: body.shop_id,
      donut_id: donut_id[0]
    })
  })
}

function newEmp(body) {
  return knex('employees').insert({
    first_name: body.first_name,
    last_name: body.last_name,
    favorite_donut: body.favorite_donut,
    shop_id: body.shop_id,
    email: body.email
  })
}

function getDonutShops(data) {
  var allDonuts = []
  var promise = data.map(function (donut) {
    return getWhere('shop_donut', 'donut_id', donut.id)
    .distinct('shop_id')
    .then((shops) => {
      donut.shops = [];
      var anotherPromise = shops.map(function (shop) {
        return getWhere('shops', 'id', shop.shop_id).then((curShop) => {
          donut.shops.push(curShop[0])
        })
      })
      return Promise.all(anotherPromise).then(() => {
        allDonuts.push(donut)
      })
    })
  })
  return Promise.all(promise).then(() => {
    // console.log(allDonuts);
    return allDonuts
  })
}
function updateDonut(id, body) {
  return knex('donuts').where('id', id)
  .update({
    name: body.name,
    topping: body.topping,
    price: body.price
  })
  .then(() => {
    return knex('shop_donut')
    .where('donut_id', id)
    .del()
  })
  .then(() => {
    if (typeof body.shops == 'string') {
      body.shops = [body.shops]
    }
    var promise = body.shops.map(function (shopId) {
      return knex('shop_donut').insert({
        shop_id: shopId,
        donut_id: id
      })
    })

    return Promise.all(promise)
  })
}

function getEmps(data) {
  return getWhere('employees', 'shop_id', data[0].id)
  .then((emps) => {
    data[0].employees = emps
    return data
  })
}

function deleteWhere(table, col, val) {
  return knex(table).where(col, val).del()
}

function getDonutsSold(data) {
  var allDonuts = []
  return getWhere('shop_donut', 'shop_id', data[0].id)
  .distinct('donut_id')
  .then((donuts) => {
    var promise = donuts.map(function (donutId) {
      return getWhere('donuts', 'id', donutId.donut_id).then((singleDonut) => {
        allDonuts.push(singleDonut[0])
      })
    })
    return Promise.all(promise).then(() => {
      data[0].donuts = allDonuts
      return data;
    })
  })
}

function getDonuts(data) {
  return getAll('donuts')
  .then((donuts) => {
    data[0].donuts = donuts
    return data
  })
}
