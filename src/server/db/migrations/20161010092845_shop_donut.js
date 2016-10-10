
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shop_donut', function(table) {
    table.increments();
    table.integer('shop_id');
    table.integer('donut_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shop_donut')
};
