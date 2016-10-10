
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shops').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('shops').insert({city: 'Denver', name: 'VooDoo Donuts'}),
        knex('shops').insert({city: 'New York', name: 'Krispy Creams'}),
        knex('shops').insert({city: 'Thornton', name: 'Dunken Donuts'})
      ]);
    });
};
