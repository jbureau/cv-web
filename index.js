const fs = require('fs');
const express = require('express');
const WPAPI = require('wpapi');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const port = process.env.PORT || 3000;

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

const local_data_path = './assets/data';

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
  res.sendFile('./dist/index.html');
});

app.get('/missions', (req, res) => {
  if (process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'local') {
    res.send(JSON.stringify(JSON.parse(fs.readFileSync(`${local_data_path}/mission.json`, 'utf8'))));
  } else {
    wp.missions().then(response => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(response));
    });
  }
});

app.get('/domaines', (req, res) => {
  if (process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'local') {
    res.send(JSON.stringify(JSON.parse(fs.readFileSync(`${local_data_path}/domaine.json`, 'utf8'))));
  } else {
    wp.domaines().then(response => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(response));
    });
  }
});

app.get('/clients', (req, res) => {
  if (process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'local') {
    res.send(JSON.stringify(JSON.parse(fs.readFileSync(`${local_data_path}/client.json`, 'utf8'))));
  } else {
    wp.clients().then(response => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(response));
    });
  }
});

app.listen(port, () => {
  console.log('Listening on port ' + port + '!');
});

// You must authenticate to be able to POST (create) a post
const wp = new WPAPI({
  endpoint: 'http://orchisconseil.fr/wp-json',
  // This assumes you are using basic auth, as described further below
  username: 'XAmCKmp4qHMTeaPTyEmA7obq',
  password: 'r3rmLdQIsZdBRwDE2tCk9TlbB3MUudfD7L2xThbovAYwr1jn'
});

wp.missions = wp.registerRoute('wp/v2', '/mission/(?P<id>)');
wp.domaines = wp.registerRoute('wp/v2', '/domaine/(?P<id>)');
wp.clients = wp.registerRoute('wp/v2', '/client/(?P<id>)');