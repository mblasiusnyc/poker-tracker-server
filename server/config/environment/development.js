'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://admin:password@ds045475.mongolab.com:45475/heroku_f35s7j4k'
    // uri: 'mongodb://localhost/pokertracker-dev'
  },

  seedDB: true
};
