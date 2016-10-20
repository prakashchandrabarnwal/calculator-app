var express = require('express');
var app = express();

app.use(express.static(__dirname + '/../client'));

app.listen(process.env.PORT || 8080, function () {
  console.log('Calculator app listening on port 8080!');
});