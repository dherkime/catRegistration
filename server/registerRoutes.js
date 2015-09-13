var mongoose = require('mongoose');

var RegistrationDB = mongoose.model('Registration');

module.exports = {

  checkUsername : function(request, response) {
    RegistrationDB.find({ username: request.query.username }).exec(
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
    signup.save(function() {
      response.json(new Registration(request.body));
    });
  }

};
