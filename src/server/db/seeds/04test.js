
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('admins').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('admins').insert({user_name: 'amahan', password: '$2a$09$zHF0lexz/c/sw2jHX.iE8e6i5jH2KzKAtgnxrJ1aUp7WLI0FIQj0C'})
      ]);
    });
};
