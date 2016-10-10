
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shops', function(table) {
    table.increments();
    table.string('name');
    table.string('city');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shops');
};
