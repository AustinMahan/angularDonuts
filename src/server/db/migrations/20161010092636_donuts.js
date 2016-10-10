
exports.up = function(knex, Promise) {
  return knex.schema.createTable('donuts', function(table) {
    table.increments();
    table.string('name');
    table.string('topping');
    table.integer('price');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('donuts')
};
