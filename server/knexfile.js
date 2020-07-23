// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/sole_searchin',
    migrations: {
      directory: './db/migrations', 
    },
    useNullAsDefault: true,
  },

};