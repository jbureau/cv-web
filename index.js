var express = require('express');
var WPAPI = require('wpapi');

var app = express();
app.use(express.static('.'));

app.get('/', function (req, res) {
  res.sendFile('./index.html');
});

app.get('/missions', function (req, res) {
  wp.missions().then(function (response) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(response));
  })
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// You must authenticate to be able to POST (create) a post
var wp = new WPAPI({
  endpoint: 'http://orchisconseil.fr/wp-json',
  // This assumes you are using basic auth, as described further below
  username: 'XAmCKmp4qHMTeaPTyEmA7obq',
  password: 'r3rmLdQIsZdBRwDE2tCk9TlbB3MUudfD7L2xThbovAYwr1jn'
});
wp.missions = wp.registerRoute('wp/v2', '/mission/(?P<id>)');