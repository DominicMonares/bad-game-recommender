const express = require('express');
const path = require('path');

const createServer = () => {
  const app = express();
  app.use('/', express.static(path.join(__dirname, '..', '/client/dist')));
  return app;
}

module.exports = createServer;
