const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();

const indexFile = express.static(path.join(__dirname + '/dist'));

app.use(indexFile);

app.use(history({
  disableDotRule: true,
  verbose: true
}));

app.use(indexFile);

app.get('/', function (req, res) {
  res.render(path.join(__dirname + '/dist/index.html'));
});

var server = app.listen(process.env.PORT || 5000, function () {
  var port = server.address().port;
});