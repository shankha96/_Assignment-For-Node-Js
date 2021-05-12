module.exports = {

  // Configure your security settings for production.     
  security: {
    // If this app has CORS enabled(see `config/security.js`) with the
    cors: {},
  },

  // Set the production log level.   
  log: {
    level: 'debug'
  },

  http: {
    // The number of milliseconds to cache static assets in production.
    cache: 365.25 * 24 * 60 * 60 * 1000, // One year
  },

  // Lift the server on port 80.
  port: parseInt(process.env.PORT),

  // Any custom configurations
  custom: {},
};
