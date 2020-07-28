
exports.up = function(knex) {
  return knex.schema.table('comments', (table) => {
    table.string('main_text');
    table.string('author');
  });
  
};

exports.down = function(knex) {
  return knex.schema.table('comments', (table) => {
    table.dropColumn('main_text');
    table.dropColumn('author');
  });
};
