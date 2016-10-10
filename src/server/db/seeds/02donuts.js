
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('donuts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('donuts').insert({ name: 'Glazed', topping: 'None', price: Math.ceil(Math.random() * 6)}),
        knex('donuts').insert({ name: 'chocolate', topping: 'More chocolate', price: Math.ceil(Math.random() * 6)}),
        knex('donuts').insert({ name: 'Rasberry', topping: 'sprinkles', price: Math.ceil(Math.random() * 6)})
      ]);
    });
};
