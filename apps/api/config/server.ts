export default ({ env }) => ({
  host: env('HOST', 'localhost'),
  url:
    process.env['NODE_ENV'] === 'production'
      ? '@CHANGE_TO_PROD_URL'
      : 'http://localhost:1337/',
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
