const routes = require('express').Router();

const category = require('./../controllers/category.controller');

const verifyJWT = require('./../middelware/verify-jwt');

const url = '/category';

routes.get(url, verifyJWT, category.getAllCategory);

module.exports = routes;