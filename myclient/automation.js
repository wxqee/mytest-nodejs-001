var config = require('./config');
var http = require('http');

console.log('host=' + config.endpoint.host);
console.log('port=' + config.endpoint.port);

var options = {
  hostname: config.endpoint.host,
  port: config.endpoint.port,
  path: '/cases/test_hello.CN',
  method: 'GET'
};

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

// write data to request body
//req.write('data\n');
//req.write('data\n');
req.end();


