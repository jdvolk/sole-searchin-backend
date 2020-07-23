const shoeData = require('../../../../Data/ShoeData.json');
const tableData = shoeData.map(shoe => (
  {
    brand: shoe.brand,
    model: shoe.shoe,
    product: shoe.name,
    title: shoe.title,
    colorway: shoe.colorway,
    demographic: shoe.gender,
    retail_price: shoe.retailPrice,
    year: shoe.year,
    image_url: shoe.imageUrl,
    small_image_url: shoe.smallImageUrl,
    thumb_url: shoe.thumbUrl,
    release_date: shoe.releaseDate,
  }
))
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('shoes').del();
      // Inserts seed entries
  await knex('shoes').insert(tableData);

};
