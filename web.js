var express = require('express');

var apiFiles = './server';
var wwwFiles = './ui';

require(apiFiles + '/app')(function(server) {
  var www = express.static(wwwFiles);
  express()
    .use('/api', server)
    .use('/', www)
    .listen(process.env.PORT || 8888);
});
