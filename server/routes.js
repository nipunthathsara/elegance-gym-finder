/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {
 
  app.use('/api/gyms', require('./api/gym')); 
  app.use('/api/users', require('./api/user')); 
   app.use('/api/nutritionist', require('./api/nutritionist')); 

  app.use('/auth', require('./auth'));
   
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);
 
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};