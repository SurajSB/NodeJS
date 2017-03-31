var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Congratulations you have successfully running the service!')
});

app.get('/getData', function (req, res) {
  res.send('{"name:"suraj"}')
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
});

