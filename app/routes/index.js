const routes = require('express').Router();

const admin = require('./admin.routes');

const category = require('./category.routes');

routes.use(admin);

routes.use(category);

module.exports = routes;