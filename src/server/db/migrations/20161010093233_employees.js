
exports.up = function(knex, Promise) {
  return knex.schema.createTable('employees', function(table) {
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.string('email');
    table.integer('favorite_donut');
    table.integer('shop_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('employees')
};
