var registerRoutes = require('./registerRoutes');
module.exports = function(app) {
  app.post('/register', registerRoutes.create);
  app.get('/check-username', registerRoutes.checkUsername);
};
