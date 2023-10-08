const express = require('express');

const url = "/admin";


const routes = express.Router();

const admin = require('./../controllers/admin.controller');

const verifyJWT = require('./../middelware/verify-jwt');

routes.get(url, verifyJWT, admin.adminList);

routes.post(url, admin.adminLogin);

module.exports = routes;