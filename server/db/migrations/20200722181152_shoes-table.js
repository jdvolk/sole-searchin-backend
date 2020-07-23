
exports.up = function(knex) {
  return knex.schema
    .createTable('shoes', function(table) {
      table.increments('id').primary();
      table.string('brand'); // "vans" 
      table.string('model'); // "vans og sid" shoe on data
      table.string('product'); // "black and white check" name on data
      table.string('title'); // "Vans OG Sid Black & White Check" 
      table.string('colorway'); // "Black/Classic White-Checkerboard"
      table.string('demographic'); // "men" gender
      table.integer('retail_price');
      // table.integer('resell_price');
      table.integer('year');
      table.timestamp('release_date'); 
      table.string('image_url');
      table.string('small_image_url');
      table.string('thumb_url');
      table.timestamps(true, true);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('shoes');
  
};
