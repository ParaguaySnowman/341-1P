const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Parker Mortensen');
});

module.exports = routes;
