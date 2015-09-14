var mongoose = require('mongoose');

var Registration = mongoose.model('Registration');

module.exports = {

  checkUsername : function(request, response) {
    Registration.find({ username: request.query.username }).exec(
      function(err, user) {
        setTimeout(function() {
          var ok = !(user.length || err);
          response.status(ok ? 200 : 400).json({
            ok : ok
          });
        }, 500);
    });
  },

  create : function(request, response) {
    var registration = new Registration(request.body);
    registration.save(function() {
      response.json(registration);
    });
  }

};
