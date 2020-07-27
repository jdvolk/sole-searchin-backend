// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/sole_searchin',
    migrations: {
      directory: './server/db/migrations', 
    },
    seeds: {
      directory: './server/db/seeds/dev'
    },
    useNullAsDefault: true,
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './server/db/migrations', 
    },
    seeds: {
      directory: './server/db/seeds/dev'
    },
    useNullAsDefault: true,
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/sole_searchin',
    migrations: {
      directory: './server/db/migrations'
    },
    seeds: {
      directory: './server/db/seeds/dev'
    },
    useNullAsDefault: true,
  },

};