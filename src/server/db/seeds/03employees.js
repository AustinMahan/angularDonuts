var faker = require('faker')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employees').del()
    .then(function () {
      var minShop;
      var maxShop;
      var minDonut;
      var maxDonut;
      var promise = [
        knex('shops').min('id').then((data) => minShop = data[0].min),
        knex('shops').max('id').then((data) => maxShop = data[0].max),
        knex('donuts').min('id').then((data) => minDonut = data[0].min),
        knex('donuts').max('id').then((data) => maxDonut = data[0].max)
      ]
      return Promise.all(promise).then(() => {
        return Promise.all([
          // Inserts seed entries
          knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), favorite_donut: Math.round(Math.random() * (maxDonut - minDonut)) + minDonut, shop_id: Math.round(Math.random() * (maxShop - minShop)) + minShop}),
          knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), favorite_donut: Math.round(Math.random() * (maxDonut - minDonut)) + minDonut, shop_id: Math.round(Math.random() * (maxShop - minShop)) + minShop}),
          knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), favorite_donut: Math.round(Math.random() * (maxDonut - minDonut)) + minDonut, shop_id: Math.round(Math.random() * (maxShop - minShop)) + minShop}),
          knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), favorite_donut: Math.round(Math.random() * (maxDonut - minDonut)) + minDonut, shop_id: Math.round(Math.random() * (maxShop - minShop)) + minShop}),
          knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), favorite_donut: Math.round(Math.random() * (maxDonut - minDonut)) + minDonut, shop_id: Math.round(Math.random() * (maxShop - minShop)) + minShop}),
          knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), favorite_donut: Math.round(Math.random() * (maxDonut - minDonut)) + minDonut, shop_id: Math.round(Math.random() * (maxShop - minShop)) + minShop}),
          knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), favorite_donut: Math.round(Math.random() * (maxDonut - minDonut)) + minDonut, shop_id: Math.round(Math.random() * (maxShop - minShop)) + minShop}),
          knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), favorite_donut: Math.round(Math.random() * (maxDonut - minDonut)) + minDonut, shop_id: Math.round(Math.random() * (maxShop - minShop)) + minShop}),
          knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), favorite_donut: Math.round(Math.random() * (maxDonut - minDonut)) + minDonut, shop_id: Math.round(Math.random() * (maxShop - minShop)) + minShop}),
          knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), favorite_donut: Math.round(Math.random() * (maxDonut - minDonut)) + minDonut, shop_id: Math.round(Math.random() * (maxShop - minShop)) + minShop}),
          knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), favorite_donut: Math.round(Math.random() * (maxDonut - minDonut)) + minDonut, shop_id: Math.round(Math.random() * (maxShop - minShop)) + minShop}),
          knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), favorite_donut: Math.round(Math.random() * (maxDonut - minDonut)) + minDonut, shop_id: Math.round(Math.random() * (maxShop - minShop)) + minShop}),
          knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), favorite_donut: Math.round(Math.random() * (maxDonut - minDonut)) + minDonut, shop_id: Math.round(Math.random() * (maxShop - minShop)) + minShop}),
          knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), favorite_donut: Math.round(Math.random() * (maxDonut - minDonut)) + minDonut, shop_id: Math.round(Math.random() * (maxShop - minShop)) + minShop}),
          knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), favorite_donut: Math.round(Math.random() * (maxDonut - minDonut)) + minDonut, shop_id: Math.round(Math.random() * (maxShop - minShop)) + minShop}),
          knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), favorite_donut: Math.round(Math.random() * (maxDonut - minDonut)) + minDonut, shop_id: Math.round(Math.random() * (maxShop - minShop)) + minShop}),
          knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), favorite_donut: Math.round(Math.random() * (maxDonut - minDonut)) + minDonut, shop_id: Math.round(Math.random() * (maxShop - minShop)) + minShop}),
          knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), favorite_donut: Math.round(Math.random() * (maxDonut - minDonut)) + minDonut, shop_id: Math.round(Math.random() * (maxShop - minShop)) + minShop}),
          knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), favorite_donut: Math.round(Math.random() * (maxDonut - minDonut)) + minDonut, shop_id: Math.round(Math.random() * (maxShop - minShop)) + minShop}),
          knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), favorite_donut: Math.round(Math.random() * (maxDonut - minDonut)) + minDonut, shop_id: Math.round(Math.random() * (maxShop - minShop)) + minShop}),
          knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), favorite_donut: Math.round(Math.random() * (maxDonut - minDonut)) + minDonut, shop_id: Math.round(Math.random() * (maxShop - minShop)) + minShop}),
          knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), favorite_donut: Math.round(Math.random() * (maxDonut - minDonut)) + minDonut, shop_id: Math.round(Math.random() * (maxShop - minShop)) + minShop}),
          knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), favorite_donut: Math.round(Math.random() * (maxDonut - minDonut)) + minDonut, shop_id: Math.round(Math.random() * (maxShop - minShop)) + minShop}),
          knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), favorite_donut: Math.round(Math.random() * (maxDonut - minDonut)) + minDonut, shop_id: Math.round(Math.random() * (maxShop - minShop)) + minShop}),
          knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), favorite_donut: Math.round(Math.random() * (maxDonut - minDonut)) + minDonut, shop_id: Math.round(Math.random() * (maxShop - minShop)) + minShop}),
          knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), favorite_donut: Math.round(Math.random() * (maxDonut - minDonut)) + minDonut, shop_id: Math.round(Math.random() * (maxShop - minShop)) + minShop}),
          knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), favorite_donut: Math.round(Math.random() * (maxDonut - minDonut)) + minDonut, shop_id: Math.round(Math.random() * (maxShop - minShop)) + minShop}),
          knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), favorite_donut: Math.round(Math.random() * (maxDonut - minDonut)) + minDonut, shop_id: Math.round(Math.random() * (maxShop - minShop)) + minShop}),
          knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), favorite_donut: Math.round(Math.random() * (maxDonut - minDonut)) + minDonut, shop_id: Math.round(Math.random() * (maxShop - minShop)) + minShop}),
          knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), favorite_donut: Math.round(Math.random() * (maxDonut - minDonut)) + minDonut, shop_id: Math.round(Math.random() * (maxShop - minShop)) + minShop}),
          knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), favorite_donut: Math.round(Math.random() * (maxDonut - minDonut)) + minDonut, shop_id: Math.round(Math.random() * (maxShop - minShop)) + minShop})
        ])
      })
    });
};
