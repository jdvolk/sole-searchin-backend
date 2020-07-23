
exports.up = function(knex) {
  return knex.schema
    .createTable('comments', function(table) {
      table.increments('id').primary();
      //add more columns for other data we need for comments
      table.integer('shoe_id').unsigned();
      table.foreign('shoe_id')
        .references('shoes.id');
      table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema
   .dropTable('comments');
};
